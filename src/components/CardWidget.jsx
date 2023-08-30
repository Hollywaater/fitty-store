import React, { useContext } from 'react'
import { WarningIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import carrito from '../assets/carrin.png'
import { CartContext } from '../contex/ShoppingCartContext'

const CardWidget = () => {
  const {cantidadTotal} = useContext(CartContext)
  return (
    <Flex>
      <Box>
        <img src={carrito} alt="" width='75px' height='75px' color='black'/>
        
        {cantidadTotal > 0 && <strong className='cantidades'>{cantidadTotal}</strong>}
        <Spacer />
        
      </Box>
    </Flex>
  )
}

export default CardWidget