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
        difficultyLevel,
        imageUrl,
        description,
    } = req.body

    cubeManager.create ({
        name,
        difficultyLevel: Number(difficultyLevel),
        imageUrl,
        description, 
    })

      res.redirect('/')
})

router.get('/:cubeId/details', (req,res)=> {
    const cubeId = req.params.cubeId;
    const cube = cubeManager.getAll().find(c=> c.id == cubeId);

    if (!cube) {
        return res.redirect('/404')
    }

    res.render('details', { cube })
})


module.exports = router;

