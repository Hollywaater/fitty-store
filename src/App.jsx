
import './index.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
//import ProductDetail from './components/ProductDetail'
import { ShoppingCartProvider } from './contex/ShoppingCartContext'

import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import SendOrder from './components/SendOrder'
function App() {
  const [loading, setLoading] = useState(true)
  const [elementos, setElementos] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setElementos([])
      setLoading(false)
    }, 3000)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (

    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/category/:category' element={<ItemListConteiner />} />
          <Route exact path='/item/:id' element={<ItemDetailConteiner />} />
          <Route exact path='/SendOrder' element={<SendOrder />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>



  )
}

export default App
