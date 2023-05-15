import logo from "./logo.svg";
import React, {
  Component,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

import "./App.css";
import Students from "./components/Students";
import Profile from "./components/Profile";
import User from "./components/User";
// adding using state class

// class App extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       data :"Nikhil"
//     }
//   }
//   apple()
//   {
//     this.setState({data:"Kataria"})

//   }

// render()
// {
//   return (
//     <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={() => this.apple()}>Click Me</button>
//     </div>
//   );

// }

// }

// ####################### props apps.js #########################

// function App()
// {
//   return(
//     <div className="App">
//       <h1>Hello</h1>
//       <Students name ={"Nikhil"} email={"abc@gmail.com"}/>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>
//   )
// }
// export default App;

// ############# class props #################
// export default class App extends Component

// {

//   constructor()
//   {
//     super();
//     this.state={
//       name: "NIKHIL"
//     }
//   }
//   render()
//   {
//     return(
//          <div className="App">
//       <h1>Hello</h1>
//       <Students name ={this.state.name}/>
//       <button onClick={() => this.setState({name:"Kataria"})}>Update Name</button>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>

//     )
//   }
// }

// #################### TAKING INPUT AND HIDING ################
// function App()

// {
//   const [data,setData] = useState(null)
//   const [print,setPrint] =  useState(false)
//   function getData(val)
//   {
//     console.log(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return(
//     <div className="App">
//       {
//         print?
//         <h1>Hello</h1>
//         :
//         null
//       }

//       <input type="text" onChange={getData} />
//       <button onClick={() => setPrint(true)}>Print Data</button>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>
//   )
// }
// export default App;
// ##################  Toggle Button ###############
// function App()

// {
//   const [status,setStatus] = useState(false);

//   return(
//     <div className="App">
//       {
//         status ?
//         <h1>Helll0</h1>
//         :
//         null
//       }
//       <button onClick={() => setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }
// export default App;

// ##################### CREATING FORMS ################
// function App()

// {
//   const [name,setName] = useState("")
//   const [tnc,setTnc] =useState(false)
//   const [interest,setInterest] =useState("")
//   function getformData(e)
//   {
//     e.preventDefault()
//     console.log(name,tnc,interest)
//   }
//   return(
//     <div className="App">
//       <h1> Hello</h1>
// <form className='' onSubmit={getformData}>
//   <div class="row mb-3">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//     <div class="col-sm-10">
//       <input type="email" class="form-control" id="inputEmail3" onChange={(e) =>setName(e.target.value)}/>
//     </div>
//   </div>
//   <div class="row mb-3">
//     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//     <div class="col-sm-10">
//       <input type="password" class="form-control" id="inputPassword3"onChange={(e) =>setInterest(e.target.value)}/>
//     </div>
//   </div>
//   <fieldset class="row mb-3">
//     <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
//     <div class="col-sm-10">
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  onChange={(e) =>setTnc(e.target.checked)}/>
//         <label class="form-check-label" for="gridRadios1">
//           First radio
//         </label>
//       </div>
//       <div class="form-check">
//         <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onChange={(e) =>setTnc(e.target.checked)}/>
//         <label class="form-check-label" for="gridRadios2">
//           Second radio
//         </label>
//       </div>
//       <div class="form-check disabled">
//         <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" onChange={(e) =>setTnc(e.target.checked)}/>
//         <label class="form-check-label" for="gridRadios3">
//           Third disabled radio
//         </label>
//       </div>
//     </div>
//   </fieldset>
//   <div class="row mb-3">
//     <div class="col-sm-10 offset-sm-2">
//       <div class="form-check">
//         <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(e) =>setTnc(e.target.checked)}/>
//         <label class="form-check-label" for="gridCheck1">
//           Example checkbox
//         </label>
//       </div>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Sign in</button>
// </form>
//     </div>
//   )
// }
// export default App;
// #################### If condition ################
// function App(){

//   useEffect(() =>{
//     console.log("useEffect is working")
//   })
//   function getData(){

//   alert("here is data")
//   }
//   return(

//     <div className="App">
//       <User data={getData}/>
//     </div>
//   )
// }
// export default App

// ###############   REACT JS SEND DATA CHILD TO PARENTS ###############
// function App() {
//   function getData(data) {
//     alert(data);
//   }
//   return (
//     <div className="App">
//       <User alert={getData} />
//     </div>
//   );
// }
// export default App;
// #################### PURE COMPONENT ######################
// class App extends Component{
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//   render()
//   {
//     return (
//       <div className='App'>
//         <h1>Hello</h1>
//         <User count={this.state.count}/>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>
//           Click
//         </button>
//       </div>

//     )
//   }
// }
// export default App;
// ############################ UNCONTROLLED COMPONENTS #########################

// function App() {
//   let refInput = useRef(null);
//   function submitForm(e) {
//     e.preventDefault();
//     console.log("Input 1 :", refInput.current.value);
//     let input3  = document.getElementById('input3').value
//     console.log('input 2 : ' , input3)
//   }
//   return (
//     <div className="App">
//       <h1>Uncontrolled Components</h1>
//       <form onSubmit={submitForm}>
//         <input ref={refInput} type="text" /> <br /> <br />
//         <input id = "input3" type="text" /> <br /> <br />
//         <button> Submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;

// #################################  HOC ########################

// function App() {

//   return (
//     <div className="App">
//     <h1>HOC</h1>
//     <HOCRed cmp={Counter}/>

//     </div>
//   );
// }
// function HOCRed(props){
//   return <h2 style={{backgroundColor:'red' }}> Red : <props.cmp/> </h2>
// }
// function Counter(){
//   const [data,setData] = useState(0)
//   return (
//     <div>
//       <h1>count : {data}</h1>
//       <button onClick={() => setData(data + 1)}> Click</button>
//     </div>
//   );

// }

// export default App;

// ##########################  ROUTING ########################
// import Nav from "./Nav";
// import Navigation from "./Navigation";
// function App() {
//   return (
//     <div className="App">
//       <h1>Dyanmic Programming </h1>
//       <Nav />
//       <Navigation/>
//     </div>
//   );
// }



// export default App;

// ################################## PREVIOUS STATE ####################
function App() {
  const [count,setCount] = useState(1)
  function updateCounter(){
    for(let i =0;i<5;i++)
    {
       setCount((pre) => {
         return pre + 1;
       });
    }
   
  }
  return (
    <div className="App">
      <h1>Previous State </h1>
      <h1>{count}</h1>
      <button onClick={updateCounter}> Update</button>
    </div>
  );
}

export default App;
