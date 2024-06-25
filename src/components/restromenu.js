import React from 'react';
import { useEffect, useState } from 'react';
import Shimmer from './shimmar.js';
import {useParams} from "react-router-dom";
/*  import { MENU_URL } from '../utils/constant.js';  */
  import useRestroMenu from '../utils/useRestroMenu.js' ; 
import "../index.css";

const RestroMenu = () =>{
    const {resId} = useParams();
     const restroinfo = useRestroMenu(resId); 
    if (restroinfo === null) return <Shimmer/>

    const{itemCards} = ( restroinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card);

    return(
        <div className='restaucard'>
           {/*   <h1>{restroinfo?.cards[2]?.card?.card?.info?.id}</h1> */}
            <h2>{restroinfo?.cards[2]?.card?.card?.info?.name}</h2> 
            <p>{restroinfo?.cards[2]?.card?.card?.info?.costForTwo/100} for two</p>
            <p>{restroinfo?.cards[2].card?.card?.info?.cuisines.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
              {/*  <li>{itemCards[0].card.info.name}</li> */}
              {itemCards.map((item) =>{
               return <li key={item.card.info.id}>{item.card.info.name}</li>
              })}
            </ul>
        </div> )
    }

export default RestroMenu;