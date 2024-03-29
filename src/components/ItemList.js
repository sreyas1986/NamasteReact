import React from 'react'
import { CDN_URL } from '../util/constants';
import { addItem } from '../util/cartSlice';
import { useDispatch } from 'react-redux';
 const ItemList =((items) => {
  //console.log(items);
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
//dispatch an action
  dispatch(addItem(item));

  }

  return (
        <div >
          
    {items.items.map(item=> (
    <div key={item.card.info.id} className='p2 m2 border-b-2 text-left flex justify-between-between'> 
    <div className='w-9/12'>
        <div className='py-2'>
          <span className='font-bold'>{item.card.info.name}</span>
          <br/ >
          <span>Rs {item.card.info.price/100}</span>
        </div>
          <p>
            {item.card.info.description}
          </p>
          </div>
          <div className='w-3/12 p-4 '>
          <img src={CDN_URL+item.card.info.imageId} alt="" />
            <div className='absolute'>
            <button className='bg-green-900 text-white shadow-lg w-40 rounded-md' onClick={()=>handleAddItem(item)}>ADD +</button>
            </div>
      
      
      </div>
      
     
    </div>

    
 )
 )}
 </div>
  )
})
export default ItemList

