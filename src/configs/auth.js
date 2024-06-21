module.exports = {
  jwt: {
    //caso a variavel de ambiente e não seja encontrada temos o default
    secret: process.env.AUTH_SECRET || "default",
    expiresIn: "1d",
  },
};