# Tienda Fit-Detail
Este es un proyecto de ecommerce básico que se utiliza para el curso de React. La aplicación permite ver una lista de productos de estetica vehicular y realizar compras en línea. 

## Tecnologías utilizadas
- Vite
- React
- React Router

## Instalación
- Npm init vite@latest
- CD miApp
- npm install
- npm run dev
## Funcionalidades
- Ver una lista de productos disponibles:
``` javascript
const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay productos"))
    }
  })
  getProductos.then((resultado) => {
    console.log(resultado)
  }).catch((error) => {
    console.log(error)
  })
```
**Puedo consumir los productos que tengo en ItemDetailConteiner haciendo el llamado a traves de una promesa**
- Filtrar por categoria los productos:
```javascript
const ItemDetail = ({productos}) => {
  const {id} = useParams()
  const filtradoProductos= productos.filter((produ)=> produ.id==id)
    console.log(productos)
```
**Ultilizo el Use Params () para poder filtar los productos por categoría, discriminando por ID**

- Visualizar el detalle de cada producto:
 ```javascript
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
```
**El componente ItemList recibe como props a productos y realiza un map para la visalizción de cada uno en el Item, El cual recibe cada una de las propiedades y las muestra en una card importada de Chakra UI**

- Interfaz de usuario:
```javascript
<BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact path='/' element ={<Home/>} />
      <Route exact path ='/cart' element = {<Cart/>}/>
      <Route exact path ='/product/:id' element = {<ProductDetail/>}/>
      <Route exact path ='/category/:category' element = {<ItemListConteiner/>}/>
      <Route exact path ='/item/:id' element = {<ItemDetailConteiner/>}/>
      <Route exact path ='/product/:id' element = {<ProductDetail/>}/> 
      </Routes>

    </BrowserRouter>
``````
**_Ultilizamos la configuración de React Routes para mejorar la navegabilidad dentro de la aplicación.
Englobamos App.jsx dentro de la etiqueta BrowserRouters, para luego descriminar al NavBar, componente que permanecera estatico a lo largo del recorrido por el sitio, sirviendo como guía del mismo.
El resto de los componentes de presentación son englobados por la etiqueta Routes donde iran alojadas todas las rutas de la aplicación, las cuales se encuentran de manera individual capturadas con la etiqueta Route y el termino Exact Paht, para deerminar exactamente al componente al cual se dirigira_**

## Estado
- En desarrollo

## Contacto
 

**https://www.linkedin.com/learning/?upsellOrderOrigin=default_guest_learning**
