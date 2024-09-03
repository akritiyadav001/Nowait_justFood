import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import {useDispatch} from 'react-redux';
const ItemList = ({items}) =>{
     const dispatch = useDispatch() 

    const handleAddItem = (item) =>{
        dispatch(addItems(item)); 
    } 
    console.log(items)
    return(
        <div>
            <div>
                {items.map((item) =>{
                    console.log("I am item");
                    console.log(item);
                    return(
                    <div key={item.card.info.id} className="p-2 m-auto border-gray-300 border-b-2 text-left flex justify-between">
                        <div className="py-4 px-4 font-medium" >
                            <span >{item.card.info.name}</span>
                            <br/>
                            <span>₹ {item.card.info.price ?item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p2">
                            <div className="absolute">
                                <button className="p2 bg-white shadow-lg  mx-16 rounded" onClick={() =>handleAddItem(item)}>Add+</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-50 h-50 rounded-lg"/>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default ItemList;