const errorMiddleware = (error, req, res, next) => {
  console.log(error.message);  
  res.status(500).json({message: error.message, erro: 'teste'});
};

module.exports = errorMiddleware;