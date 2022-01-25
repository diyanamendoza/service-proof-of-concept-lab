const { Router, response } = require('express')
const Profile = require('../models/Profile')
const FullService = require('../services/FullService')

module.exports = Router()
    .get('/', async (req, res) => {
        const response = 'Hi there'
        res.send(response)
    })
    .post('/', async (req, res) => {
        const profile = await FullService.makeMessage(req.body.email, req.body.zipcode)
        res.send(profile)
    })

    .get('/:email', async (req, res) => {
        const { email } = req.params
        const profile = await Profile.getByEmail(email)
        res.send(profile)
    })
