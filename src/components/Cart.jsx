import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../contex/ShoppingCartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
 const {cart, vaciarCart,total,cantidadTotal,}= useContext(CartContext)
  if (cantidadTotal === 0){
    return(
      <>
<h2 className='msj-cart'>¡Su carrito se encuentra vacío!</h2>
<button className='boton-return'> 
<Link to="/">Ver Productos</Link>
</button>
      </>
    )
  }
  return (
    
    <div className='cart-style'>
      <div className='cart-image'>
    {cart.map(product => <CartItem key = {product.item.id} {...product} />)}
    </div>
    <div className='content-cart'>
    <h3 className='canti-cart'>Total: ${total} </h3>
    <br />
    <h3>Cantidad Total de productos: {cantidadTotal} </h3>
    <br />
    </div>
    <button onClick={()=> vaciarCart()} className='vaciar-cart'>Vaciar Carrito de compras</button>
    <br />
    <div className='fin-cart'>
    <button>
    <Link to="/SendOrder">Finalizar Compra</Link>
    </button>
    </div>
    </div>
    
  )
}

export default Cart