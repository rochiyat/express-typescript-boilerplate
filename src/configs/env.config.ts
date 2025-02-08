import dotenv from 'dotenv';
dotenv.config();

const production = {
  PORT: process.env.PORT,
};

const development = {
  PORT: process.env.PORT,
};

const env = process.env.NODE_ENV === 'production' ? production : development;

export default env;
