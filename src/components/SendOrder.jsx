import React, { useContext, useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2'
import { Center } from '@chakra-ui/react';
import { CartContext } from '../contex/ShoppingCartContext';
import { Link } from 'react-router-dom';
const SendOrder = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [error, setError] = useState("")
    const [orden,setOrden] = useState("")
    const [compra, setCompra]= useState("")
    const {cart, cantidadTotal,vaciarCart}= useContext(CartContext)



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
            Swal.fire({
                icon: "success",
                title: "Detalle de compra",
                html: 
                `<div>${cart.map((product)=>{
                    return `<img src='${product.item.imagen}'/>
                    <h4>${product.item.nombre}</h4>
                    <p>Cantidad: ${product.cantidad} </p>
                    `;
                })}</div>
                <h3>Cantidad total:${cantidadTotal} </h3>
                <p>Numero de Orden: ${id} </p>
                <Link to={"/"}><button> Cerrar</button></Link>
                `,
                
                confirmButtonText: "Cerrar",
            }).then((result) => {
                if (result.isConfirmed) {
                  vaciarCart();
                }
              })

                return 
        })
    }
    const order = { name, email }
    const orderCollecion = collection(db, "orden")
   
    return (

        <>
            <div>
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
                {/* <h3>Numero de orden: {orderId} </h3> */}
            </div>
            
        </>
    )
}

export default SendOrder