import { Card, CardBody, CardFooter, Text, Heading, Stack, Button,Divider,ButtonGroup,Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({
    id,
    nombre,
    precio,
    category
}) => {
    
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image/>
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
                <CardFooter>
                    
                        <Button variant='solid' colorScheme='blue'>
                            <Link to = {`/item/${id}`} >
                            Detail
                            </Link>
                        </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item