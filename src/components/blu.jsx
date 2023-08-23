// const aplicarDescuento = new Promise((resolve, reject) => {
//     const descuento = false
//     if (descuento) {
//         resolve("descuetno aplicado")
//     } else {
//         reject("descuento no aplicado")
//     }
// })
// aplicarDescuento
// .then((resultado) => {
//     console.log(resultado)
// })
// .catch((error) => {
//     console.log(error)
// })
// // import './index.css'
// // import NavBar from './components/NavBar'
// // import ItemListConteiner from './components/ItemListConteiner'
// // import ItemDetailConteiner from './components/ItemDetailConteiner'
// // import { BrowserRouter, Routes,Route } from 'react-router-dom'
// // import Home from './components/Home'
// // import Cart from './components/Cart'
// // import ProductDetail from './components/ProductDetail'
// // import ShoppingCartContext from './contex/ShoppingCartContext'
// // import ComponenteA from './components/ComponenteA'

// // function App() {
// //   return(
// // <>
// // <ShoppingCartContext>

// // <ComponenteA/>


// // </ShoppingCartContext>
// // </>
// <>
//     {/* {category ? <ItemList productos={filtradoProductos}/> : <ItemList productos={productos}/>}
//       <ItemList productos={filtradoProductos} /> */}
//       <h1>producto :{product.nombre} </h1>
//       <ItemList/>
//     </>

//     //ItemListConteinerCiejeo
//     // useEffect(()=>{
// //   const db = getFirestore()
// //   const itemCollecion = collection(db,"PRODUCTOS")
// //   getDocs(itemCollecion).then((snapshot)=>{
// //     if(snapshot.exists()){
// //       const docs = snapshot.docs.map((doc)=> doc.data())
// //       setProduct(docs)
// //     }
// //   })
// // },[])


//   // const productos = [
//   //   { id: 1, nombre: "Cera para abrillantado", precio: 2000,descripcion: "", stock: 10,category:"cat4" },
//   //   { id: 2, nombre: "Acondicionador de carroceria", precio: 3000,descripcion: "", stock: 10,category:"cat1" },
//   //   { id: 3, nombre: "Limpiador de interiores", precio: 1500,descripcion: "", stock: 10,category:"cat3" },
//   //   { id: 4, nombre: "Removedor de Pintura", precio: 2000,descripcion: "", stock: 10,category:"cat4" },
//   //   { id: 5, nombre: "Limpiador en Seco", precio: 3000,descripcion: "", stock: 10,category:"cat2" },
//   //   { id: 6, nombre: "Acondicionador de Cuero", precio: 1500,descripcion: "", stock: 10,category:"cat3" },
//   //   { id: 7, nombre: "Abrillantador de neumaticos", precio: 2000,descripcion: "", stock: 10,category:"cat1" },
//   //   { id: 8, nombre: "Removedor de aceites", precio: 3000,descripcion: "", stock: 10,category:"cat2" },
//   //   { id: 9, nombre: "Limpiador de cristales", precio: 1500,descripcion: "", stock: 10,category:"cat3" },

//   // ]

//   // const getProductos = new Promise((resolve, reject) => {
//   //   if (productos.length > 0) {
//   //     setTimeout(() => {
//   //       resolve(productos)
//   //     }, 2000)
//   //   } else {
//   //     reject(new Error("No hay productos"))
//   //   }
//   // })
//   // getProductos.then((resultado) => {
//   //   console.log(resultado)
//   // }).catch((error) => {
//   //   console.log(error)
//   // })
//   /*
//   const getProductos = () => {
//       return new Promise((resolve, reject) => {
//           if (productos.length > 0) {
//               reject(new Error("no hay datos"))
//           }
//           setTimeout(() => {
//               resolve (productos)
          
//       }, 2000)
//   })
//   }
//   getProductos().then((productos)=>{
//       //console.log(productos)
//   })
//   async function fetchingProductos(){
//       try{
//           const productoFecht = await getProductos()
//           console.log(productoFecht)
//       }catch(error){
//           console.error(error)
//       }
//   }
//   fetchingProductos()*/
//   //const filtradoProductos = product.filter((produ)=>produ.category === category)
//   //console.log(misProductos)
//   //ItemDetailantesdeAsk
//   import React from 'react'
// import { useParams } from 'react-router-dom'
// import {Image,Stack,Heading,Text,CardBody,Divider,CardFooter,ButtonGroup,Button,Card } from '@chakra-ui/react'
// import ItemCount from './ItemCount'
// const ItemDetail = ({nombre,precio, id}) => {
//   const {id} = useParams()
//   const filtradoProductos= productos.filter((produ)=> produ.id==id)
//     console.log(productos)
//   return (
    
    
//     <>{filtradoProductos.map((p)=>{
//       return(
//         <div key={p.id}>
//           <Card maxW='sm'>
//   <CardBody>
//     <Image/>
//     <Stack mt='6' spacing='3'>
//       <Heading size='md'>{p.nombre} </Heading>
//       <Text>
//         This sofa is perfect for modern tropical spaces, baroque inspired
//         spaces, earthy toned spaces and for people who love a chic design with a
//         sprinkle of vintage design.
//       </Text>
//       <Text color='blue.600' fontSize='2xl'>
//         {p.precio}
//       </Text>
//     </Stack>
//   </CardBody>
//   <Divider />
//     <ItemCount/>
// </Card>






//         </div>
//       )
//     })

//     }
        
//     </>
    
//   )
// }

// export default  React.memo(ItemDetail)

// /**
//  filtradoProductos.map((producto)=>(
//             <div key = {producto.id}>
//                 <h2>{producto.nombre} </h2>
//                 <p>{producto.precio}</p>
//                 <p>{producto.stock} </p>
//             </div>
//         ))


//  */