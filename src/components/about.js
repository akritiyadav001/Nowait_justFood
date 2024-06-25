import React from 'react';
import UserClass from "./userClass.js";


class About extends React.Component{
    constructor(props)
    {
        super();
        this.state ={
           
        }
    }
    async componentDidMount()
    {
       
    };
    render()
    {
        console.log("Inside Render method");
        return(
            <div>
                <h1>I am about class component</h1>

                <UserClass/>
            </div>
        )
    }
}

/*  const About = () =>{
    return(
        <div>
            <h1>I am about component</h1>
            <UserClass name={"Yadav"} location={"Kanpur"}/>
        </div>
    )
}  */
export default About;