import resList from '../util/mockData'
import { CDN_URL } from '../util/constants.js'
const RestrauCard = (props) => {
    const {resData}= props;
    const {cloudinaryImageId,
    name,
    cusine,
    costForTwo
    }=resData?.info
  

    return(
        
        <div className="res-card" >
            <img alt="" className="restcard-logo" 
            src={CDN_URL+cloudinaryImageId} />
                <h4>{cusine}</h4>
                <h4>{costForTwo}</h4>
                <h3>{name}</h3>

        </div>
    )
};

export default RestrauCard;