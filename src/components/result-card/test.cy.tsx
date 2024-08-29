import { mount } from "cypress/react18";
import ResultCard from ".";

describe("ResultCard Component", () => {
  const mockData = {
    total_count: 2,
    items: [
      {
        login: "user1",
        avatar_url: "https://via.placeholder.com/150",
        url: "https://example.com/user1",
        type: "User",
      },
      {
        login: "user2",
        avatar_url: "https://via.placeholder.com/150",
        url: "https://example.com/user2",
        type: "User",
      },
    ],
  };

  it("displays the loading state", () => {
    mount(<ResultCard isPending={true} isSuccess={false} />);
    cy.get("[data-testid='loading']").should("exist");
  });

  it("displays the empty state message when no results yet", () => {
    mount(<ResultCard isPending={false} isSuccess={false} />);
    cy.contains("All your search results will appear here!").should(
      "be.visible"
    );
  });

  it("displays the error message when there is an error", () => {
    const errorMessage = "An error occurred";
    mount(
      <ResultCard isPending={false} isSuccess={false} error={errorMessage} />
    );

    cy.get("[data-testid='empty-state']").should("exist");
  });

  it("displays the empty state message when no data is found", () => {
    mount(
      <ResultCard
        isPending={false}
        isSuccess={true}
        data={{ total_count: 0, items: [] }}
      />
    );
    cy.contains("Nothing was found for your search!").should("be.visible");
  });

  it("displays ProfileCard components when data is found", () => {
    mount(<ResultCard isPending={false} isSuccess={true} data={mockData} />);

    cy.get("[data-testid='profile-card']").should(
      "have.length",
      mockData.items.length
    );
    cy.contains("user1").should("be.visible");
    cy.contains("user2").should("be.visible");
  });

  it("does not display loading, empty, or error state when successful", () => {
    mount(<ResultCard isPending={false} isSuccess={true} data={mockData} />);

    cy.get("[data-testid='loading']").should("not.exist");
    cy.contains("All your search results will appear here!").should(
      "not.exist"
    );
    cy.contains("An error occurred").should("not.exist");
    cy.contains("Nothing was found for your search!").should("not.exist");
  });
});
