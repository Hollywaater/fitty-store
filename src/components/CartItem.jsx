import React, { useContext } from 'react'
import {CartContext} from "../contex/ShoppingCartContext"
const CartItem = ({item, cantidad}) => {
    const {eliminarProdu} = useContext(CartContext)
  return (
    <div>
      <img src={item.imagen} alt="" />
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button onClick={() => eliminarProdu(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem