const { createUser, allUsers, updateUser, deleteUser } = require('../controllers/user.controller');

const router = require("express").Router();

router.post('/users', createUser);
router.get('/users', allUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);



module.exports = router;

 

