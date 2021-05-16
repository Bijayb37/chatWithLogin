import { useState } from "react"

export default function useToggle(initialVal) {
    const [boolean, setBoolean] = useState(initialVal)

    const toggle = () => {
        setBoolean(prev => !prev)
    }

    return [boolean, toggle]
}