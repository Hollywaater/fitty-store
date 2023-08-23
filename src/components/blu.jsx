const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false
    if (descuento) {
        resolve("descuetno aplicado")
    } else {
        reject("descuento no aplicado")
    }
})
aplicarDescuento
.then((resultado) => {
    console.log(resultado)
})
.catch((error) => {
    console.log(error)
})
// import './index.css'
// import NavBar from './components/NavBar'
// import ItemListConteiner from './components/ItemListConteiner'
// import ItemDetailConteiner from './components/ItemDetailConteiner'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Home from './components/Home'
// import Cart from './components/Cart'
// import ProductDetail from './components/ProductDetail'
// import ShoppingCartContext from './contex/ShoppingCartContext'
// import ComponenteA from './components/ComponenteA'

// function App() {
//   return(
// <>
// <ShoppingCartContext>

// <ComponenteA/>


// </ShoppingCartContext>
// </>
<>
    {/* {category ? <ItemList productos={filtradoProductos}/> : <ItemList productos={productos}/>}
      <ItemList productos={filtradoProductos} /> */}
      <h1>producto :{product.nombre} </h1>
      <ItemList/>
    </>