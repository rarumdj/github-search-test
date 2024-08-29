import { mount } from "cypress/react18";
import Button from "../index";

describe("Button Component", () => {
  it("renders", () => {
    mount(<Button>Click Me</Button>);
    cy.contains("Click Me").should("be.visible");
  });

  it("shows loader when loading prop is true", () => {
    mount(<Button loading={true}>Click Me</Button>);
    cy.get("button").find("svg").should("be.visible");
    cy.contains("Click Me").should("not.exist");
  });

  it("applies custom class names", () => {
    mount(<Button className="custom-class">Click Me</Button>);
    cy.get("button").should("have.class", "custom-class");
  });

  it("disables the button when disabled prop is true", () => {
    mount(<Button disabled={true}>Click Me</Button>);
    cy.get("button").should("be.disabled");
    cy.get("button").should("have.class", "cursor-not-allowed");
  });

  it("handles click events", () => {
    const handleClick = cy.stub().as("handleClick");
    mount(<Button onClick={handleClick}>Click Me</Button>);
    cy.get("button").click();
    cy.get("@handleClick").should("have.been.calledOnce");
  });
});
