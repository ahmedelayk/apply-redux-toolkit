import { useState } from "react";
import "./form.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ name, email }))
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
                        <input type="submit" value="add" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form