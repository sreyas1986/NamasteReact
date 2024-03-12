import RestrauCard from './RestrauCard'
import resList from '../util/mockData';
import { useState,useEffect } from 'react';
import Shimmer from '../components/Shimmer';
import { Link } from 'react-router-dom';

const Body =() =>{
    const [listofRestaturants,setlistofRestaturants]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData =  async() =>{
        const data =await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.96340%26lng%3D77.58550%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        // await fetch("https://corsproxy.org/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistofRestaturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
const [searchText,setsearchText]=useState();

    return listofRestaturants.length == 0 ?<Shimmer/>: (<>
    
    {/* <div className="restrau-contatiner">
            {resList.map(restaturant => <RestrauCard key={restaturant.info.id} resData={restaturant} />)}
        </div> */}
        <div className='body'>
            <div className='search'>
                <input type='text' value={searchText} onChange={(e) => setsearchText(e.target.value)}/>
            <button 
            onClick={()=> {
            console.log({listofRestaturants});
          const  filteredlist = listofRestaturants.filter((resitems) =>  
            resitems.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log({filteredlist});
            setfilteredRestaurant(filteredlist);
            }}         
                
             > Search

        </button>
       
        
         <button classname="filter-btn"  onClick={()=>
           {
            console.log("top rated cliked");
               const filteredlist2 = listofRestaturants.filter((resitems)=> resitems.info.avgRating > 4.5);
               console.log(filteredlist2);
               setfilteredRestaurant(filteredlist2);
        }}> top rated restaurant </button>
            
  
            </div>
        </div>
        <div className='restrau-contatiner'>
            { filteredRestaurant.map(itemRes => <Link key={itemRes.info.id} to={"/restaurant/"+itemRes.info.id}><RestrauCard key={itemRes.info.id} resData={itemRes} /> </Link> )
                        }
        </div>
        </>    )
};
export default Body;