import React from 'react';
import RestroCard, {withOpenLabel} from './restrocard.js';
import "../index.css";
import { useState,  useEffect, useContext } from 'react';
import Shimmar from './shimmar';
import {useParams,Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus.js';
import UserContext from '../utils/usercontext.js';


function Body()
{
    const [restList1, setRestList1] = useState([]);
    const [searchRest, setSearchRest] = useState("");
    const [filteredRest, setFilteredRest] = useState([]);

    const OpenRestro =  withOpenLabel(RestroCard); 
    console.log(filterData);

    console.log(restList1);
     useEffect(() =>{
        fetchData();
    },[]) 
   /*  console.log("Body Rendered"); */
    // This is the function to filter the items according to their rating
    function filterData()
    {
      let filterlist =  restList1.filter((item) =>{
            return item.info.avgRating >= 4.5;
        })
         setRestList1(filterlist); 
    }

    // This is the function in which we are going to fetch the swiggy api
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestList1(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const searchRestro = () =>{
           const filteredRest =  restList1.filter((restaurant) =>{  
                return restaurant.info.name.toLowerCase().includes(searchRest.toLowerCase());
            });
         setFilteredRest(filteredRest); 
    }
    
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);
    if(onlineStatus === false)
        {
            return <h1>You look offline </h1>
        }
    
    // Setting userName
    const {userName, setuserName} = useContext(UserContext);    
    console.log(restList1.length);
    return restList1.length === 0 ?  <Shimmar/> :(
        <div>
            <div className=' bg-fuchsia-200'>
                    <input type='text' className='border border-solid border-black mx-10 rounded-md' value={searchRest} onChange={(e) =>{setSearchRest(e.target.value)}}/>
                    <button onClick={searchRestro} className="px-4 py-1 bg-green-200 m-4 rounded-md">Search</button>
                    <button className='px-4 py-1 bg-green-200 rounded-md'>Top rated student</button>
                    <input type="text" className='border border-solid border-black mx-10 rounded-md p-1' placeholder='  User Name'  onChange={(e) => {setuserName(e.target.value)}}></input>
            </div>
            <div className='flex flex-wrap justify-evenly border border-solid border-black pink'>
                {filteredRest.map((restaurant) =>{
                   return(  <Link to={"/restaurants/"+ restaurant.info.id} key={restaurant.info.id}>
                    {
                        restaurant.info.isOpen === true  ? (<OpenRestro restobject={restaurant}/>): (<RestroCard restobject={restaurant}/>)
                    }
                </Link>  )
                })}
        </div>
        </div>
    )
}
export default Body;