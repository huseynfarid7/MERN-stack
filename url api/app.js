const http = require('http');
const routes = require('./routes')


const server = http.createServer((req,res) => {
    const route = routes[req.url]
    if (route === undefined) {
        res.writeHead(404, {'Content-Type': "text/html"})
        res.write('<h1> 404 not found </h1>')
        res.end()
    }

    const handler = route[req.method]
    handler(res)
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})

