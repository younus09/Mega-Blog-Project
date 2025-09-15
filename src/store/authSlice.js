import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData : null
}

export const  authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        logIn: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logOut: (state,action) => {
            state.status = false;
            state.userData = null;
        }
    }
}) 


export const {logIn, logOut} = authSlice.actions //this is action from reducer from authslice
export default authSlice.reducer