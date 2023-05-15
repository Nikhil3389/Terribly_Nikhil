import React from "react";
import {Route,Switch} from "react-router-dom"
import NavBar from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
// import Chart from "./components/Chart";
// import PageNot from "./PageNot";

function Navigation(){
    return (
      <div>
        {/* <Switch> */}

        <NavBar />
        <Content/>
        
        <Footer />

        {/* </Switch> */}
      </div>
    );
}
export default Navigation