require('dotenv').config()

const port = process.env.PORT || 5000
const server = require('./api/server')


server.listen(port, () => {
  console.log(`\n=== Rocking out on port ${port} ===\n`)
})