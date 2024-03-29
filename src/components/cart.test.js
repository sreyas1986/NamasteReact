import React from "react";
import render from "@testing-library/react"
import "@testing-library/jest-dom"
import cart from "./Cart"
import RestrauntMenu from "./RestrauntMenu";
import {act} from "react-dom/test-utils"
import { BrowserRouter,Link } from "react-router-dom";
import mocMenuItems from './mock/mocMenuItems.json';
import ItemList from "./ItemList";
import { Provider } from "react-redux";
import { appStore } from '../util/appStore';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => Promise.resolve(mocMenuItems)
    })
});
test("Should load restaturant menu Component",async()=>{
    await act (async()=>render (
    <Provider store={ appStore }>
            <RestrauntMenu />
        </Provider>
    ));
});



