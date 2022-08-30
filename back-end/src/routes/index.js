const express = require('express');

const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');
const customerRouter = require('./customerRouter');
const salesRouter = require('./salesRouter');

const router = express.Router({ mergeParams: true });

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/customer', customerRouter);
router.use('/sales', salesRouter);

module.exports = router;
