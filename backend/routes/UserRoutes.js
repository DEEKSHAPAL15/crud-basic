const express = require ('express');
const { getAllUsers, addUser, getUser, updateUser, removeUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', addUser);

router.get('/:id', getUser );

router.put('/:id', updateUser);

router. delete('/:id', removeUser);


module.exports = router;