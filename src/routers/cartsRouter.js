import { Router } from "express"
import { cartManager } from "../managers/FileManager.js"

const routerCarts = Router()

routerCarts.get('./:pid', (req, res) => {
    const idR = req.params.id
    const id = cartManager.getProductsById(idR)
    res.json(id)
})

routerCarts.post('/', (res, req) => {
    const newCart = req.body
    cartManager.addCart(newCart)
    res.json(newCart)
})

routerCarts.delete('./:pid', (req, res) => {
    const cartId = req.params.id
    const dCart = productManager.deleteProduct(cartId)
    res.json({dCart})
})

export default routerCarts