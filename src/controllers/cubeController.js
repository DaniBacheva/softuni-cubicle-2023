const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

//path = /cubes/create =>
router.get('/create', (req, res) => {
console.log(cubeManager.getAll())

    res.render('create');
})

router.post('/create', async (req, res) => {
    const {
        name,
        difficultyLevel,
        imageUrl,
        description,
    } = req.body

   await  cubeManager.create ({
        name,
        difficultyLevel: Number(difficultyLevel),
        imageUrl,
        description, 
    })

      res.redirect('/')
})

router.get('/:cubeId/details', async (req,res)=> {
    
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404')
    }

    res.render('details', { cube })
})


module.exports = router;

