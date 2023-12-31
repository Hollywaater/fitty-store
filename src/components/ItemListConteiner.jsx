import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, query } from 'firebase/firestore'
import { collection,getDocs,where } from 'firebase/firestore'

const ItemListConteiner = () => {
  const [product, setProduct]= useState([])
  const {category} = useParams()

useEffect (()=>{
  const db = getFirestore()
  const misProductos = category ? query(collection(db,"PRODUCTOS"),where("categoria", "==", category)): collection(db, "PRODUCTOS")
getDocs(misProductos).then( res =>{
  const nuevosProducts = res.docs.map(doc =>{
    const data = doc.data();
    return{id:doc.id, ...data}
  })
  setProduct(nuevosProducts)
}).catch(error => console.log(error))
},[category])

  return (
    <>
    <div className='itemList'>
    <ItemList productos={product}/>
    </div>
    </>
  )
}

export default ItemListConteiner

