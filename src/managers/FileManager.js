import fs from 'fs'

export class Product{
    constructor(id, title, description, price, thumbnail, code, stock){
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}

export class Cart{
    constructor(){
        this.id = id
        this.carts = []
    }
}

class FileManager{
    constructor(){
        this.path = this.path
    }

    async addCart(){
        const cart = new Cart()
        this.carts.push(cart)
        const cartsJson = JSON.stringify(cart)
        await fs.promises.writeFile('./database/carts.json', cartsJson)
    }

    async getCarts(){
        const elements = await fs.promises.readFile(this.path, 'utf-8')
        console.log('Obtener productos', JSON.parse(elements))
        return elements
    }

    async getCartById(){
        const elements = await fs.promises.readFile(this.path, 'utf-8')
        elements = JSON.parse(elements)
        const isId = elements.find((e) => e.id === id)
        if(isId){
            console.log("Cart buscado por id:", isId)
            return isId      
        } else{
            throw new Error ("Id no encontrado")
        }
    }

    async updateCart(id, dataToUpdate){
        const elements = await fs.promises.readFile(this.path, "utf-8")
        elements = JSON.parse(elements)
        const newData = elements.filter((item) => item.id !== id)
        newData = [...newData, {id, ...dataToUpdate}]
        await fs.promises.writeFile(this.path, JSON.stringify(newData))
    }

    async deleteCart(id){
        const elements = await fs.promises.readFile(this.path, "utf-8")
        elements = JSON.parse(elements)
        const newData = elements.filter((item) => item.id !== id)
        await fs.promises.writeFile(this.path, JSON.stringify(newData))
    }

    async addProduct(){
        const products = []
        const product = new Product()
        products.push(product)
        const productsJson = JSON.stringify(products)
        await fs.promises.writeFile('./database/products.json', productsJson)
    }

    async getProducts(){
        const elements = await fs.promises.readFile(this.path, 'utf-8')
        console.log('Obtener productos', JSON.parse(elements))
        return elements
    }

    async getProductsById(){
        const elements = await fs.promises.readFile(this.path, 'utf-8')
        elements = JSON.parse(elements)
        const isId = elements.find((e) => e.id === id)
        if(isId){
            console.log("Producto buscado por id:", isId)
            return isId      
        } else{
            throw new Error ("Id no encontrado")
        }
    }

    async updateProduct(id, dataToUpdate){
        const elements = await fs.promises.readFile(this.path, "utf-8")
        elements = JSON.parse(elements)
        const newData = elements.filter((item) => item.id !== id)
        newData = [...newData, {id, ...dataToUpdate}]
        await fs.promises.writeFile(this.path, JSON.stringify(newData))
    }

    async deleteProduct(id){
        const elements = await fs.promises.readFile(this.path, "utf-8")
        elements = JSON.parse(elements)
        const newData = elements.filter((item) => item.id !== id)
        await fs.promises.writeFile(this.path, JSON.stringify(newData))
    }
}

export const productManager = new FileManager()
export const cartManager = new FileManager()