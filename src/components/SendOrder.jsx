import React, { useState } from 'react'

const SendOrder = () => {
    const [name,setName]=useState("")
const [email, setEmail]=useState("")
const [orderId, setOrderId]=useState(null)
const db = getFirestore()
const handleSubmit = (e)=>{
    e.preventDefault()
    addDoc(orderCollecion, order).then(({id})=>{
        setOrderId(id)
    })
}
const order = {name,email}
const orderCollecion= collection (db,"orden")
  return (
    
    <>
    <div>
        <h1>Enviando orden de compra</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre y apellido'
            onChange={(e)=> setName(e.target.value)}/>
            <input type="text" placeholder='Email'
            onChange={(e)=> setEmail(e.target.value)}/>    
            <button type='submit'>Enviar info</button>
        </form>
    </div>
    </>
  )
}

export default SendOrder