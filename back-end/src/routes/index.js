const express = require('express');

const loginRouter = require('./loginRouter');

const router = express.Router({ mergeParams: true });

router.use('/login', loginRouter);

module.exports = router;
