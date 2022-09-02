const errorMiddleware = (error, _req, res, _next) => {
  console.log(error.message);
  if (error.original?.code === 'ER_DUP_ENTRY') res.status(409).json({ message: error.message, erro: true });

  return res.status(500).json({ message: error.message, erro: 'teste' });
};

module.exports = errorMiddleware;
