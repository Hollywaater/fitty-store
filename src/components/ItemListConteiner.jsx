import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, query } from 'firebase/firestore'
import { collection,getDocs,where } from 'firebase/firestore'
//import { db } from './config'
const ItemListConteiner = () => {
  const [product, setProduct]= useState([])
  const {category} = useParams()
    console.log(category)
    
useEffect (()=>{
  const db = getFirestore()
  const misProductos = category ? query(collection(db,"PRODUCTOS"),where("categoria", "==", category)): collection(db, "PRODUCTOS")
getDocs(misProductos).then( res =>{
  const nuevosProducts = res.docs.map(doc =>{
    const data = doc.data();
    return{id:doc.id, ...data}
  })
  setProduct(nuevosProducts)
  console.log(nuevosProducts)
}).catch(error => console.log(error))
},[category])
//console.log(nuevoProduct)
const filtradoProductos = product.filter((produ)=>produ.category === category)

  return (
    <>
     {category ? <ItemList productos={filtradoProductos}/> : <ItemList productos={product}/>}
      {/* <ItemList productos={filtradoProductos} />  */}
      {/* <h1>producto :{product.name} </h1> */}
    {/* <ItemList productos={product} />  */}
    </>
  )
}

export default ItemListConteiner

