module.exports = {
  "development": {
    "username": 'moonse',
    "password": '1',
    "database": 'tarea_3_development',
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    seederStorage: "sequelize",
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_NAME}_test`,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    seederStorage: "sequelize",
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": `${process.env.DB_NAME}_production`,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    seederStorage: "sequelize",
  }
};
