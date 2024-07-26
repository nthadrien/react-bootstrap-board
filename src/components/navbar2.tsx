import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { NavDropdown } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ButtonGroup, NavbarBrand, Accordion } from "react-bootstrap";
import Icon1 from "../assets/icons/funny.svg?react";

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

const TopNotification: React.FC<{ expand: string }> = ({ expand }) => {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      <Nav.Link href="#action2">Link</Nav.Link>
      <ThemeSwitcher />
      <NavDropdown
        title="Messages"
        id={`offcanvasNavbarDropdown-expand-${expand}`}
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

const TopSearch: React.FC<{}> = () => {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export function TopNavbar2({ handleShow }: { handleShow: any }) {
  const expand: string = "sm";

  return (
    <Navbar key={expand} expand={expand} className="bg-body-primary mb-3">
      <Container fluid>
        
      <Button variant="none" className="d-sm-none fw-4 btn-link" onClick={handleShow}>
          ▚
        </Button>

        <Navbar.Brand href="#">Company Name</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu des Options 2
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <TopNotification expand={expand}/>
            <TopSearch />
            <TopDropDown />
          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

// sidenav component

export function SideNavbar2({ handleClose, show }: SideProps) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      responsive="sm"
      className={"overflow-x-auto pt-3"}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Company Dashboard</Offcanvas.Title>
      </Offcanvas.Header>
      <h3 className="d-flex justify-content-evenly">
        <Icon1 /> <span className="d-none d-md-none d-lg-inline">Jsx</span>
      </h3>
      <Offcanvas.Body
        className={classes.sidebar + " d-flex flex-column ps-4 pt-5"}
      >
        <Accordion defaultActiveKey="0" flush> 
          {/* first accordion */}
          <Accordion.Item eventKey="0">
            <Accordion.Header className={"p-0"}> 
              <Icon1 />  
              Item #1
            </Accordion.Header>
            <Accordion.Body>

            </Accordion.Body>
          </Accordion.Item>

          {/* second accordion */}
          <Accordion.Item eventKey="1">
            <Accordion.Button className={classes.noo}> 
              <Icon1 />  
              <span>Item #1</span> 
            </Accordion.Button>
            <Accordion.Body>

            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
