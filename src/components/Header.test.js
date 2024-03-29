import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Link } from 'react-router-dom';
import { appStore } from '../util/appStore';
import {render,screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Header from './Header';

    test("Should load header componnet with a login button",()=>{
        // render(
        //          <Provider store={appStore}><Header />    </Provider>      
   // );
    })
