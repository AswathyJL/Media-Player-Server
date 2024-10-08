// import json-server
// File is a CommonJS module; it may be converted to an ES module.
const jsonServer = require('json-server')

// create server
const mpServer = jsonServer.create()

// set up paath for db.json file
const router = jsonServer.router("db.json")

// create middleware
const middleware = jsonServer.defaults()

// define a port for running json server
const PORT = 3000 || process.env.PORT

// use middleware, router
mpServer.use(middleware)
mpServer.use(router)

// run server in given port to resolve client request
mpServer.listen(PORT,()=>{
    console.log(`MP Server is started at port ${PORT} and waiting for client request!!!`);
    
})