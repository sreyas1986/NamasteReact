import { useDispatch, useSelector } from 'react-redux';
import ItemList from "./ItemList";
import { clearCart } from '../util/cartSlice';
import React from 'react';
const Cart =() =>{
    const itemsCart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
    const handleClearCart = ()=>{
     dispatch(clearCart());
    
    }
    return (
        <div className="text-center">
            <h1 className='font-bold text-center'>Cart items</h1>
            <div className='w-6/12 m-auto'>
                    <button className='p2 m2 bg-black shadow-lg text-white' onClick={handleClearCart}> Clear Cart</button>
                    
                    <ItemList items={itemsCart} />        
            </div>
            
            
        </div>
    )
}
export default Cart;