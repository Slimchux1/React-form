import React, { Component } from 'react';
import './index.css'

class Form extends Component {
    constructor(){
        super()
        this.state = { 
            firstname: "",
            lastname: "",
            value: "",
            username: "",
            password: "",
            email: ""
         }
    
    this.firstnameChange =this.firstnameChange.bind(this)
     this.lastnameChange = this.lastnameChange.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    }
    firstnameChange(event) {
        this.setState({
            firstname: event.target.value
        });
    }
    lastnameChange(event) {
        this.setState({
            lastname: event.target.value
        });
    }
        usernameChange(event) {
            this.setState({
                username: event.target.value
            });
        }
        valueChange(event) {
            this.setState({
                value: event.target.value
            });
        } 
        emailChange(event) {
            this.setState({
                email: event.target.value
            });
        } 
        passwordChange(event) {
            this.setState({
                password: event.target.value
            });
        }   
   
    render() { 
        return ( 
            <div id="form">
            <h1 id="head">SignUp to get started</h1>
            <div className="name">
            <label htmlfor="firstname">First Name</label>
            <input type="text" id="fname" name="firstname" value={this.state.firstname} onChange={this.firstnameChange} placeholder="John"/>
            </div>
            <div className="name">
            <label htmlfor="lastname">LastName</label>
            <input type="text" id="lname" name="lastname" value={this.state.lastname} onChange={this.lastnameChange} placeholder="Doe"/>
            </div>
            <div className="name">
             <label htmlfor="gender">Gender</label>
                <select value={this.state.value} onChange={this.valueChange}>
                    <option id="male" value="male">Male</option>
                    <option id="female" value="female">Female</option>
                </select>
            </div>
            <div className="name">
                <label htmlfor="username">User Name</label>
                <input type="text" name="username" value={this.state.username} onChange={this.usernameChange} placeholder="johndoe"/>
            </div>
            <div className="name">
                <label htmlfor="email">Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.emailChange} placeholder="johndoe@gmail.com"/>
            </div>
            <div className="name">
                <label htmlfor="password">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.passwordChange} placeholder="* * * * * * * * * * *"/>
            </div>

            <div>
            <input class="form-check-input" type="checkbox" id="gridCheck" />
           <label class="form-check-label" for="gridCheck">
            I agree
            </label>
            </div>
            <button type="submit" id="btn-form">Register</button>
     </div>     
         );
    }
}
 
export default Form;