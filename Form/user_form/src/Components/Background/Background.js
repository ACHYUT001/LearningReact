import React from 'react'

import "./Background.css";

import { ColorSelector } from "../ColorSelector/ColorSelector";
import { Form } from '../Form/Form';


export class Background extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            BackgroundColor:"white"
        };
    }

    onColorChange = (event) => {
        this.setState({
            BackgroundColor: event.target.value
        });
    }

    
    //override

    render = () => {

        return(
            <div style = {{backgroundColor:this.state.BackgroundColor}} className = "Background">
                {/* <ColorSelector onChange = {this.onColorChange} currentColor = {this.state.BackgroundColor}/> */}
                <Form />
            </div>
        );

    }
    

}


