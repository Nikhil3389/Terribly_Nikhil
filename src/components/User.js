// function User(props){
//     const data ="Nikhil"
//     return(
//         <div>

import { PureComponent } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

//             <h1>Hello User</h1>
//             <button onClick={props.alert(data)}>Click</button>
//         </div>

//     )
// }
// export default User

// #################### FOR PURE COMPONENTS #############################
// class User extends PureComponent
// {
//     render()
//     {
//         console.log("checking ")
//         return(
//             <div className="App">


//                 <h1>User components {this.props.count}</h1>
//             </div>
//         )
//     }
// }
// export default User;

// withRouter
function User(prop){
    console.log(prop)
    return (
      <div>
        <h1> Hi this is user no {prop.match.params.id}</h1>
        {/* <h1> Hi this is user no {prop.match.params.name}</h1> */}
      </div>
    );
}
export default withRouter(User) 