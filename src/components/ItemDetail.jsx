import React from 'react'
import { useParams } from 'react-router-dom'
import {Image,Stack,Heading,Text,CardBody,Divider,CardFooter,ButtonGroup,Button,Card } from '@chakra-ui/react'
import ItemCount from './ItemCount'
const ItemDetail = ({productos}) => {
  const {id} = useParams()
  const filtradoProductos= productos.filter((produ)=> produ.id==id)
    console.log(productos)
  return (
    
    
    <>{filtradoProductos.map((p)=>{
      return(
        <div key={p.id}>
          <Card maxW='sm'>
  <CardBody>
    <Image/>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{p.nombre} </Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {p.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount/>
  </CardFooter>
</Card>






        </div>
      )
    })

    }
        
    </>
    
  )
}

export default ItemDetail

/**
 filtradoProductos.map((producto)=>(
            <div key = {producto.id}>
                <h2>{producto.nombre} </h2>
                <p>{producto.precio}</p>
                <p>{producto.stock} </p>
            </div>
        ))


 */