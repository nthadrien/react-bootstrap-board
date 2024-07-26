import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideNavbar, TopNavbar } from "./navbar";
import { SideNavbar2, TopNavbar2 } from "./navbar2";
import Footer from "./footer";
import Header from "./header";
import classes from "./layouts.module.css";
import Toaster from "./toast";
import { toastMsg } from "../interfaces";

let messages: toastMsg[] = [
  {
    text: "this a toaster warning",
    summary: "501 Pas authoriser",
    type: "warning",
    link: "/",
  },
  {
    text: "this a toaster warning again",
    summary: "Erreur 404",
    type: "warning",
    link: "/",
  },
];

export function DashboardLayoutVersion1() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <main className={classes.body}>
      <Toaster passedMessages={messages} />
      <TopNavbar handleShow={() => setShow(true)} />
      <main className={classes.content}>
          <SideNavbar show={show} handleClose={() => setShow(false)} />
          <section className={classes.pages + " d-flex flex-column gap-4"}>
            <Header />
            <Outlet />
            <Footer />
          </section>
      </main>
    </main>
  );
}

export function DashboardLayoutVersion2() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Toaster passedMessages={messages} />
      <main className={classes.content}>
          <SideNavbar2 show={show} handleClose={() => setShow(false)} />
          <section className={"d-flex flex-column justify-content-between gap-4 "}>
            <TopNavbar2 handleShow={() => setShow(true)} />
            <Footer />
          </section>
      </main>
    </>
  );
}


export function AuthLayout () {
  return (
    <main className="max-container d-flex flex-column align-items-center justify-content-evenly  bg-light-subtle">

      <section className="login-form  shadow-lg p-3 mb-5 rounded-4">
        <h3>Company Name</h3>
        <Outlet />
      </section>
      
      <Footer />
    </main>
  );
}
