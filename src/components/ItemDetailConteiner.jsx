import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc,getFirestore} from "firebase/firestore"
// import { db } from './config'
const ItemDetailConteiner = () => {
    const [producto, setProducto]= useState(null)
    const {id}= useParams();
    const db = getFirestore()
    useEffect (()=>{
        
        const nuevoDoc = doc(db,"PRODUCTOS",`${id}`)
        console.log(nuevoDoc)
        getDoc(nuevoDoc).then(res => {
            const data = res.data();
            const nuevoProduct = {id:res.id, ...data}
            setProducto(nuevoProduct)
            console.log(nuevoProduct)
        }).catch(error => console.log(error))
    },[id])
    return (

        <>
        <div className='detailConteiner'>
            <ItemDetail {...producto} />
            </div>
        </>
    )
}

export default ItemDetailConteiner