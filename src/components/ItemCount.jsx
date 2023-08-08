import React, { useState } from 'react'

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


  return (
    <>
    <div className='contador'>
    <h3>{contador}</h3>
    <button onClick={sumar}> + </button>
    <button onClick={resta}> - </button>
    <button onClick={reset}>Resetear</button>
    </div>
    <button>Agregar al carrito</button>
    </>
    
  )
}

export default ItemCount