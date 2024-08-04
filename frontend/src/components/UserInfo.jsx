import React from 'react'
import { Card } from './Card'
import { useSelector, useDispatch } from 'react-redux'
import {userActions} from '../store'
import "./UserInfo.css"
export const UserInfo = () => {
  const userName = useSelector((state)=>state.userState.userName); 
  const userImage = useSelector((state)=>state.userState.userImage); 
  const dispatch = useDispatch();
  const nameChangeHandler= (e)=>{
    dispatch(userActions.setUserName(e.target.value))
  }
  return (
    <>
    <div className="user-card">
      <Card width="25vw" height="auto">
          <div className="user-info">
            <img src={userImage} alt=""  width="100px" height="100px"/>
            <input type="text" value={userName} onChange={nameChangeHandler} id="user-name-input"/>
          </div>
      </Card>
    </div>
    </>
  )
}
