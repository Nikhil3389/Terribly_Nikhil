import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";

function Navigation() {
  return (
    <div>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}
export default Navigation;
