const {verify} =  require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAutenticated(request, response, next){
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token não informado", 401);
  }
  // quebrando o texto em um array e utilizando o espaço como paramento, utilizando a variavel token
//bearer
  const [, token] = authHeader.split(" ");

  try{
    //sub = propriedade que verifica se é valido
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    request.user = {
      id: Number(user_id),
    };
  
  return next();
  } 
  
  catch {
    throw new AppError("JWT Token Inválido", 401);
  }
}

module.exports = ensureAutenticated