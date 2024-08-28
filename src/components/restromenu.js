import React, {useState} from 'react';
import Shimmer from './shimmar.js';
import {useParams} from "react-router-dom";
import useRestroMenu from '../utils/useRestroMenu.js' ; 
import "../index.css";
import Res from './category.js';
/* import ItemList from './itemList.js'; */

const RestroMenu = () =>{
    const {resId} = useParams();
    const restroinfo = useRestroMenu(resId); 
    const [showIndex, setShowIndex] = useState(null);

    const data = "Dummy data";
    
    if (restroinfo === null) return <Shimmer/>
    let allCards = restroinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
   

  let allCategory = allCards.filter((category) =>
    { 
       return category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    }
    )

    return(
        <div className='text-center'>
           {/*   <h1>{restroinfo?.cards[2]?.card?.card?.info?.id}</h1> */}
            <h2 className='font-bold my-6 text-3xl' >{restroinfo?.cards[2]?.card?.card?.info?.name}</h2> 
            <p className="font-bold text-lg">{restroinfo?.cards[2]?.card?.card?.info?.costForTwo/100} for two</p>
            <p className="font-bold text-lg">{restroinfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
            {/* catetories accordian */}
             {
              allCategory.map((cat,index) =>{
              return(
                    // Constrolled Component Res because its parent RestroMenu is controlling it.
                    <Res cat={cat?.card?.card} showItems={index=== showIndex? true : false} setShowIndex={() =>setShowIndex(index)}/>
              )
              }
            )
            } 
        </div> )
    }

export default RestroMenu;