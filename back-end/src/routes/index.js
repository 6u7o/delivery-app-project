const express = require('express');

const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');
const customerRouter = require('./customerRouter');
const salesRouter = require('./salesRouter');
const imagesRouter = require('./imagesRouter');
const adminRouter = require('./adminRouter');

const router = express.Router({ mergeParams: true });

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/customer', customerRouter);
router.use('/sales', salesRouter);
router.use('/images', imagesRouter);
router.use('/admin', adminRouter);

module.exports = router;
