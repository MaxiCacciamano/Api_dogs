const {Router} = require('express');
const router = Router();
const DogsC = require('../Contrtols/DogsC');

router.get('/', DogsC.GetDogs);
router.get('/:id', DogsC.GetDogsId)
router.post('/',DogsC.postDogs)
module.exports = router;