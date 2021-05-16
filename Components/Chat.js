import { memo, useContext, useEffect, useState } from 'react'
import { SocketContext, MainContext } from '../contexts'
import styles from '../styles/Chat.module.css'
import { useRouter } from 'next/router'
import Toast from '../Components/Toast'

function Chat(props) {
    const { socket } = useContext(SocketContext)
    const { username, setUsername, room, setRoom } = useContext(MainContext)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [toastList, setToastList] = useState([])
    const router = useRouter()
    
    // useEffect(() => { if (!username) return router.push("/") }, [router, username])
    useEffect(() => {
        router.beforePopState(() => {
            logout()
        })
        // setToastList(prev => [...prev, { title: `Welcome `, message: `to room `}])
        socket.on("users", (us, rm) => {
            console.log(us, rm)
            setToastList(prev => [...prev, { title: `Welcome ${us}`, message: `to room ${rm}`}])
        })
        socket.on("chat message", (msg) => {
            console.log(msg)
            // setMessages((prevMessages) => [...prevMessages, msg])
        })
    }, [])

    const removeToast = (username) => {
        setToastList(prev => prev.filter((t) => t.username !== username))
    }   

    const testie = () => {
        setToastList(prev => [...prev, { title: 'Welcome', message: 'to room ${rm}'}])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // setMessages((prevMessages) => [...prevMessages, newMessage])
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

    const mapped = messages.map((m,i) => (
        <h1 key={i}>{m.body}</h1>
    ))

    const logout = () => {
        setUsername(''); setRoom('');
        router.push('/')
    }

    return (
        <div className={styles.chatContainer}>
            <div className={styles.header}>
                <button onClick={testie} className={styles.dropdown}>Users Logged In</button>
                <div className={styles.nameContainer}>
                    <h1>{room || 'room'}</h1>
                    <p>{username || 'username'}</p>
                </div>
                <button onClick={logout} className={styles.button}>Log Out</button>
            </div>
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
                <Toast toastList={toastList} removeToast={removeToast}/>
            </div>
        </div>
    )
}

export default Chat