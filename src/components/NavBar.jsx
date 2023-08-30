import React from 'react'
import { Menu,MenuButton,MenuList,MenuItem,Button,Flex,Box,Spacer} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import CardWidget from './CardWidget'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Flex className='navBar'>
            <Box p='4' className='box'>
            <Link to = {"/"}>
            <img src={logo} alt="" width='80px' height='80px'/>
            </Link>
            Fitty Store
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                
                <MenuList>
                    <MenuItem> <Link to= {`/category/${"carroceria"}`}>Productos para carroceria</Link></MenuItem>
                    <MenuItem><Link to= {`/category/${"interior"}`}>Productos para interior</Link></MenuItem>
                    <MenuItem><Link to= {`/category/${"motor"}`}>Productos para motor</Link></MenuItem>
                    {/* <MenuItem><Link to= {`/category/${"cat4"}`}>Productos para tramientos</Link></MenuItem> */}
                    
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='4'>
            <Link to={"/cart"}>
            <CardWidget/>
            </Link>
            </Box>
        </Flex>
        
    )
}

export default NavBar