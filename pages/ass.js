import useToggle from '../Components/useToggle'

const test = () => {
    const [toggler, toggle] = useToggle(false)
    
    return (
        <div>
            <div>
                <button onClick={toggle}>click me</button>
                { toggler && 
                <ul>
                    <li>Apple</li>
                    <li>samsung</li>
                </ul>
                }
            </div>
        </div>
    )

}
export default test