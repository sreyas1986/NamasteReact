import React from 'react';
import {fireEvent, render,screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Body from './Body'
import mockResData from './mock/mockResData';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';


global.fetch=jest.fn(()=>{

return Promise.resolve({
json:() => {

    return Promise.resolve(mockResData);
}
})});

it("should render the body component with search",async ()=>{
  await act(async()=> render(
  <BrowserRouter>
     <Body />
  </BrowserRouter>))

  const SearchButton = screen.getByRole("button",{name:"Search"});
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput,{target:{value:"b"}});
  fireEvent.click(SearchButton);

 const cards= screen.getAllByTestId("resCard");
 expect(cards.length).toBe(5);

});

it("should render the top rated restarurants",async ()=>{
  await act(async()=> render(
  <BrowserRouter>
     <Body />
  </BrowserRouter>))
const cardsBefore= screen.getAllByTestId("resCard");
  const topRated = screen.getByTestId("btnTopRated")
  fireEvent.click(topRated);
 const cardsAfter= screen.getAllByTestId("resCard"); 
 expect(cardsAfter.length).toBeLessThan(cardsBefore.length);

});