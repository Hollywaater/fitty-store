# Tienda Fit-Detail
Este es un proyecto de ecommerce básico que se utiliza para el curso de React. La aplicación permite ver una lista de productos de estética vehicular y realizar compras en línea.


## Tecnologías utilizadas
- Vite
- React
- React Router
- Firebase

## Librerias utilizadas
- Chakra Ui
- Tostify
- Sweet alert2

## Instalación
- Npm init vite@latest
- CD miApp
- npm install
- npm run dev


## Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:
- Clona el repositorio a tu máquina local.
- Abre una terminal en el directorio del proyecto.
- Ejecuta el comando npm install para instalar las dependencias.
- Ejecuta el comando npm run dev para iniciar la aplicación.
- Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.
## Funcionalidades
- Ver una lista de productos disponibles:
``` javascript
useEffect (()=>{
  const db = getFirestore()
  const misProductos = category ? query(collection(db,"PRODUCTOS"),where("categoria", "==", category)): collection(db, "PRODUCTOS")
getDocs(misProductos).then( res =>{
  const nuevosProducts = res.docs.map(doc =>{
    const data = doc.data();
    return{id:doc.id, ...data}
  })
  setProduct(nuevosProducts)
  console.log(nuevosProducts)
}).catch(error => console.log(error))
},[category])
```
**Puedo consumir los productos que tengo en ItemDetailConteiner haciendo el llamado a través de la base de datos almacenada en la nube**
- Filtrar por categoría los productos:
```javascript
const misProductos = category ? query(collection(db,"PRODUCTOS"),where("categoria", "==", category)): collection(db, "PRODUCTOS")
```
**Se realiza directamente cuando consumo la base de datos**


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
                />
```
**El componente ItemList recibe como props a productos y realiza un map para la visualización de cada uno en el Item, El cual recibe cada una de las propiedades y las muestra en una card importada de Chakra UI**
- Lógica carrito de compras:
**La lógica del carrito de compras se encuentra en la carpeta contex donde encontraremos al ShoppingCartContex el cual contiene las funcionalidades básicas del carrito, como añadir un producto, eliminarlo y vaciar el carrito de compras**
-Agregar productos al carrito de compras:
```javascript
 const addItem =(item, cantidad) =>{
      const productoExistente = cart.find(prod=> prod.item.id === item.id) ;
      if(!productoExistente){
        setCart(prev =>[...prev, {item, cantidad}])
        setCantidadTotal(prev => prev + cantidad);
        setTotal(prev => prev + (item.precio * cantidad))
      }else{
        const cartAtualizado = cart.map(prod =>{
          if(prod.item.id === item.id){
            console.log(item)
            return {...prod, cantidad: prod.cantidad + cantidad}
          }else{
            return prod
          }
        });
        setCart(cartAtualizado);
        setCantidadTotal(prev => prev + cantidad)
        setTotal(prev => (item.precio * cantidad))
      }
    }
```
***La función se encarga de agregar el producto seleccionado y su cantidad***
-Eliminar producto del carrito de compras:
```javascript
 const eliminarProdu = (id)=>{
      const produEliminado = cart.find(prod => prod.item.id === id)
      const cartAtualizado = cart.filter(prod => prod.item.id !== id)
      setCart(cartAtualizado)
      setCantidadTotal(prev => prev - produEliminado.cantidad)
      setTotal(prev => prev - produEliminado.item.precio * produEliminado.cantidad);
    }
```
-Vaciar Carrito de compras:
```javascript
const vaciarCart = ()=>{
  setCart([]);
  setCantidadTotal(0);
  setTotal(0)
}
```
**Para utilizar estas funciones exporto el ShoppingCartContex y luego lo importo en el componente en cual lo deseo utilizar**
- Visualización del carrito de compras:
***El componente cart, contiene los artículos seleccionados por el usuario, en caso de que este haya seleccionado un artículo se desplegara el mismo, sino será redirigido al menú ya que tiene una validación en caso de que esté vacío el carrito***
```javascript
const {cart, vaciarCart,total,cantidadTotal,}= useContext(CartContext)
  if (cantidadTotal === 0){
    return(
      <>
<h2 className='msj-cart'>¡Su carrito se encuentra vacío!</h2>
<button className='boton-return'>
<Link to="/">Ver Productos</Link>
```


***El usuario podrá visualizar, los artículos seleccionados y la representación de ellos con sus precios y cantidades que se obtiene a través del método map() aplicado sobre el carrito***


```javascript
{cart.map(product => <CartItem key = {product.item.id} {...product} />)}
```


- Formulario de orden de compra:
***Previamente a finalizar la compra se le pedirá al usuario que rellene un formulario, para crear una orden de compra***
```javascript
 const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !tel || !emailConfirmation) {
            setError(Swal.fire("Por favor, complete todos los campos", "", 'error'))
            return;
        }
        if (email !== emailConfirmation) {
            setError(Swal.fire("Los campos de mail no coinciden", "", 'error'))
            return;
        }
        if (isNaN(tel)){
            setError(Swal.fire("Usted no ingreso un número telefónico","",'error'))
            return;
        }


        addDoc(orderCollecion, order).then(({ id }) => {
            setOrderId(id)
            Swal.fire
```
**Utilizo UseState para definir los estados y poder hacer las validaciones correspondientes, de tal manera que el usuario coloque los datos de forma correcta, utilizamos la base da datos para generar un numero de orden de la compra, que visualizara a traves de un alerta de la libreria SweetAlert2**
- Interfaz de usuario:
```javascript
<BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />
       
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/category/:category' element={<ItemListConteiner />} />
          <Route exact path='/item/:id' element={<ItemDetailConteiner />} />
          <Route exact path='/SendOrder' element={<SendOrder />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
``````
**Utilizamos la configuración de React Routes para mejorar la navegabilidad dentro de la aplicación.
Englobamos App.jsx dentro de la etiqueta BrowserRouters, para luego discriminar al NavBar, componente que permanece estático a lo largo del recorrido por el sitio, sirviendo como guía del mismo.
El resto de los componentes de presentación son englobados por la etiqueta Routes donde irán alojadas todas las rutas de la aplicación, las cuales se encuentran de manera individual capturadas con la etiqueta Route y el término Exact Paht, para determinar exactamente al componente al cual se dirigirá**






## Estado
- En desarrollo


## Contacto
 


**https://www.linkedin.com/learning/?upsellOrderOrigin=default_guest_learning**
