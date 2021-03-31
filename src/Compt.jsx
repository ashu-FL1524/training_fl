//  import react, { Component } from "react"

//  class Compt extends Component {

//      constructor(props) {
//          super(props)
//          this.state = {
//              isLogged: false,
//              username: '',
//              password: ''
//          }
//      }

//      submitHandler = (e) => {
//          e.preventDefault()
//          console.log("button clicked");
//          this.setState({
//              isLogged: true,
//          })
//      }

//      handleUsername = event => {
//          this.setState({
//              username: event.target.value
//          })
//      }

//      handlePassword = event => {
//          this.setState({
//              password: event.target.value
//          })
//      }

//      handleLogout = event => {
//          this.setState({
//              username : '',
//              password:'',
//              isLogged:false
//          })
//      }

//      render() {
//          const output = this.state.isLogged && <div>"The user {this.state.username} is logged in" <br /> <button onClick={this.handleLogout}>Log Out</button></div> 
         
//          return (
//              <div>
//                  <h1>Please Fill the Form</h1>
//                  <form onSubmit={this.submitHandler}>
//                      <label>Username:</label>
//                      <input type="text" value={this.state.username} onChange={this.handleUsername}/> <br />
//                      <label>Password:  </label>
//                      <input type="password" value={this.state.password} onChange={this.handlePassword} /> <br />
//                      <button>Log In</button>
//                  </form>

//                  {output}
//              </div>
//          )
//      }
//  }
//  export default Compt;

 import React, { Component } from 'react'

 export class Compt extends Component {
     constructor(props){
         super(props);
         this.state={
             name:"",
             pwd:"",
             isLoggedIn:false
         }
     }
     handleName = (e) => {
         this.setState({
             name:e.target.value
         })
     }
     handlePwd = (e) => {
         this.setState({
             pwd:e.target.value
         })
     }
     handleSubmit = () => {
         this.setState({
             isLoggedIn:true
         })
     }
     handleLogout = () => {
         this.setState({
             isLoggedIn:false,
             name:"",
             pwd:""
         })
     }
     render() {
         if(this.state.isLoggedIn)
         {
             return (

             <div>
                 <h1>Welcome, {this.state.name}</h1><br></br>
                 <button onClick={this.handleLogout}>Logout</button>
             </div>
         )}
         else{
             return (
                 <div className="elsediv">
                     <form onSubmit={this.handleSubmit}>
                         <label>UserName: </label><br></br>
                         <input text="text" value={this.state.name} onChange={this.handleName}></input><br></br>
                         <label>Password:  </label><br></br>
                         <input type="password" value={this.state.pwd} onChange={this.handlePwd}></input><br></br><br></br>
                         <input type="submit" value="Log In"></input>
                     </form>
                 </div>
             )
        }
     }
 }

 export default Compt ;