import { mount } from "cypress/react18";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Home Page", () => {
  beforeEach(() => {
    mount(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  });

  it("should show validation error if search query is empty", () => {
    cy.get("button").contains("Search").click();

    cy.get("[data-testid='validation-alert']").should(
      "contain",
      "Search query is required."
    );
  });

  it("should render the form correctly", () => {
    cy.get("h1").should("contain", "Github search - Test");
    cy.get('input[name="q"]').should("exist");
    cy.get('input[name="type"][value="users"]').should("exist");
    cy.get('input[name="type"][value="org"]').should("exist");
    cy.get("button").should("contain", "Search");
  });

  it("should handle form submission with valid input", () => {
    cy.intercept(
      "GET",
      "https://api.github.com/search/users?q=facebook",
      (req) => {
        req.reply({
          statusCode: 200,
          body: {
            total_count: 1,
            items: [
              {
                login: "facebook",
                avatar_url: "avatar_url_1",
                url: "profile_url_1",
                type: "User",
              },
            ],
          },
        });
      }
    ).as("searchRequest");

    cy.get('input[name="q"]').type("facebook");
    cy.get('input[name="type"][value="users"]').check();
    cy.get("button").contains("Search").click();

    cy.wait("@searchRequest").its("response.statusCode").should("eq", 200);
    cy.get('div[data-testid="result-card"]').should("contain", "facebook");
  });

  it("should handle radio button changes", () => {
    cy.get('input[name="type"][value="users"]').check().should("be.checked");
    cy.get('input[name="type"][value="org"]').should("not.be.checked");
    cy.get('input[name="type"][value="org"]').check().should("be.checked");
    cy.get('input[name="type"][value="users"]').should("not.be.checked");
  });
});
