import ItemList from './itemList';
import {useState} from 'react';

const Res = ({cat, showItems, setShowIndex}) =>{
    /* const [showItems, setShowItems] = useState(false); */
    const handleClick = () =>{
        setShowIndex()
    }  
    return(
        <div>
            <div className="w-6/12 bg-gray-200 mx-auto my-4 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} > 
                    <span className="font-bold text-lg">{cat.title} ({cat.itemCards.length})</span>
                    <span><i class="fa-solid fa-angle-down"></i></span>
                </div>
              { showItems && <ItemList items={cat.itemCards}/>}
            </div>
        </div>
    )
}
export default Res;