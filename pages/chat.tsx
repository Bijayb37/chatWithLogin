import { useContext, useEffect, useState } from 'react'
import { MainContext, UsersContext } from '../contexts'
import { SocketContext } from '../contexts/SocketContext'
import styles from '../styles/Chat.module.css'
import { useRouter } from 'next/router'
import Toast from '../Components/Toast'
import useToggle from '../Components/useToggle'

function Chat(props) {
    const { socket } = useContext(SocketContext)
    const { username, setUsername, room, setRoom } = useContext(MainContext)
    const { users, setUsers } = useContext(UsersContext)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [toastList, setToastList] = useState([{ title: `Welcome ${username}`, message: `to room ${room}` }])
    const [toggler, toggle] = useToggle(false)
    const router = useRouter()

    useEffect(() => {
        if (!username) return router.push("/")
        router.beforePopState(() => {
            logout()
        })
        socket.emit("second login")
        socket.on("toast", (us, rm) => {
            let meth = Math.floor(Math.random() * 101)
            setToastList(prev => [...prev, { id: meth, title: `${us}`, message: `has enterted room ${rm}` }])
        })

        socket.on("chat message", (msg) => {
            console.log("message sent")
            setMessages((prevMessages) => [...prevMessages, msg])
        })

        socket.on("users", (allUsers) => {
            setUsers(allUsers)
        })

        socket.on("removal", (serverUsers, serverUser) => {
            setUsers(serverUsers)
            let meth = Math.floor(Math.random() * 101)
            setToastList(prev => [...prev, { id: meth, title: `${serverUser.username}`, message: "has left the room" }])
        })

        return () => (
            socket.disconnect()
        )
    }, [])

    useEffect(() => {

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        setMessages((prevMessages) => [...prevMessages, { body: newMessage, id: socket.id }])
        socket.emit("chat message",
            {
                body: newMessage,
                id: socket.id
            }
        )
    }

    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }

    const mapped = messages.map((m, i) => (
        <h1 key={i}>{m.body}</h1>
    ))

    const logout = () => {
        setUsername(''); setRoom('');
        router.push('/')
        router.reload()
    }

    return (
        <div className={styles.chatContainer}>
            <div className={styles.header}>
                <button onClick={toggle} className={styles.dropdown}>Users Logged In</button>
                <div className={styles.nameContainer}>
                    <h1>{`Room ${room}` || 'room'}</h1>
                    <p>{username || 'username'}</p>
                </div>
                <button onClick={logout} className={styles.button}>Log Out</button>
            </div>
            {toggler &&
                <div>
                    <h1>header</h1>
                    <ul>
                        {users.map((user, i) => <li key={i}>{user.username}</li>)}
                    </ul>
                </div>
            }

            <div className={styles.mainBody}>
                <div className={styles.messages}>
                    {mapped}
                </div>
                <div className={styles.messages2}>
                    <form className={styles.newMessageForm}>
                        <textarea onChange={handleChange} value={newMessage} className={styles.newMessageBox} placeholder="type new message here" />
                        <button onClick={handleSubmit} className={styles.messageButton}>
                            Submit
                    </button>
                    </form>
                </div>
            </div>
            <div>
                <Toast toastList={toastList} setToastList={setToastList} />
            </div>
        </div>
    )
}

export default Chat