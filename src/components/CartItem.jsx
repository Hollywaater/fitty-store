import React, { useContext } from 'react'
import {CartContext, ShoppingCartProvider} from "../contex/ShoppingCartContext"
const CartItem = ({item, cantidad, imagen}) => {
    const {eliminarProdu} = useContext(CartContext)
  return (
    <div>
      <img>{item.imagen}</img>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button onClick={() => eliminarProdu(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem