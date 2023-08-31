import React, { useContext, useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2'
import { Center } from '@chakra-ui/react';
import { CartContext } from '../contex/ShoppingCartContext';
import { useNavigate } from "react-router-dom";
const SendOrder = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [error, setError] = useState("")
    const [orden, setOrden] = useState("")
    const [compra, setCompra] = useState("")
    const { cart, cantidadTotal, vaciarCart, total } = useContext(CartContext)
    const navigate = useNavigate();


    let fecha = new Date();
    let formatoFecha = {day: "numeric", month: "numeric", year:"numeric"}
    let fechaFormateada = fecha.toLocaleDateString("es-ES",formatoFecha);




    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !tel || !emailConfirmation) {
            setError(Swal.fire("Por favor, complete todos los campos", "", 'error'))
            return;
        }
        if (email !== emailConfirmation) {
            setError(Swal.fire("Los campos de mail no coinciden", "", 'error'))
            return;
        }
        if (isNaN(tel)){
            setError(Swal.fire("Usted no ingreso un número telefónico","",'error'))
            return;
        }

        addDoc(orderCollecion, order).then(({ id }) => {
            setOrderId(id)
            Swal.fire({
                
                icon: "success",
                title: "Detalle de compra",
                html:
                    `<div>${cart.map((product) => {
                        return `
                        <div class="image-container">
                            <img src='${product.item.imagen}'/>
                        </div>
                    <br />
                    <h4>${product.item.nombre}</h4>
                    <p>Cantidad: ${product.cantidad} </p>
                    <br />
                    `
                    })}</div>
                <p>Precio Total: $${total} </p>
                <h3>Cantidad total de productos: ${cantidadTotal} </h3>
                <p>Numero de Orden: ${id} </p>
                <p>Fecha de compra: ${fechaFormateada} </p>
                <br />
                <br />
                <p>En breves nos comunicaremos con usted,</p>
                <p>¡MUCHAS GRACIAS POR SU COMPRA!</p>
                
                `,
                buttonText: navigate("/"),
            }).then((result) => {
                if (result.isConfirmed) {
                    vaciarCart();
                    ;

                }
            })

            return
        })
    }
    const order = { name, email, tel, cart  }
    const orderCollecion = collection(db, "orden")

    return (

        <>
            <div className='ornden'>
                <h3 className='title-form'>Estas por finalizar tu compra, te pedimos a continuación que completes los siguientes datos:</h3>
                <form onSubmit={handleSubmit} className='form-conteiner'>
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
                    <Center>
                        <button type='submit' className='send-info'>Enviar info</button>
                    </Center>
                </form>
            </div>

        </>
    )
}

export default SendOrder