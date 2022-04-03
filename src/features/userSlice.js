import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const response = await axios.get('https://my-json-server.typicode.com/kurakara13/demo/users');
    return response.data;
});

const userEntity = createEntityAdapter({
    selectId: (user) => user.id
});

const userSlice = createSlice({
    name: "user",
    initialState: userEntity.getInitialState(),
    extraReducers: {
        [getUsers.fulfilled]: (state, action) => {
            console.log('huhuh')
            console.log(state)
            console.log('huhuh2')
            userEntity.setAll(state, action.payload);
        }
    }
});

export const userSelectors = userEntity.getSelectors((state) => state.user);
export default userSlice.reducer;