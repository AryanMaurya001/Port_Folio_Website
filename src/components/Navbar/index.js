import React from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constants";
import {
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLogo,
  NavbarContainer,
  Span,
} from "./NavbarStyledComponent";
import { HashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <NavLink
            smooth
            to="/#"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </NavLink>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
            }}
            smooth
            to="#about"
          >
            About
          </NavLink>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
            }}
            smooth
            to="/#skills"
          >
            Skills
          </NavLink>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
            }}
            smooth
            to="/#projects"
          >
            Projects
          </NavLink>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
            }}
            smooth
            to="/#education"
          >
            Education
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              as={NavLink}
              smooth
              to="/"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              as={NavLink}
              smooth
              to="/#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              as={NavLink}
              smooth
              to="/#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              as={NavLink}
              smooth
              to="/#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
