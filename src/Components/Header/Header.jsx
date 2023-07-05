import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
    const { name } = useSelector(state => state.user.userData)

    return (
        <>
            <nav>
                <div className="logo">Elayek</div>
                <div className="welcome"> Hello ya { name }</div>
            </nav>
        </>
    )
}

export default Header