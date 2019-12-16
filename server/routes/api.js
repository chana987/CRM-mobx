const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/crm')

router.get('/clients', async function (req, res) {
    let clients = await sequelize.query(`SELECT * FROM client`)
    res.send(clients)
})

router.post('/client', function (req, res) {
    sequelize.query(`INSERT INTO client VALUES(null, '${req.body.firstName}','${req.body.lastName}', '${req.body.email}', '${req.body.firstContact}', '${req.body.emailType}', ${req.body.sold}, '${req.body.owner}', '${req.body.country}') `)
    .then(res.send('success'))
    .catch(e => res.send(e))
})

router.put('/client', async function (req, res) {
    for (let info of req.body) {
        sequelize.query(`UPDATE client SET ${info.field} = '${info.newValue}' WHERE id = ${info.id}`)
        console.log(info)
    }
    res.send('success')
})

module.exports = router