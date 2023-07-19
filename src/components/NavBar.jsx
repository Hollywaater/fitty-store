import React from 'react'
import { Menu,MenuButton,MenuList,MenuItem,Button,Flex,Box,Spacer} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import CardWidget from './CardWidget'
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <Flex>
            <Box p='4' bg='blue.300'>
            <img src={logo} alt="" width='50px' height='50px'/>
            Fitty Store
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                
                <MenuList>
                    <MenuItem>Productos para carroceria</MenuItem>
                    <MenuItem>Productos para interior</MenuItem>
                    <MenuItem>Productos para motor</MenuItem>
                    <MenuItem>Productos para tramientos</MenuItem>
                    
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='4' bg='green.300'>
            <CardWidget/>
            </Box>
        </Flex>
        
    )
}

export default NavBar