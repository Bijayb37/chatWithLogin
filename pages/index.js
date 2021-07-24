import { memo, useContext, useEffect, useState } from 'react'
import { MainContext } from '../contexts'
import { SocketContext } from '../contexts/SocketContext'
import styles from '../styles/Home.module.css'
import Toast from '../Components/Toast'
import { useRouter } from 'next/router'


function Login(props) {
  const { socket } = useContext(SocketContext)
  const { username, setUsername, room, setRoom } = useContext(MainContext)
  const [toastList, setToastList] = useState([])
  const router = useRouter()

  const handleClick = () => {
    socket.emit("login", { username, room }, error => {
      if (error) {  
        let ranNumber = Math.floor(Math.random() * 101)
        setToastList(prev => [...prev, { id: ranNumber, title: "Login Failed", message: error, color: "red" }])
        return console.log(error)
      }
      router.push('/chat', null, {shallow: true})
    })
  }

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.signin}>Sign In</h2>
        <div className={styles.inputs}>
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} id="roomInput" type="text" className={styles.roomInput} />
          <input placeholder="Room Name" onChange={(e) => setRoom(e.target.value)} id="nameInput" type="text" className={styles.nameInput} />
        </div>
        <button className={styles.button} onClick={handleClick}>Click me</button>
      </div>
      <div>
        <Toast toastList={toastList} setToastList={setToastList} />
      </div>
    </div>
  )
}

export default Login