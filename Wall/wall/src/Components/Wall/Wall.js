import React from 'react'

import './Wall.css';

import Brick  from '../Brick/Brick.js';


class Wall extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
           
            Bricks: [1]            
        };
    }

    addBrick = () => {
        let updatedBricks = [... this.state.Bricks, this.state.Bricks.length + 1];
        this.setState({
            Bricks: updatedBricks
        })
        console.log('brick added');

                
    }
    
    
    render = () => {

        return(<>
        
            <div className="Button-Props">

                <button  onClick = {this.addBrick} > Add Brick </button>
            </div>
            
            <div className= "Wall-Props">

            

            {this.state.Bricks.map( (brick) => {
                return <Brick key= {brick} name = {brick} />
            })}  

            
                
            

            

            </div>
        
        </>);
    }     
        
        
    
}

export default Wall;