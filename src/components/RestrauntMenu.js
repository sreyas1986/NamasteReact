import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { CDN_URL,MenuItemAPI } from '../util/constants';
import { useParams } from 'react-router-dom';
const RestrauntMenu = () => {

    const [resInfo,setResInfo] = useState();
    const {resId} = useParams();
    console.log(MenuItemAPI+resId);
    useEffect (() =>{
        fetchRestauants();

    },[]);

    fetchRestauants = async () =>{
        const data= await fetch(MenuItemAPI+resId);
        const jsonData = await data.json();
       console.log(jsonData.data.cards[2]);
        setResInfo(jsonData.data);
        
    };

 //const {costForTwoMessage,name,cuisines,avgRating} = resInfo?.cards[2]?.card?.card?.info;
 console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card);
const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card.itemCards; //card.card.info
console.log(itemCards);
//  cuisines,costForTwoMessage,cloudinaryImageId,locality
if(itemCards == null){
    return <Shimmer />
}
  return (
    <div className='menuName'>Restraunt Menu
     {/* <h1>{name}</h1>  */}
   
    {/* <ul>
        <li>{cuisines.join(",")}</li>
        <li>{costForTwoMessage}</li>
        <li>{avgRating}</li>
    </ul>  */}
    <ul>
       {
             itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name}- Rs {item.card.info.price} 
             <br />{item.card.info.description}
             
             </li>) )
       }
        
       
    </ul>


    </div>)
  
}
export default RestrauntMenu;