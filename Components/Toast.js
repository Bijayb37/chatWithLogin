import { useEffect, useState } from "react"
import styles from "../styles/Toast.module.css"

export default function Toast(props) {
    const { toastList, setToastList } = props

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length > 0) {
                removeToast(toastList[0].id);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        }
        // eslint-disable-next-line
    }, [toastList]);

    const removeToast = (id) => {
        setToastList(prev => prev.filter((t) => t.id !== id))
    }

    return (
        <div className={styles.notificationContainer}>
            {toastList.length > 0 && <>
                { toastList.map((toast, i) =>
                    <div
                        key={i}
                        className={styles.notification}
                        style={ toast.color == "red" ? {backgroundColor: "#c0392b"} : {backgroundColor: "#16a085"}}
                        onClick={() => removeToast(toast.id)}
                    >
                        <div className={styles.notificationTitle} >
                            <p>{toast.title}</p>
                        </div>
                        <div className={styles.notificationMessage}>
                            <p>{toast.message}</p>
                        </div>
                    </div>
                )}
            </>}
        </div>
    )
}