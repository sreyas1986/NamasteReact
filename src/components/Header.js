import { useState,useContext } from 'react';
import { LOGO_URL } from '../util/constants.js'
import { Link } from 'react-router-dom';
//import '../style.css';
//import UserContext from '../util/UserContext.js';
import { useSelector } from 'react-redux';

const Header = () =>{
    const [btnNameReact,setBtnNameReact] = useState("Login");
 //   const contextDet = useContext(UserContext);
    
  const cartItems = useSelector((store) => store.cart.items);

    return (<div className="flex justify-between bg-pink-200">
        <div className="logoContainer">
            <img className="logo" src={LOGO_URL}
             alt="food logo"/>
        </div>
        <div className="flex items-center">
            <ul className='flex p-4 m-4'>
                <li className='px-4'><Link to="/">Home</Link> </li>
                <li className='px-4'><Link to='/About'>About US </Link></li>
                <li className='px-4'><Link to='/Contact'>Contact Us </Link></li>
                <li className='px-4'><Link to='/Grocery'>Grocery</Link></li>
                <li className='px-4 font-bold'><Link to="/Cart">Cart({cartItems.length}) </Link></li>
                
                <button className="login" 
                onClick={() => {
                    btnNameReact==="Login"?setBtnNameReact("LogOut"):setBtnNameReact("Login");               
                    
                }}> {btnNameReact} </button>
               {/* <li className='font-bold'>{contextDet.loggedInUser}</li> */}
            </ul>
        </div>
    </div>   
    )
    };
export default Header;
