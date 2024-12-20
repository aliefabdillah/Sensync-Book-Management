// load env file
import dotenev from 'dotenv';

dotenev.config();

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};

export default config;
