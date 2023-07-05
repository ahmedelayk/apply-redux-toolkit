import { useSelector } from "react-redux";
import "./sidebar.css";

const Sidebar = () => {
    const { name } = useSelector(state => state.user.userData)

    return (
        <>
            <aside>
                <h2>Hello ya { name }</h2>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </aside>
        </>
    )
}

export default Sidebar