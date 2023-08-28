import React, { useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2'
const SendOrder = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [error, setError] = useState("")
    const [orden,setOrden] = useState("")



    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !tel || !emailConfirmation) {
            setError(Swal.fire("Por favor, complete todos los campos","",'error'))
            return;
        }
        if(email !== emailConfirmation){
            setError(Swal.fire("Los campos de mail no coinciden","",'error'))
            return;
        }
        addDoc(orderCollecion, order).then(({ id }) => {
            setOrderId(id)
        })
    }
    const order = { name, email }
    const orderCollecion = collection(db, "orden")
    const mostrarOrdenCompra = ()=>{
        setOrden(Swal.fire(
            


        ))
    }
    return (

        <>
            <div>
                <h1>Estas por finalizar tu compra te pedimos que completes los siguientes datos:</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Ingrese su Nombre y apellido'
                        onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input type="text" placeholder='Ingrese su direcion de Email'
                        onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type="text" placeholder='Confirme su Email'
                        onChange={(e) => setEmailConfirmation(e.target.value)} />
                    <br />
                    <input type="text" placeholder='Ingrese su numero telefonico'
                        onChange={(e) => setTel(e.target.value)} />
                    <br />
                    <button type='submit'>Enviar info</button>
                </form>
                <h3>Numero de orden: {orderId} </h3>
            </div>
        </>
    )
}

export default SendOrder