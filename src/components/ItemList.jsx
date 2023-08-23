import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <>
        {productos.map((produ)=>{
            return(
                <Item
                key={produ.id}
                id ={produ.id}
                nombre = {produ.nombre}
                precio = {produ.precio}
                stock = {produ.stock}
                />
            )
        })

        }
        
        </>
    )
}

export default React.memo(ItemList)
