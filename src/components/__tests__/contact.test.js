import {render, screen} from '@testing-library/react';
import Contact from '../contact';
import "@testing-library/jest-dom";

describle("Contact us pages test Cases", () =>{


    test("Should load contact us component", () =>{
        render(<Contact/>);
       const  heading =  screen.getByRole("heading");
       // Assertion
       expect(heading).toBeInTheDocument();
    });
    
    // My second test case
    test("Should load button inside Contact us component", () =>{ // test can be replaced by it
        render(<Contact/>);
       const  button  =  screen.getByRole("button");
       // Assertion
       expect(button).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes on the contact component" , () =>{
        render(<Contact/>);
        // Below line is called Querying
        const inputBoxes =  screen.getAllByRole("textbox")
        console.log(inputBoxes.length);
    
        expect(inputBoxes.length).toBe(2);
    })
});
