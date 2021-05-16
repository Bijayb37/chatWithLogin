import { io } from 'socket.io-client'
import React, { createContext, useContext, useState } from 'react'
export const SocketContext = createContext()

export const SocketProvider = (props) => {
    const [socket] = useState(io("localhost:3000"))

    return (
        <SocketContext.Provider value={{ socket }}>
            {props.children}
        </SocketContext.Provider>
    )
}
