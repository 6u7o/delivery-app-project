const errorMiddleware = (error, _req, res, _next) => {
  console.log(error.message);  
  res.status(500).json({ message: error.message, erro: 'teste' });
};

module.exports = errorMiddleware;
