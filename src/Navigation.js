import React from "react";
import {Route,Switch} from "react-router-dom"
import About from "./About";
import Home from "./Home";
import PageNot from "./PageNot";
import User from "./components/User";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";
// function Navigation(){
//     return (
//       <div>
//         <Switch>
//           <Route path="/about" component={Home} />
//           <Route path="/" exact={true} element={<Home />} />
//           <Route path="*" element={<PageNot />} />
//         </Switch>
//       </div>
//     );
// }
// export default Navigation

function Navigation(){
    return (
      <div>
        <Switch>
          {/* <Route path="/user/:id" element={<User />} /> */}
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    );
}
export default Navigation