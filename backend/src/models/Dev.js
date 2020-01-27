const mongoose = require('mongoose')
const pointSchema = require('./utils/pointSchema')

const devSchema = new mongoose.Schema({
    name: String,
    githubUsername: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: pointSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('Dev', devSchema)