import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <div className='card-conteiner'>
      
        {productos.map((produ)=>{
            return(
                <div className='card'   key={produ.id}>
                <Item
              
                id ={produ.id}
                nombre = {produ.nombre}
                precio = {produ.precio}
                // descripcion = {produ.descripcion}
                imagen = {produ.imagen}
                
                />
                </div>
            )
        })

        }
        
        </div>
    )
}

export default React.memo(ItemList)