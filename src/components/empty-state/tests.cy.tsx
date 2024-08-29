import { mount } from "cypress/react18";
import EmptyState from ".";

describe("EmptyState Component", () => {
  it("renders", () => {
    const message = "No data available";
    mount(<EmptyState message={"No data available"} />);
    cy.contains(message).should("be.visible");
  });

  it("applies error style when isError is true", () => {
    const message = "An error occurred";
    mount(<EmptyState message={message} isError={true} />);
    cy.contains(message).should("have.class", "text-red-600");
  });

  it("does not apply error style when isError is false", () => {
    const message = "No data available";
    mount(<EmptyState message={message} isError={false} />);
    cy.contains(message).should("not.have.class", "text-red-600");
  });
});
