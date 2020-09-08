import React from 'react'
import { Background } from '../Background/Background';

import "./ColorSelector.css";

export const ColorSelector = (props) => {
    return(
        <div className = "ColorSelector">
            <p> Choose  A Color </p>
            <input type="color" onChange={props.onChange}></input>
            <p>Color is {props.currentColor}</p>

        </div>
    );
}