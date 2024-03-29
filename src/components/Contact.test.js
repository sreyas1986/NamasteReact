import React, { useState,useEffect } from 'react';
import {render,screen} from '@testing-library/react';
import Contact from "./Contact"
import "@testing-library/jest-dom";
//describe("Grouping the Contact us test page using describe",()=> {
// beforeAll(()=>{
//     console.log("if you want to do any task before testing use this function");
// });
// beforeEach(()=>{
//     console.log("if wants to do any task before each task then use this function");
// });
// afterAll(()=>{
//     console.log("after all the test cases executed");
// });
// afterEach(()=>{
//     console.log("executed after each test cases completed");
// });


test("Should load button inside contact us page",() => {

    render( <Contact />);
    const button = screen.getByRole("button");
    
   expect(button).toBeInTheDocument();

});

test("Should load contact us page",() => {

    render( <Contact /> );
    const heading = screen.getByRole("heading");
    
   expect(heading).toBeInTheDocument();

});
test("Should load 2 input boxes in contact us page",() => {

    render( <Contact />);
    const testitem = screen.getAllByRole("textbox"); // for getting multiple items we have to use getAll
    
   expect(testitem.length).toBe(3);

});
// Test and it are same just another name 
it("Should  not load 2 input boxes in contact us page",() => {

    render( <Contact />);
    const testitem = screen.getAllByRole("textbox"); // for getting multiple items we have to use getAll
    
   expect(testitem.length).not.toBe(2);

});
//})