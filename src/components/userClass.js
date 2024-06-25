import React from 'react';
class UserClass extends React.Component{
    constructor(props)
    {
            super(props);
           /*  console.log(props); */
           this.state = {
            userinfo:{
                name:"Dummy",
                profession:"Pune",
                avatar_url:"hey.com"
            },
           }
    }
    async componentDidMount()
    {
        const userData = await fetch("https://api.github.com/users/akritiyadav001");
        const data =  await userData.json();
        console.log(data);
        this.setState({userinfo:data})

    };
    componentDidUpdate()
    {
        console.log("Component updated.");
    }
    
    render()
    {
        debugger;
        // Never update state variables directly
        return(
            <div className="user-card">
                 <img src={this.state.userinfo.avatar_url} style={{width:200}}></img>
                <h2>Name:{this.state.userinfo.name}</h2>
                <h2>Profession: {this.state.userinfo.bio}</h2>
                <h2>Gmail: gdakriti.yadav2gmail.com</h2>  
               
            </div>
        )
    }   

}
export default UserClass;