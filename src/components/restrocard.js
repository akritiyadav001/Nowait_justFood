 import React from 'react';
 import {useContext} from 'react';
import "../index.css";
import { CDN_URL } from '../utils/constant';
import UserContext from '../utils/usercontext';
const RestroCard = (props) =>{
    const {restobject} = props;
    const {loggedInUser} = useContext(UserContext);
    const{cloudinaryImageId,name,locality,cuisines,costForTwo,avgRating,id,sla} = restobject?.info;
    return(
        <div className="">
            <div className='m-5 p-4 w-[240px] bg-gray-100 rounded-md'>
                <img id="img1" src={CDN_URL+ cloudinaryImageId} alt='card' className='rounded-md'></img>
                 <h4 className='font-medium my-2'>{name}</h4> 
                 <h4>{locality}</h4>
                 <h4>{cuisines.join(", ")}</h4>
                 <h4>{costForTwo}</h4>
                 <h4>Average Rating: {avgRating}</h4>
                 <h4>{id}</h4>
                 <h4>Delivery time: {sla?.slaString}</h4>
                 <h4>{loggedInUser}</h4>
            </div>
        </div>
    ) 
} 

export const withOpenLabel = (RestroCard) =>{
        return(props) =>{   // This line is returning the whole component from 24 to 29
            return( 
            <div className="bg-purple-100 m-4  rounded-lg">
                <label className='absolute bg-slate-800 text-white p-1 rounded-lg'>Open Now</label>
                <RestroCard {...props}/>
            </div>)
        }

}


export default RestroCard;