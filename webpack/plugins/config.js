
const environment = {
    development: {
        apiPath: 'http://localhost:3030/api/',
        isClient: typeof(window) !== "undefined"
    },
    production: {
        apiPath: 'http://localhost:3030/api/',
        isClient: typeof(window) !== "undefined"
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({}, environment);