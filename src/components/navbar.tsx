import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  ButtonGroup,
  NavbarBrand,
} from "react-bootstrap";

import ThemeSwitcher from "./themeSwitch";

import SearchIcon from "../assets/icons/search.svg?react";
import PersonIcon from "../assets/icons/person.svg?react";
import React from "react";
import classes from "./navbar.module.css";

type SideProps = {
  handleClose: any;
  show: boolean;
};

const TopDropDown: React.FC<{}> = () => {
  return (
    <DropdownButton
      variant="link"
      as={ButtonGroup}
      align={{ lg: "end" }}
      title={<PersonIcon />}
      id="dropdown-menu-align-responsive-1"
    >
      <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    </DropdownButton>
  );
};

const TopSearch: React.FC<{}> = () => {
  return (
    <form className={`input-group ms-auto`}>
      <input
        type="text"
        className="form-control"
        placeholder="search options"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button className="btn btn-primary" type="button" id="button-addon2">
        <SearchIcon />
      </button>
    </form>
  );
};

export function TopNavbar({ handleShow }: { handleShow: any }) {
  return (
    <Navbar expand="sm" className={"h-5"}>
      <Container fluid>
        <Button variant="none" className="d-sm-none fw-4 btn-link" onClick={handleShow}>
          ▚
        </Button>

        <NavbarBrand className="fw-bold">React Dashboard</NavbarBrand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ThemeSwitcher />
            <TopSearch />
            <TopDropDown />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// sidenav component

export function SideNavbar({ handleClose, show }: SideProps) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      responsive="sm"
      className={"overflow-x-auto"}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Company Dashboard</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={classes.sidebar + " d-flex flex-column ps-4"}>
        <NavLink to="/version1/resumes">
          <PersonIcon /> Tableau de bord
        </NavLink>
        <SideBarAccordion />
        <hr />
        <NavLink to="/version1/abonnements">
          <PersonIcon /> abonnements
        </NavLink>
        <NavLink className="link" to="/version1/historiques">
          <PersonIcon /> Edition & historiques
        </NavLink>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

const SideBarAccordion: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = (): void => setOpen(!open);

  return (
    <div className={classes.navAccordion} onMouseLeave={() => setOpen(false)}>
      <button onClick={toggleOpen}>
        <SearchIcon className={open ? classes.ico : ""} />
        Parametrages
      </button>
      <div className={open ? classes.openAccordion : ""}>
        <NavLink to="/version1/paramètrages/comptes">
          <PersonIcon /> comptes
        </NavLink>
        <NavLink to="/version1/paramètrages/utilisateurs">
          <PersonIcon /> utilisateurs
        </NavLink>
        <NavLink to="/version1/paramètrages/opérateurs">
          <PersonIcon /> opérateurs
        </NavLink>
      </div>
    </div>
  );
};
