import { Router } from "express"
import { productManager, Product } from "../managers/FileManager.js"

const routerProducts = Router()

routerProducts.get('./', (req, res) => {
    const products = productManager.getProducts()
    res.json(products)
})

routerProducts.get('./:pid', (req, res) => {
    const idR = req.params.id
    const id = productManager.getProductsById(idR)
    res.json(id)
})

routerProducts.post('./', (req, res) => {
    const newProduct = req.body
    const product = new Product(newProduct)
    productManager.addProduct(product)
    res.json(product)
})

routerProducts.put('./:pid', (req, res) => {
    const dataToUpdate = req.params.id
    const data = req.body.dataToUpdate
    const newProduct = productManager.updateProduct(dataToUpdate, data)
    res.json(newProduct)
})

routerProducts.delete('./:pid', (req, res) => {
    const productId = req.params.id
    const dProduct = productManager.deleteProduct(productId)
    res.json({dProduct})
})

export default routerProducts