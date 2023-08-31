import React, { useContext, useState } from 'react'
import { CartContext } from '../contex/ShoppingCartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({addItem}) => {
useContext(CartContext)
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
  
const mensajeAgregado = ()=>{
  if(contador > 0){
  toast('👌 Agregaste productos a tu carrito!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
}
  return (
    <>
    <div className="contador">
    
    <button onClick={resta}className='buttoncounts'> - </button>
    <p className='result'>{contador}</p>
  
    <button onClick={sumar} className='buttoncount'> + </button>
    
    </div>
    <button className='buttonAgregar' onClick={()=>{addItem(contador); mensajeAgregado()}} >Agregar al carrito</button>
    <ToastContainer />
    </>
    
  )
}

export default ItemCount