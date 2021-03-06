import { memo, useContext, useEffect, useState } from 'react'
import { MainContext } from '../contexts'
import { SocketContext } from '../contexts/SocketContext'
import styles from '../styles/Home.module.css'
import Toast from "./Toast"
import { useRouter } from 'next/router'

function Login(props) {
    const { socket } = useContext(SocketContext)
    const { username, setUsername, room, setRoom } = useContext(MainContext)
    const [toastList, setToastList] = useState([])
    const router = useRouter()

    const removeToast = (username) => {
        setToastList(prev => prev.filter((t) => t.username !== username))
    }

    const handleClick = () => {
        socket.emit("login", { username, room }, error => {
            if (error) {
                return console.log(error)
            }
            router.push('/chat')
        })
    }

    return (
        <div>
            <div className={styles.container}>
                <label htmlFor="roomInput">Room Name</label>
                <input onChange={(e) => setRoom(e.target.value)} id="nameInput" type="text" className={styles.nameInput} />
                <label htmlFor="nameInput">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} id="roomInput" type="text" className={styles.roomInput} />
                <button onClick={handleClick}>Click me</button>
            </div>
            <div>
                <Toast toastList={toastList} removeToast={removeToast} />
            </div>
        </div>
    )
}

export default memo(Login)