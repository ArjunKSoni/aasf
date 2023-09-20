import {createSlice} from '@reduxjs/toolkit' 

const Auth=createSlice({
    name:"Token",
    initialState:{
        Token:1234,
    },
    reducers:{
        updateToken:(state,action)=>{
            state.Token=action.payload.Token
        }
    }
})

export const { updateToken } = Auth.actions;
export default Auth.reducer