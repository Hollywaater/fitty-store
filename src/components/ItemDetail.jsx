import React, { useContext, useState } from 'react'
import { Image, Stack, Heading, Text, CardBody, Divider, Card } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../contex/ShoppingCartContext'

const ItemDetail = ({ id, nombre, precio, descripcion }) => {
  const [cantidad, setCantidad]= useState(0)
  const {addItem} = useContext(CartContext)
  const manejadorCantidades = (cantidad)=>{
    setCantidad(cantidad);
    const item = {id,nombre,precio};
    addItem(item,cantidad)
  }
//   const addToCard =(item, cantidad)=>{
//   setCart((elmentSelect)=>{
//     console.log("entro")
//     const isItemFound = elmentSelect.find((item)=> item.id === id);
//     if(isItemFound){
//       return elmentSelect.map((item)=>{
//         if (item.id === id){
//           return{...item, cantidad: item.cantidad + count}
//         }else{
//           return item;
//         }
//       })
//     }else{
//       return[...elmentSelect,{id, cantidad:count, precio, nombre}]
//     }
//   })
//  }
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre} </Heading>
          <Text>
            {descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <ItemCount addItem={manejadorCantidades} />
    </Card>
  )
}

export default React.memo(ItemDetail)