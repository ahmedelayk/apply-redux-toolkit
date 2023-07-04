import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
    },
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
})

export const { addUser } = userSlicer.actions;
export default userSlicer.reducer;