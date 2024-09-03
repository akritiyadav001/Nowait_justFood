import { useSelector, useDispatch } from "react-redux";
import ItemList from "./itemList";
import {clearCart} from '../utils/cartSlice';

const Cart = () =>{
    const cartItems =  useSelector((store) =>store.cart.items)
    const dispatch = useDispatch();
     const handleClearCart = () =>{
        dispatch(clearCart());
    } 
    return(
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">I am Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black font-medium text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty. Add some items to shop</h1> }
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;