import { io } from 'socket.io-client'
import React, { createContext, useState } from 'react'
export const SocketContext = createContext()

export const SocketProvider = (props) => {
    const [socket] = useState(io())

    return (
        <SocketContext.Provider value={{ socket }}>
            {props.children}
        </SocketContext.Provider>
    )
}
