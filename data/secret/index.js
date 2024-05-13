// This line imports and configures the dotenv package, which allows us to load environment variables from a .env file into process.env
require('dotenv').config()

// This exports an object containing configuration options. JWT_SECRET is set to the value of the JWT_SECRET environment variable, or "distilled" if the environment variable is not set.
module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || "distilled",

    // NUM is set to the value of the num environment variable, or 8 if the environment variable is not set.
    NUM: process.env.num || 8
}
