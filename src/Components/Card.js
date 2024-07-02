import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './contextReducer';

export default function Card(props) {
  
  const option = props.options;
  const priceOption = Object.keys(option)
  let foodItem = props.item;
  const priceRef= useRef()
  let dispatch= useDispatchCart();
  let data= useCart();
  const [qty,setQty]= useState(1)
  const [size,setSize]=useState('')

  let finalPrice = qty*parseInt(option[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])


  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
 
    if (food.length > 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  return (
   
    <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "460px" }}
        >
          <img src={props.foodItems.img} className="card-img-top" alt="..." style={{height:'200px',objectFit:'fill'}}></img>
          <div className="card-body">
            <h5 className="card-title">{props.foodItems.name}</h5>
            <p className="card-text">{props.foodItems.description}</p>
            <div className="container w-100 ">
              <select className=" h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceOption.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })
                  
                }
              </select>
              <div className="d-inline h-100 fs-5 ">
                  {finalPrice}/-
              </div>
            </div>
          
             <button onClick={handleAddToCart} className='btn btn-success justify-center ms-2'>Add to Cart</button>
          </div>
      
      </div>
  )
}
