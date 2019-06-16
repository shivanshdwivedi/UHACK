import "./Channels.css"
import React, { Component } from 'react';
import {Icon, Modal} from "semantic-ui-react"

class Channels extends Component{

    state = {
        channels:[]
    }

    render(){
        const {channels} = this.state;
        return(
            <div id="user-panel-channels" >
                <Icon name="exchange" size="large" color="white" style={{marginRight:"10px"}}/>
                Channels ({channels.length})
                <Icon name="add" size="large" color="white" className="icons" id="add"/>
            </div>
        )
    }
}

export default Channels ;