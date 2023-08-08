const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false
    if (descuento) {
        resolve("descuetno aplicado")
    } else {
        reject("descuento no aplicado")
    }
})
aplicarDescuento
.then((resultado) => {
    console.log(resultado)
})
.catch((error) => {
    console.log(error)
})