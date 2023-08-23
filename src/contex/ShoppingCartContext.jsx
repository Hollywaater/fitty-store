import { createContext,useState } from "react"
export const CartContext = createContext({cart: [0],
total: 0, cantidadTotal:0})

export const ShoppingCartProvider = ({
  children })=>{
    const [cart, setCart] = useState([])
    const [total,setTotal]= useState(0)
    const [cantidadTotal, setCantidadTotal]= useState(0)
    console.log(cart)
    const addItem =(item, cantidad) =>{
      const productoExistente = cart.find(prod=> prod.item.id === item.id) 
      if(!productoExistente){
        setCart(prev =>[...prev, {item, cantidad}])
        setCantidadTotal(prev => prev + cantidad);
        setTotal(prev => prev + (item,precio * cantidad))
      }else{
        const cartAtualizado = cart.map(prod =>{
          if(prod.item.id === item.id){
            return {...prod, cantidad: prod.cantidad + cantidad}
          }else{
            return prod
          }
        });
        setCart(cartAtualizado);
        setCantidadTotal(prev => prev + cantidad)
        setTotal(prev => (item.precio * cantidad))
      }
    }
    const eliminarProdu = (id)=>{
      const produEliminado = cart.find(prod => prod.item.id === id)
      const cartAtualizado = cart.filter(prod => prod.item.id !== id)
      setCart(cartAtualizado)
      setCantidadTotal(prev => prev - produEliminado.cantidad)
      setTotal(prev => prev - produEliminado.item.precio * produEliminado.cantidad);
    }
const vaciarCart = ()=>{
  setCart([]);
  setCantidadTotal(0);
  setTotal(0)
}
  return (
    
    <CartContext.Provider value={{cart ,total,cantidadTotal,addItem,eliminarProdu,vaciarCart}}>

        {children}

    </CartContext.Provider>
    
    
  )
}

export default ShoppingCartProvider