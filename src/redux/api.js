import axios from "axios";
import { errorUser, startUser, successUser } from "./userSlice";

export const handleAddUser = async (user, dispatch) => {
    dispatch(startUser());
    try {
        const res = await axios.post("http://localhost:5000/api/users", user);
        console.log(res)
        dispatch(successUser(res.data));
    } catch (error) {
        dispatch(errorUser());
    }
}