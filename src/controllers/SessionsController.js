const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const {compare} = require("bcryptjs");
const authConfig = require("../configs/auth");
const {sign} = require("jsonwebtoken");


class SessionsController {
  async create(request, response){
    const {email, password} = request.body;

    //check no banco de dados
    const user = await knex("users").where({email}).first();
    
    //se estiver incorreto mostrar erro
    if(!user) {
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    //match senha com banco de dados
    const passwordMatch = await compare(password, user.password);
  
    //se for (!) falso
    if(!passwordMatch) {
      throw new AppError("E-mail e/ou senha incorreta", 401);
    }

    const{secret, expiresIn} = authConfig.jwt;
    const token = sign({}, secret,{
      subject:String(user.id),
      expiresIn,
    })
  
    //retorno json
    return response.json({user, token})
  }
}


module.exports = SessionsController;