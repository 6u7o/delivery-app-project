const express = require('express');

const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');
const productsRouter = require('./productsRouter');

const router = express.Router({ mergeParams: true });

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/customer', productsRouter);

module.exports = router;
