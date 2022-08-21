import React, { useEffect, useState } from 'react';
import "../styles/cart.css"

const Cart=({cart,setCart,handleChange})=> {
  const [price,setPrice]=useState(0);


  

  return (
    
      <article>
        {cart.map((item)=>{
          <div className='cart_box' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              
            </div>
          
          <div>
          <button >+</button>
          <button>{item.amount}</button>
          <button >-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button>Remove</button>
          </div>

        </div>
        })}
        <div className='total'>
          <span>Total Price of your Cart</span>
          <span>Rs- {price}</span>
        </div>
      </article>
    
  );
  };
export default Cart;


//  const handleRemove=(id)=>{
//     const arr=cart.filter((item)=>item.id !==id);
//       setCart(arr);
//       handePrice();
//   }

//     const handePrice=()=>{
//       let ans=0;
//       cart.map((item)=>(ans += item.amount * item.price));
//       setPrice(ans);
//     };

//     useEffect(()=>{
//       handePrice();
//     })
