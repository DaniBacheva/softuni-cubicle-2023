const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

//path = /cubes/create =>
router.get('/create', (req, res) => {
console.log(cubeManager.getAll())

    res.render('create');
})

router.post('/create', (req, res) => {
    const {
        name,
        difficaltyLevel,
        imageUrl,
        description,
    } = req.body

    cubeManager.create ({
        name,
        difficaltyLevel: Number(difficaltyLevel),
        imageUrl,
        description, 
    })

      res.redirect('/')
})


module.exports = router;

