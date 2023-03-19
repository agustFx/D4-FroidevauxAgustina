import express from 'express'
import routerProducts from './routers/productsRouter.js'
import routerCarts from './routers/cartsRouter.js'
import webRouter from './routers/webRouter.js'
import { engine } from 'express-handlebars'
import { Server } from 'socket.io'
import { productManager } from './managers/FileManager.js'

const PORT = 9090
const app = express()

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use('/api/products', routerProducts)
app.use('/api/carts', routerCarts)
app.use('./web', webRouter)

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')


const httpServer = app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT} :)`)
})

const io = new Server(httpServer)

io.on("Conectado", socket => {
    console.log("Nuevo socket conectado")

    socket.on('newProd', prod => {
        productManager.addProduct(prod)
        io.sockets.emit('update', productManager.getProducts())
    })

    socket.on('update', () => {
        io.sockets.emit('update', productManager.getProducts())
    })
})