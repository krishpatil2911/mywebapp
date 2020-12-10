const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
    const statement = `
      select p.id, p.title, p.description, 
        c.id as categoryId, c.title as categoryTitle,
        b.id as brandId, b.title as brandTitle,
        p.price, p.image, p.isActive from product p
      inner join category c on c.id = p.category
      inner join brand b on b.id = p.brand
  `
    db.query(statement, (error, data) => {
        if (error) {
            response.send(utils.createError(error))
        } else {
            // empty products collection
            const products = []

            // iterate over the collection and modify the structure
            for (let index = 0; index < data.length; index++) {
                const tmpProduct = data[index];
                const product = {
                    id: tmpProduct['id'],
                    title: tmpProduct['title'],
                    description: tmpProduct['description'],
                    price: tmpProduct['price'],
                    isActive: tmpProduct['isActive'],
                    brand: {
                        id: tmpProduct['brandId'],
                        title: tmpProduct['brandTitle']
                    },
                    category: {
                        id: tmpProduct['categoryId'],
                        title: tmpProduct['categoryTitle']
                    }
                }
                products.push(product)
            }

            response.send(utils.createSuccess(products))
        }

    })
})

router.post('/', (request, response) => {
    const { title, description, category, price, brand } = request.body
    const statement = `insert into product (title, description, category, price, brand) values (
      '${title}', '${description}', '${category}', '${price}', '${brand}'
    )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

module.exports = router