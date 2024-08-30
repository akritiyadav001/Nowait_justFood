import { useSelector } from "react-redux";
import Grocery from "./Grocery";
import ItemList from "./itemList";

const Cart = () =>{
    const cartItems =  useSelector((store) =>{store.cart.items})
    return(
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">I am Cart</h1>
            <div>
            </div>
        </div>
    )
}
export default Cart;