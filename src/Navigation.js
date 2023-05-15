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
        <Switch>
          <Route path="/" exact component={Content} />
          {/* <Route path="/chart" component={Chart} /> */}
          {/* <Route path="*" component={PageNot} /> */}
        </Switch>
        <Footer />

        {/* </Switch> */}
      </div>
    );
}
export default Navigation