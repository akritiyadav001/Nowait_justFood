import { useEffect,useState } from 'react';
import {MENU_URL} from "../utils/constant.js";

const useRestroMenu = (resId) =>{
    console.log(resId);     
    const [restroinfo, setRestroinfo] = useState(null)
    useEffect(() =>{
        fetchMenu(); 
   },[]);  

   const fetchMenu = async() =>
   {
       const data = await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
       const json = await data.json();
       console.log(json.data.cards[2].card.card.info.name);
       setRestroinfo(json.data);

   } 
   return  restroinfo;

}
export default useRestroMenu;