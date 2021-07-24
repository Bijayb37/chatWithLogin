import React, { createContext, useState } from 'react'

export const MainContext = createContext()
export const UsersContext = createContext()


export const MainProvider = (props) => {
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")
    const [users, setUsers] = useState([])

    return (
        <MainContext.Provider value={{ username, setUsername, room, setRoom }}>
            <UsersContext.Provider value={{ users, setUsers }}>
                    {props.children}
            </UsersContext.Provider>
        </MainContext.Provider>
    )
}

