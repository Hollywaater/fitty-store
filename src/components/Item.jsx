import { Card, CardBody, CardFooter, Text, Heading, Stack, Button,Divider,ButtonGroup,Image,Center,Flex,Wrap,WrapItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({
    id,
    nombre,
    precio,
    descripcion,
    imagen
}) => {
    
    return (
        <div>
            
            <Center>
                
            <Card maxW='sm' >
                <div className='card'>
                <CardBody>
                    <Center>
                    <Image src={imagen}/>
                    </Center>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre} </Heading>
                        <div className='card-descripcion'>
                        <Text>
                            {descripcion}
                        </Text>
                        </div>
                        <Text color='blue.600' fontSize='2xl'>
                            {precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <Center>
                <CardFooter>
                    
                        <Button variant='solid' colorScheme='blue'>
                            <Link to = {`/item/${id}`} >
                            Detail
                            </Link>
                        </Button>
                </CardFooter>
                </Center>
                </div>
            </Card>
            
            </Center>
            
        </div>
    )
}

export default Item