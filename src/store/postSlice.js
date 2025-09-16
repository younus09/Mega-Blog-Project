import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    posts : [
        
    ]
}

export const postSlice = createSlice({
    name : "post",
    initialState,
    reducers: {
        addAllPost : (state, action) => {
            state.posts = action.payload
        },
        addNewPost : (state,action) => {
            const post = action.payload
            state.posts.push(post)
        },
        deletePost: (state,action) => {
            state.posts = state.posts.filter((post) => action.payload !== post.id )
        },
        updatePost : (state, action) => {
            state.posts = state.posts.map((post) => (post.id === action.payload.post.$id ? {...action.payload.post} : post))
        },
        
    }
})

export const {addAllPost, addNewPost, deletePost, updatePost}  = postSlice.actions
export default postSlice.reducer