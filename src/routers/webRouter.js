import { Router } from "express"
import { productManager } from '../managers/FileManager.js'
const webRouter = Router()

webRouter.get('./', (req, res) => {
    const products = productManager.getProducts('../src/database/products.json')
    res.render('products', { hayProductos : products.lenght > 0, products})
})

webRouter.get('./realtimeproducts', (req, res) => {
    const products = productManager.getProducts('../src/database/products.json')
    res.render('products', products)
})

export default webRouter