import React, { useContext, useState } from 'react'
import { Image, Stack, Heading, Text, CardBody, Divider, Card,Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../contex/ShoppingCartContext'


const ItemDetail = ({ id, nombre, precio, descripcion,imagen}) => {
  const [cantidad, setCantidad]= useState(0)
  const {addItem} = useContext(CartContext)
  const manejadorCantidades = (cantidad)=>{
    setCantidad(cantidad);
    const item = {id,nombre,precio,imagen};
    addItem(item,cantidad)
  }

  return (
    <Center>
    <Card maxW='sm' className='detailConteiner'>
      <CardBody>
        <Center>
        <Image src={imagen} />
        </Center>
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
    </Center>
  )
}

export default React.memo(ItemDetail)