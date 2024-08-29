import { mount } from "cypress/react18";
import Loading from "..";

describe("Loading Component", () => {
  it("renders the loading message", () => {
    mount(<Loading />);
    cy.contains("Please wait...").should("be.visible");
  });

  it("renders the ThreeDots loader", () => {
    mount(<Loading />);
    cy.get("svg").should("exist");
  });
});
