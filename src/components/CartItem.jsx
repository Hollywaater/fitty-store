import React, { useContext } from 'react'
import {ShoppingCartProvider} from "../contex/ShoppingCartContext"
const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(ShoppingCartProvider)
  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad:{cantidad} </p>
        <p>Precio:{item.precio} </p>
        <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem