const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile()
  res.write('Hello node')
  res.end()
})

server.listen(port, (error) => {
  if(error) console.log(`Something is wrong ${error}`)
  else console.log(`Server is listening on port ${port}`)
})