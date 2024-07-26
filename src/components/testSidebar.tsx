import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
    Accordion,
  AccordionButton,
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



export function TestSideNavbar({ handleClose, show }: SideProps) {
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
          <NavLink to="/resumes">
            <PersonIcon /> Tableau de bord
          </NavLink>
          <SideBarAccordion />
          <hr />
          <NavLink to="/abonnements">
            <PersonIcon /> abonnements
          </NavLink>
          <NavLink className="link" to="/historiques">
            <PersonIcon /> Edition & historiques
          </NavLink>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }
  
  const SideBarAccordion: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    let accord = useRef();
  
    const toggleOpen = (): void => setOpen(!open);
  
    return (
      <div className={classes.navAccordion} onMouseLeave={() => setOpen(false)}>
        <button onClick={toggleOpen}>
          <SearchIcon className={open ? classes.ico : ""} />
          Parametrages
        </button>
        <div className={open ? classes.openAccordion : ""}>
          <NavLink to="/paramètrages/comptes">
            <PersonIcon /> comptes
          </NavLink>
          <NavLink to="/paramètrages/utilisateurs">
            <PersonIcon /> utilisateurs
          </NavLink>
          <NavLink to="/paramètrages/opérateurs">
            <PersonIcon /> opérateurs
          </NavLink>
        </div>

        <Accordion>
            <AccordionButton></AccordionButton>
        </Accordion>
      </div>
    );
  };
  