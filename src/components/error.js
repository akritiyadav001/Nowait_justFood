import React from 'react';
import '../index.css';
import {useRouteError} from 'react-router-dom';


const Error = () =>{
    let error1 = useRouteError();
    console.log(error1);
    console.log(error1);
    return(
        <div>
            <h1 class="errorHeading">Error page!</h1>
            <h2 class="errorHeading2">Opps Something Went Wrong.....</h2>
            <h2 class="errorHeading2">{error1.status}</h2>
        </div>
    )
}
export default Error;