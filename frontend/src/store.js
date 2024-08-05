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
const postState = createSlice({
  name:'postState',
  initialState:{
    postTitle:"Preview Title",
    postContent:"Preview content written inside post",
  },
  reducers:{
    setPostTitle:(state,action)=>{
      state.postTitle = action.payload
    },
    setPostContent:(state,action)=>{
      state.postContent = action.payload
    }
  }
})
export const userActions = userState.actions
export const postActions = postState.actions
export const store = configureStore({
  reducer: {
    userState:userState.reducer,
    postState:postState.reducer,
  },
})
