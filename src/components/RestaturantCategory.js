import { useState } from "react";
import ItemList from "./ItemList";

const RestaturantCategory = (data) =>{
 // console.log(data.data.itemCards);
 const [showItems,setShowItem]  = useState(false);
    console.log("Showingitems"+showItems);
 const handleClick =() =>{
  setShowItem(!showItems);
  //setShowIndex();
 }
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
          
                <div className="flex justify-between">
                <span className="font-bold text-large cursor-pointer" onClick={handleClick}>{data.data.title}({data.data.itemCards.length})</span>
                    </div>
                    <div>
                         { showItems && <ItemList items={data.data.itemCards}/> }
                    </div>
                
                
            </div>

        </div>
    )
}

export default RestaturantCategory