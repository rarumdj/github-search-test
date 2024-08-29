import { mount } from "cypress/react18";
import ListFilters from ".";

describe("ListFilters Component", () => {
  let handleClearSearch: () => void;

  const params = {
    q: "facebook",
    type: "org",
  };

  beforeEach(() => {
    handleClearSearch = cy.stub().as("handleClearSearch");
  });

  it("renders filter keywords", () => {
    mount(
      <ListFilters handleClearSearch={handleClearSearch} params={params} />
    );
    cy.get("div").should("exist");

    cy.contains("facebook").should("be.visible");
    cy.contains("org").should("be.visible");
  });

  it("renders Clear search button", () => {
    mount(<ListFilters handleClearSearch={() => {}} params={{}} />);
    cy.get("button").contains("Clear search").should("be.visible");
  });

  it("calls handleClearSearch on button click", () => {
    const handleClearSearch = cy.stub().as("handleClearSearch");
    mount(<ListFilters handleClearSearch={handleClearSearch} params={{}} />);
    cy.get("button").click();
    cy.get("@handleClearSearch").should("have.been.calledOnce");
  });

  it("applies proper styling to filter keywords", () => {
    mount(<ListFilters handleClearSearch={() => {}} params={params} />);

    cy.get("[data-testid='badge']").each(($span) => {
      cy.wrap($span).should("have.class", "bg-gray-200");
      cy.wrap($span).should("have.class", "border");
      cy.wrap($span).should("have.class", "px-3");
      cy.wrap($span).should("have.class", "py-1");
      cy.wrap($span).should("have.class", "rounded-lg");
      cy.wrap($span).should("have.class", "text-sm");
    });
  });
});
