import { useState } from 'react';
import { LOGO_URL } from '../util/constants.js'
import { Link } from 'react-router-dom';
const Header = () =>{
    const [btnNameReact,setBtnNameReact] = useState("Login");

    return (<div className="header">
        <div className="logoContainer">
            <img className="logo" src={LOGO_URL}
             alt="food logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to='/About'>About US </Link></li>
                <li><Link to='/Contact'>Contact Us </Link></li>
                <li>Cart</li>
                <button className="login" 
                onClick={() => {
                    btnNameReact==="Login"?setBtnNameReact("LogOut"):setBtnNameReact("Login");               
                    
                }}> {btnNameReact} </button>
            </ul>
        </div>
    </div>   
    )
    };
export default Header;
