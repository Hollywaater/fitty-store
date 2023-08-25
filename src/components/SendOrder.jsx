import React, { useState } from 'react'
import { getFirestore,collection,addDoc } from 'firebase/firestore'
const SendOrder = () => {
    const [name,setName]=useState("")
const [email, setEmail]=useState("")
const [orderId, setOrderId]=useState(null)
const db = getFirestore()
const handleSubmit = (e)=>{
    e.preventDefault()
    addDoc(orderCollecion, order).then(({ id } )=>{
        setOrderId(id)
    })
}
const order = {name,email}
const orderCollecion= collection (db,"orden")
  return (
    
    <>
    <div>
        <h1>Estas por finalizar tu compra te pedimos que completes los siguientes datos:</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre y apellido'
            onChange={(e)=> setName(e.target.value)}/>
            <br />
            <input type="text" placeholder='Email'
            onChange={(e)=> setEmail(e.target.value)}/>  
            <br />  
            <button type='submit'>Enviar info</button>
        </form>
        <h3>Numero de orden: {orderId} </h3>
    </div>
    </>
  )
}

export default SendOrder