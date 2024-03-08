import RestrauCard from './RestrauCard'
import resList from '../util/mockData';
import { useState,useEffect } from 'react';
import Shimmer from '../components/Shimmer';

const Body =() =>{
    const [listofRestaturants,setlistofRestaturants]=useState(resList);
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData =  async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       //console.log(json);
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistofRestaturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
    //   if(listofRestaturants.length === 0){

    //     return <Shimmer/>;
    //   }

    return listofRestaturants.length == 0 ?<Shimmer/>: (<><div className="filter">
        {/* <button className="filter-btn"  onClick={()=>
            {
                const filteredlist = listofrestaturants.filter((resitems)=> resitems.info.avgrating > 4);
                setlistofrestaturants(filteredlist);
            }}> top rated restaurant </button> */}
    </div>
    {/* <div className="restrau-contatiner">
            {resList.map(restaturant => <RestrauCard key={restaturant.info.id} resData={restaturant} />)}
        </div> */}
        <div className='restrau-contatiner'>
            { listofRestaturants.map(itemRes => <RestrauCard key={itemRes.info.id} resData={itemRes} /> )
                        }
        </div>
        </>    )
};
export default Body;