module.exports = {
  HOST: "us-cdbr-east-02.cleardb.com",
  USER: "b9446b3764dcdc",
  PASSWORD: "132b81ce",
  DB: "heroku_2add9fc0e123fb3",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
