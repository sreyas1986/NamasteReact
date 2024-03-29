import { useEffect, useState } from "react";
import { MenuItemAPI } from "./constants";
const useRestrauntMenu = (resid) => {

 const [resInfo,setResInfo] = useState(null);   

    useEffect(() => {
        fetchData();
    },[]);

const fetchData = async() => 
{
    const data = await fetch(MenuItemAPI+resid);
    const json = await data.json();
    //console.log(json.data);
    setResInfo(json.data);
    
}
return resInfo;
}
export default useRestrauntMenu;