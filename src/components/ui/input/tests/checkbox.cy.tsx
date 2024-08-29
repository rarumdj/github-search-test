import { mount } from "cypress/react18";
import { CheckBox } from "../checkbox";

describe("CheckBox Component", () => {
  it("renders", () => {
    mount(<CheckBox id="test-checkbox" name="test" label="Test Label" />);
    cy.get('input[type="checkbox"]').should("exist");
  });

  it("displays the label", () => {
    mount(<CheckBox id="test-checkbox" name="test" label="Test Label" />);
    cy.contains("Test Label").should("be.visible");
  });

  it("applies custom class names", () => {
    mount(
      <CheckBox
        id="test-checkbox"
        name="test"
        label="Test Label"
        className="custom-class"
      />
    );
    cy.get("div").should("have.class", "custom-class");
  });

  it("checks and unchecks the checkbox", () => {
    mount(<CheckBox id="test-checkbox" name="test" label="Test Label" />);
    cy.get('input[type="checkbox"]').check().should("be.checked");
    cy.get('input[type="checkbox"]').uncheck().should("not.be.checked");
  });

  it("handles custom props", () => {
    mount(
      <CheckBox
        id="test-checkbox"
        name="test"
        label="Test Label"
        type="radio"
      />
    );
    cy.get('input[type="radio"]').should("exist");
  });
});
