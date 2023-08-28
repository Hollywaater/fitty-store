import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../contex/ShoppingCartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
 const {cart, vaciarCart,total,cantidadTotal,}= useContext(CartContext)
  if (cantidadTotal === 0){
    return(
      <>
<h2>Su carrito esta vacío</h2>
<Link to="/">Ver Productos</Link>
      </>
    )
  }
  return (
    <>
    {cart.map(product => <CartItem key = {product.item.id} {...product} />)}
    <h3>Total: {total} </h3>
    <br />
    <h3>Cantidad Total: {cantidadTotal} </h3>
    <br />
    <button onClick={()=> vaciarCart()}>Vaciar Carrito de compras</button>
    <br />
    <Link to="/SendOrder">FINALIZAR</Link>
    </>
  )
}

export default Cart