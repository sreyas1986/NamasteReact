import React from 'react';
import resList from '../util/mockData'
import { CDN_URL } from '../util/constants.js'
export const RestrauCard = (props) => {
    const {resData}= props;
    const {cloudinaryImageId,
    name,
    cuisines,avgRating,
    costForTwo
    }=resData?.info
  

    return(
        
        <div data-testid="resCard" className="m-4 p4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300"  >
            <img alt="" className="p4 rounded-lg" src={CDN_URL+cloudinaryImageId} />
                <h3 className='font-bold p-3'>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>


        </div>
    )
}
    //Higher order components 
        /*to enhance a component input is a component and output is an enhnaced version of it */
    export const RestrauCardPromoted = (RestrauCard) => { return(props) => { return(
            <div>
                <label className='absolute bg-black m2 p2 text-white'>Promoted</label>
                <RestrauCard  {...props}/>
            </div>
            )
    
    };
    }
//export default RestrauCard;