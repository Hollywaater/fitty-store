import React, { useState } from 'react'
import { CartContext } from '../contex/ShoppingCartContext'
import ShoppingCartProvider from '../contex/ShoppingCartContext'
// import { useState } from 'react'
const ItemCount = (addItem) => {

  const [contador, setContador] = useState(0)
  const sumar = ()=>{
    if(contador <10){
    setContador(contador + 1)
  }else{
    console.log("No hay mas stock del producto")
  }
}
  const resta = ()=>{
    
    if(contador >  0){
      setContador(contador - 1)
    }
    
  
  }
  // const reset = () =>{
  //   setContador(0)
  // }
  //A chequear


// const addToCart = () => {

//   setCart((currItems) => {

//     const isItemFound = currItems.find((item) => item.id === id);

//     if (isItemFound) {

//       return currItems.map((item) => {

//         if (item.id === id) {

//           return { ...item, quantity: item.quantity + count };

//         } else {

//           return item;

//         }

//       });

//     } else {

//       return [...currItems, { id, quantity: count, price, name }];

//     }

//   });

// };

  return (
    <>
    <div className="contador">
    
    <button onClick={sumar} className='buttoncount'> + </button>
    <p className='result'>{contador}</p>
    <button onClick={resta}className='buttoncount'> - </button>
    
    </div>
    <button className='buttonAgregar' onClick={addItem(contador)}>Agregar al carrito</button>
    
    </>
    
  )
}

export default ItemCount