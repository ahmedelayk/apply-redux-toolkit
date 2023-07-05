import { useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../../redux/userSlice";
import { handleAddUser } from "../../redux/api";

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const dispatch = useDispatch();

    const {loading, error} = useSelector(state => state.user)
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(addUser({ name, email }))
        handleAddUser({name, email}, dispatch)
    }

    return (
        <>
            <section className="form-container">
                <form onSubmit={ handleSubmit }>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="enter your name"
                            onChange={ (e) => setName(e.target.value) }
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            placeholder="enter your email"
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                    </div>
                    <div className="form-control">
                        <input type="submit" value={loading? "loading...":"add"} />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form