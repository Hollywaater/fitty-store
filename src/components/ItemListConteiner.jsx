import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
const ItemListConteiner = () => {
  const {category} = useParams()
    console.log(category)
  const productos = [
    { id: 1, nombre: "Cera para abrillantado", precio: 2000,descripcion: "", stock: 10,category:"cat4" },
    { id: 2, nombre: "Acondicionador de carroceria", precio: 3000,descripcion: "", stock: 10,category:"cat1" },
    { id: 3, nombre: "Limpiador de interiores", precio: 1500,descripcion: "", stock: 10,category:"cat3" },
    { id: 4, nombre: "Removedor de Pintura", precio: 2000,descripcion: "", stock: 10,category:"cat4" },
    { id: 5, nombre: "Limpiador en Seco", precio: 3000,descripcion: "", stock: 10,category:"cat2" },
    { id: 6, nombre: "Acondicionador de Cuero", precio: 1500,descripcion: "", stock: 10,category:"cat3" },
    { id: 7, nombre: "Abrillantador de neumaticos", precio: 2000,descripcion: "", stock: 10,category:"cat1" },
    { id: 8, nombre: "Removedor de aceites", precio: 3000,descripcion: "", stock: 10,category:"cat2" },
    { id: 9, nombre: "Limpiador de cristales", precio: 1500,descripcion: "", stock: 10,category:"cat3" },

  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay productos"))
    }
  })
  getProductos.then((resultado) => {
    console.log(resultado)
  }).catch((error) => {
    console.log(error)
  })
  /*
  const getProductos = () => {
      return new Promise((resolve, reject) => {
          if (productos.length > 0) {
              reject(new Error("no hay datos"))
          }
          setTimeout(() => {
              resolve (productos)
          
      }, 2000)
  })
  }
  getProductos().then((productos)=>{
      //console.log(productos)
  })
  async function fetchingProductos(){
      try{
          const productoFecht = await getProductos()
          console.log(productoFecht)
      }catch(error){
          console.error(error)
      }
  }
  fetchingProductos()*/
  const filtradoProductos = productos.filter((produ)=>produ.category === category)
  return (
    <>
      <ItemList productos={filtradoProductos} />
    </>
  )
}

export default ItemListConteiner