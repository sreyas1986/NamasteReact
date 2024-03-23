import {RestrauCard,RestrauCardPromoted} from './RestrauCard'
import resList from '../util/mockData';
import { useState,useEffect,useContext } from 'react';
import Shimmer from '../components/Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../util/useOnlineStatus';
import UserContext from '../util/UserContext';

const Body =() =>{
    const [listofRestaturants,setlistofRestaturants]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const PromotedRestrauant =  RestrauCardPromoted(RestrauCard)

    useEffect(() => {
        fetchData();
    },[])

    const fetchData =  async() =>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // await fetch("https://corsproxy.org/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistofRestaturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
const [searchText,setsearchText]=useState();
const { loggedInUser,setUserName }  = useContext(UserContext);
const onlineStatus = useOnlineStatus();
if(onlineStatus===false){

    return (<h1>Seems like you are offline .Please connect to internet and try again...</h1>);
}



    return listofRestaturants.length == 0 ?<Shimmer/>: (<>
    
    {/* <div className="restrau-contatiner">
            {resList.map(restaturant => <RestrauCard key={restaturant.info.id} resData={restaturant} />)}
        </div> */}
        <div className='m-10 p4'>
            <div className='flex items-center'>
                <input type='text' className='border border-solid border-black' value={searchText} onChange={(e) => setsearchText(e.target.value)}/>
            <button className="px-4 py-2 m-5 bg-green-100 flex items-center rounded-lg"
            onClick={()=> {
            console.log({listofRestaturants});
          const  filteredlist = listofRestaturants.filter((resitems) =>  
            resitems.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log({filteredlist});
            setfilteredRestaurant(filteredlist);
            }}         
                
             > Search

        </button>
       
        <div className='flex items-center'>
         <button className="px-4 py-2 m-5 bg-gray-300  rounded-lg"  onClick={()=>
           {
            console.log("top rated cliked");
               const filteredlist2 = listofRestaturants.filter((resitems)=> resitems.info.avgRating > 4.5);
               console.log(filteredlist2);
               setfilteredRestaurant(filteredlist2);
        }}> top rated restaurant </button>
        </div>
        <div>
            <label>User Name</label>
            <input type='text'   onChange={(e)=> {
                console.log(e.target.value);
               setUserName(e.target.value);
            }} />
        </div>
            
  
            </div>
        </div>
        <div className='flex flex-wrap'>
            { filteredRestaurant.map(itemRes => <Link key={itemRes.info.id} to={"/restaurant/"+itemRes.info.id}>
                {itemRes.info.veg?(<RestrauCard key={itemRes.info.id} resData={itemRes} /> ):<PromotedRestrauant key={itemRes.info.id} resData={itemRes} />}
                </Link> )
                        }
        </div>
        </>    )
};
export default Body;