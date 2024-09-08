
import Header from "../header";
import {fireEvent,render, screen} from '@testing-library/react';
import appStore from '../../utils/appStore';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with the login button", () =>{
    render(
      <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
      </BrowserRouter>
    );
    const  loginButton  =  screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:"Logout"});
    expect(logoutButton).toBeInTheDocument();  

})

 it("Should render Header component with the cart item", () =>{
    render(
      <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
      </BrowserRouter>
    );
    const  cartItems  =  screen.getByText(/Cart/);

    
    expect(cartItems).toBeInTheDocument(); 

}) 
