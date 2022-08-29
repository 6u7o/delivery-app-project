const jwt = require('../auth/jwt');
require('dotenv').config();

const { Users } = require('../database/models'); // Essa chamada da módel não deveria ser feita diretamente aqui. Aqui deveria ser chamado um service

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;

  // reseta as variaveis que usaremos para armazenar os dados de interesse do token, evitando erros caso elas venham com algum valor malicioso. Acho valido para evitar executar mais uma requisição para o banco de dados, quando já fazemos isso uma vez aqui na verificação do token (como temos que verificar se o usuário está cadastrado e seu role entre outras possíveis verificações, também, trazer os dados direto do banco de dados ajuda a evitar erros e pegar dados atualizados; por outro lado, acho que em rotas de update faz muito mais sentido criar o novo token depois de fazer a atualização .-. Irei manter assim por hora e a gente remove mais pra frente). 
  req.NewToken = undefined; req.UserId = undefined; req.UserRole = undefined;
  req.UserName = undefined; req.UserEmail = undefined;

  // na ausência de um token retorna que o acesso não é autorizado
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
    // descriptografa o token;
    const tokenPayload = jwt.verifyAndReadToken(token);

    // verifica a existência do user que está fazendo a requisição;
    const user = await Users.findByPk(tokenPayload.id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) { // faria mais sentido uma verificação vai completa dos dados que chegaram no token e os dados do banco de dados, mas acho que isso seja suficiente mesmo 
      return res.status(401).json({ message: 'Invalid user data' });
    }

    //  cria o novo token
    const { id, email, name, role } = user;
    const refreshToken = jwt.generateToken({ id, email, name, role });
    // adiciona novos dados ao request para facilitar o trabalho. Os dados adicionados pelo tratamento interno estarão em PascalCase pois o lint não aceita '_';
    req.NewToken = refreshToken; req.UserId = id; req.UserRole = role;
    req.UserName = name; req.UserEmail = email; req.headers.authorization = refreshToken;

    return next();
};
