import "../index.css";
import { LOGO_URL } from "../utils/constant";
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
function Header()
{
    const [btnname1, setBtnname1] = useState("Login");
    const onlineStatus = useOnlineStatus();
    

       return(
        <div className="flex justify-between bg-pink-100 shadow-md  sm:bg-yellow-100">
            <div className="headerlogo">
                    <img src={LOGO_URL} alt='logo.img' className="w-20"/>
            </div>
            <div className="headerLinks">
                    <ul className="flex justify-around m-5 p-5">
                        <li className="px-4">Online Status {onlineStatus ?<i class="fa-solid fa-check" style={{color:'green'}}></i>:<i class="fa-solid fa-circle-exclamation" id="icon2" style={{color:"red"}}></i>}</li>
                        <li  className="px-4"><Link to="/">Home</Link></li>
                        <li  className="px-4"><Link to='/contact'>Contact</Link></li>
                        <li  className="px-4"><Link to="/about">About Us</Link></li>
                        <li  className="px-4"><Link to="/grocery">Grocery</Link></li>
                        <li  className="px-4"><Link to="/cart">Cart</Link></li>
                        <li  className="px-4"><button id="login-button" onClick={() =>{btnname1 === "Login"?setBtnname1("Logout"):setBtnname1("Login")}}>{btnname1}</button></li>
                    </ul>
            </div>
        </div>
    )
}
 export default Header; 