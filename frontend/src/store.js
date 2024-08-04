import { configureStore, createSlice } from '@reduxjs/toolkit'
const userState = createSlice({
  name:'userState',
  initialState:{
    userName:"Chipmunk52468",
    userImage:"/chipmunk.jpg"
  },
  reducers:{
    setUserName: (state,action)=>{
      state.userName = action.payload
    },
    setUserImage: (state,action)=>{
      state.userImage = action.payload
    }
  }
})
export const userActions = userState.actions
export const store = configureStore({
  reducer: {
    userState:userState.reducer,
  },
})
