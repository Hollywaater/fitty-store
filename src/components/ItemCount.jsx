import React, { useState } from 'react'
import { CartContext } from '../contex/ShoppingCartContext'

const ItemCount = () => {

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
  const reset = () =>{
    setContador(0)
  }
  //A chequear
  const [cart, setCart]= useState(1)
const addToCard =()=>{
setCart((elmentSelect)=>{
  console.log("entro")
  const isItemFound = elmentSelect.find((item)=> item.id === id);
  if(isItemFound){
    return elmentSelect.map((item)=>{
      if (item.id === id){
        return{...item, cantidad: item.cantidad + count}
      }else{
        return item;
      }
    })
  }else{
    return[...elmentSelect,{id, cantidad:count, precio, nombre}]
  }
})
}

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
    <button className='buttonAgregar' onClick={addToCard}>Agregar al carrito</button>
    
    </>
    
  )
}

export default ItemCount