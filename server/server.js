const server = require("express")()
const http = require("http").createServer(server)
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { addUsers, getUser, getUsers, deleteUser} = require('./users')

const io = require("socket.io")(http, {
    cors: {
        origin: "*"
    }
})

io.on('connection', (socket) => {

    socket.on("login", ({username, room}, callback) => {
        const {user, error} = addUsers(socket.id, username, room)
        if (error) return callback(error)
        callback()
    })

    socket.on("second login", () => {
        const user = getUser(socket.id)
        socket.join(user.room)
        io.in(user.room).emit("users", getUsers(user.room))
        socket.in(user.room).emit("toast", user.username, user.room)
    })

    socket.on("chat message", (msg) => {
        const user = getUser(socket.id)
        io.emit("chat message", msg)
    })

    socket.on("disconnect", () => {
        console.log("disconnected")
        const user = getUser(socket.id)
        const users = deleteUser(socket.id)
        if (user) {
            socket.in(user.room).emit("removal", users, user)
        }
      });
})  

app.prepare().then(() => {

    server.get("*", (req, res) => {
        return handle(req,res)
    })

    http.listen(3000, err => {
        if(err) throw err
        console.log(":> Now serving localhost:3000")
    })
})