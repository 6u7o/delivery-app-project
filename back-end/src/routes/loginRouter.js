const { login } = require('../controllers/loginController');
const { loginValidate } = require("../middlewares/loginValidate")

const loginRouter = Router();


loginRouter.post('/login', loginValidate,  login);