const express = require('express')
const crypto = require('crypto-js')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.post('/login', (request, response) => {
    const { email, password } = request.body
    const statement = `select id, firstName, lastName, active from user where email = '${email}' and password = '${crypto.SHA256(password)}'`
    db.query(statement, (error, users) => {
        if (error) {
            response.send({ status: 'error', error: error })
        } else if (users.length == 0) {
            response.send({ status: 'error', error: 'user does not exist' })
        } else {
            const user = users[0]
            if (user['active'] == 1) {
                // user is an active user
                response.send(utils.createResult(error, {
                    firstName: user['firstName'],
                    lastName: user['lastName'],
                }))
            } else {
                // user is a suspended user
                response.send({ status: 'error', error: 'your account is not active. please contact administrator' })
            }
        }
    })
})

module.exports = router