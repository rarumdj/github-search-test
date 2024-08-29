import { mount } from "cypress/react18";
import { Input } from "../input";

describe("Input Component", () => {
  it("renders", () => {
    mount(<Input name="test" label="Test Label" />);
    cy.get("input").should("exist");
  });

  it("displays the label", () => {
    mount(<Input name="test" label="Test Label" />);
    cy.contains("Test Label").should("be.visible");
  });

  it("applies custom class names", () => {
    mount(
      <Input
        name="test"
        label="Test Label"
        className="custom-class"
        containerClassName="container-class"
      />
    );
    cy.get("input").should("have.class", "custom-class");
    cy.get("[data-testid='input-container']").should(
      "have.class",
      "container-class"
    );
  });

  it("applies size classes", () => {
    mount(<Input name="test" label="Test Label" size="large" />);
    cy.get("input").should("have.class", "p-4.5");
    cy.get("input").should("have.class", "text-base");
  });

  it("displays placeholder", () => {
    mount(<Input name="test" label="Test Label" placeholder="Enter text" />);
    cy.get("input").should("have.attr", "placeholder", "Enter text");
  });

  it("handles disabled state", () => {
    mount(<Input name="test" label="Test Label" disabled />);
    cy.get("input").should("be.disabled");
    cy.get("input").should("have.class", "!hover:border-none");
  });

  it("renders error message when provided", () => {
    const errorMessage = "This field is required";
    mount(<Input name="test" label="Test Label" errorMessage={errorMessage} />);
    cy.get("input").should("have.attr", "aria-invalid", "true");
    cy.contains(errorMessage).should("be.visible");
    cy.get("input").should("have.class", "border-red-500");
  });

  it("do not render error message when not provided", () => {
    mount(<Input name="test" label="Test Label" />);
    cy.get("input").should("have.attr", "aria-invalid", "false");
    cy.get("[role='alert']").should("not.exist");
  });
});
