const express = require('express');

const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');

const router = express.Router({ mergeParams: true });

router.use('/login', loginRouter);
router.use('/register', registerRouter);

module.exports = router;
