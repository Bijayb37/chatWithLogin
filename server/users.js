const { Socket } = require("socket.io")

let users = []

const addUsers = (id, username, room) => {
    const existingUser = users.find(user => user.username === username)
    // if (existingUser) return { error: "you smell poo" }
    if (!room && !username) return { error: "please enter a username and a room"}
    if (!room) return { error: "please enter a room"}
    if (!username) return { error: "please enter an username"}
    const user = { id, username, room }
    users.push(user)
    return {user}
}

const getUser = (id) => {
    const user = users.find(user => user.id === id)
    return user
}

const getUsers = (room) => {
    return users.filter(allUsers => allUsers.room === room )
}

const deleteUser = (id) => {
    //splice

    //filter
    users = users.filter((user) => user.id !== id)
    return users
}

module.exports = { users, addUsers, getUser, getUsers, deleteUser }