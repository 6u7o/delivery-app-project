const postNewSaleBody = require('../joi/postNewSaleBody.joi');

const postNewSaleMiddleware = (req, res, next) => {
  console.log('middleware' )
  const { error } = postNewSaleBody.validate(req.body);
  console.log('middleware ERROR', error);
    if (error) {
      const [message, errorStatus] = (error.message).split(/\/\/\//);
      return res.status((+errorStatus)).json({ message });
    }
    return next();
};

module.exports = postNewSaleMiddleware;
