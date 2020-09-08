import React from 'react'

import "./Form.css"


export class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName: "",
            email: ""          

        };

    }

    onFieldChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        }

        );
    }

    onSubmit = () => {
        
        
        const data = 
        `Username :  ${this.state.userName},
        Email  :  ${this.state.email},`;

        window.alert(data);

        this.clearFields();

    }

    clearFields = () => {
        this.setState({
            userName : "",
            email : ""
        });
    }




    render = () => {
        return (
            <div>
                
                <input name="userName" type="text" onChange={this.onFieldChange} value = {this.state.userName} placeholder="Username" />
                <br/>
                <input name="email" type="email" onChange={this.onFieldChange} value = {this.state.email} placeholder="Email" />
                <br/>
                <button style={ { width:60, height:18}} type="submit" onClick={this.onSubmit}> Submit </button>

            </div>
        )
    }

}