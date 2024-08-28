import React from 'react';
import UserClass from "./userClass.js";
import UserContext from '../utils/usercontext.js';


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
            <div className='bg-red-100 mx-auto w-[500px] my-10 p-10'>
                <div>
                 <h1>I am about class component</h1>
                <div>loggedInUser</div>
                 <UserClass/> 
                </div>
                <UserContext.Consumer>
                    {({loggedInUser}) =><h1 className='text-xl font-bold'>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default About;