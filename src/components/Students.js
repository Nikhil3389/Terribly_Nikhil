// ##############################  PROPS   ###########################
// function Students(props)
// {
//     return(
//         <div>
//           <h1> Name:  {props.name}</h1> 
//           <h2> Email:  {props.email}</h2> 
//           <h3>Phone: {props.phone}</h3>
//           <h4>address: {props.address}</h4>
//         </div>
//     )
// }
// export default Students

import { Component } from "react";




export default class Students extends Component
{
  render()
  {
    console.log(this.props)
    return(
      <div style={{background:'skyblue', margin:20}}> 
        <h1>Hello {this.props.name}</h1>

      </div>
    )
  }
}