import React from 'react'
import { Image, Stack, Heading, Text, CardBody, Divider, Card } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ id, nombre, precio, }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre} </Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <ItemCount />
    </Card>
  )
}

export default React.memo(ItemDetail)