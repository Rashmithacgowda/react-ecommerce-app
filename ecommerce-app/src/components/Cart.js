import React from 'react'
import { useState,useEffect } from 'react';
const Cart = ({cart}) => {
  console.log('cat',cart)
  const [totalSum, setTotalSum] = useState({ sum: 0, quantity: 0 });
  
  
  useEffect(() => {
    let sum = 0;
    let quantity=0;
    for (const cartItem of cart) {
      sum += cartItem.price * cartItem.quantity
      quantity += cartItem.quantity
    }
    setTotalSum({sum,quantity});
  }, [cart]);

  
  return (
    <div>{cart.map((cartItems,id)=>{
      return (
        <div style={{
          fontSize: '30px',
          display: 'grid',
          gridTemplateColumns: '10fr 10fr 10fr 10fr 10fr 10fr', // Define the number of columns and their widths
          alignItems: 'center',
        }}>
        
        <img style={{ width: '30%', height: '40%', borderRadius: '30%' }}src={cartItems.img} alt={cartItems.title} />
        <span>{cartItems.title}</span>
        <span>price:{cartItems.price}</span>
        <span>quantity:{cartItems.quantity}</span>
        <span>price:{cartItems.price}</span>
        <span>{cartItems.quantity * cartItems.price}</span>
        </div> 
      )
    })}
    <div style={{border:'1px solid black',padding:'20px',fontSize:'30px',fontWeight:'bolder',alignItems:'center'}}> TotalPrice:{totalSum.sum} TotalItems:{totalSum.quantity}</div>
    </div>

  )
}

export default Cart