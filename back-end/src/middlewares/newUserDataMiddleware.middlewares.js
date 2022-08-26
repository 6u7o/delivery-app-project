const createNewUserJoi = require('../joi/createNewUser.joi');

const newUserDataMiddleware = (req, res, next) => {
    const { error } = createNewUserJoi.validate(req.body);
    if (error) {
      const [message, errorStatus] = (error.message).split(/\/\/\//);
      return res.status((+errorStatus)).json({ message });
    }
    return next();
};

module.exports = newUserDataMiddleware;
