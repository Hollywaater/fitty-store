import React from 'react'
import { WarningIcon } from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import carrito from '../assets/carrin.jpg'

const CardWidget = () => {
  return (
    <Flex>
      <Box>
        <img src={carrito} alt="" width='45px' height='45px' />
        <Spacer />
        <h4>2</h4>
      </Box>
    </Flex>
  )
}

export default CardWidget