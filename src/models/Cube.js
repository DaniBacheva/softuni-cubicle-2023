const mongoose = require ('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficaltyLevel: Number,
})

const Cube = mongoose.model('Cube', cubeSchema);