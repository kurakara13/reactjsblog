import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const response = await axios.get('https://my-json-server.typicode.com/kurakara13/demo/posts');
    return response.data;
});

const postEntity = createEntityAdapter({
    selectId: (post) => post.id
});

const postSlice = createSlice({
    name: "post",
    initialState: postEntity.getInitialState(),
    extraReducers: {
        [getPosts.fulfilled]: (state, action) => {
            postEntity.setAll(state, action.payload);
        }
    }
});

export const postSelectors = postEntity.getSelectors((state) => state.post);
export default postSlice.reducer;