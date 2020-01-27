const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res){
        const devs = await Dev.find();

        return res.json(devs)
    },

    async store(req, res) {
        const { githubUsername, techs, latitude, longitude } = req.body
        
        let dev = await Dev.findOne({ githubUsername });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${githubUsername}`)
            const { name = login, avatar_url, bio } = apiResponse.data
            const techsArray = parseStringAsArray(techs)
            const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
    
        dev = await Dev.create({
            githubUsername,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        })
        }

        return res.json(dev)
    }
}