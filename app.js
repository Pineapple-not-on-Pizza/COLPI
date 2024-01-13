const http = require("http");
const port = 5000

const server = http.createServer(function(req, res) {

})

server.listen(port, function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log("Server is running")
    }
})
