import React, { useContext } from 'react'
import CartItem from './CartItem'

const Cart = () => {
 const {cart, vaciarCart,total,cantidadTotal}= useContext(ShoppingCartContext)
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
    {cart.map(product => <CartItem key = {product.id}{...product}/>)}
    <h3>Total: {total} </h3>
    <h3>Cantidad Total:{cantidadTotal} </h3>
    <button onClick={()=> vaciarCart()}>Vaciar Carrito de compras</button>
    <p>CheckOut</p>
    </>
  )
}

export default Cart