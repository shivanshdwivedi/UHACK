import React, { Component } from 'react';
import firebase from "../../../firebase"
import logo from "../logo.png"
import "./UserPanel.css";
import {Dropdown} from "semantic-ui-react"


class UserPanel extends Component {
    handleSignOut = () => {
        firebase.auth().signOut().then(console.log("signout"))
    }
    dropDownOptions =()=>{
      return(
        [
            {   
                key:"user",
                text:<span>Signed in as <strong>{this.props.currentUser.displayName}</strong></span>,
                disabled:true
            },
            {
                key:"avatar",
                text:<span>Change Avatar</span>,
                disabled:false
            },
            {
                key:"signout",
                text:<span onClick={this.handleSignOut}>Sign Out</span>,
                disabled:false
            }
        ]
      )
    }

    render(){
        return(
            <div id="user-panel">
                <div id="user-panel-header">
                    <img src={logo} alt="logo" style={{height: "40px" , width:"auto" , margin:"10px"}}/>
                    Tale
                </div>
                <Dropdown 
                id="user-panel-dropdown" 
                trigger={<span>My Account</span>} 
                options={this.dropDownOptions()}
                />
            </div>
            
        )
    }
}


export default UserPanel;