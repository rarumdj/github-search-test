import { mount } from "cypress/react18";
import ProfileCard from ".";

describe("ProfileCard Component", () => {
  const defaultProps = {
    name: "Facebook",
    link: "https://example.com",
    type: "Organization",
  };
  const avatarUrl = "https://via.placeholder.com/150";

  it("renders name and link", () => {
    mount(<ProfileCard {...defaultProps} />);

    cy.contains("Facebook").should("be.visible");

    cy.contains("https://example.com").should("be.visible");
  });

  it("renders avatar when provided", () => {
    mount(<ProfileCard {...defaultProps} avatar={avatarUrl} />);

    cy.get("img")
      .should("have.attr", "src", avatarUrl)
      .and("have.attr", "alt", "avatar")
      .should("be.visible");
  });

  it("renders default avatar when no avatar is provided", () => {
    mount(<ProfileCard {...defaultProps} />);

    cy.get("img")
      .should("have.attr", "src", "https://via.placeholder.com/150")
      .and("have.attr", "alt", "avatar")
      .should("be.visible");
  });

  it("renders the type badge", () => {
    mount(<ProfileCard {...defaultProps} />);

    cy.contains("Organization").should("be.visible");
  });

  it("renders correctly with all props", () => {
    const avatarUrl = "https://via.placeholder.com/150";
    mount(
      <ProfileCard
        avatar={avatarUrl}
        name="Facebook"
        link="https://example.com"
        type="Organization"
      />
    );

    cy.get("img")
      .should("have.attr", "src", avatarUrl)
      .and("have.attr", "alt", "avatar")
      .should("be.visible");

    cy.contains("Facebook").should("be.visible");
    cy.contains("https://example.com").should("be.visible");
    cy.contains("Organization").should("be.visible");
  });
});
