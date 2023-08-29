import React, { useContext } from 'react'
import {CartContext} from "../contex/ShoppingCartContext"
import tacho from '../assets/tacho.png'
import { Center } from '@chakra-ui/react'

const CartItem = ({item, cantidad}) => {
    const {eliminarProdu} = useContext(CartContext)
  return (
    <div>
      <Center>
      <img src={item.imagen} alt="" className='img-cart'/>
      </Center>
        <h4 className='nombre-produ'>{item.nombre}</h4>
        <div className='modal-content'>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: ${item.precio} </p>
        </div>
        <button onClick={() => eliminarProdu(item.id)} className='delete-cart'>
          <img src={tacho} alt="" /> </button>
          
    </div>
  )
}

export default CartItem