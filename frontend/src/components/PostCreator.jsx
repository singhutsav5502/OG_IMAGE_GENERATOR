import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postActions } from '../store'
import { Editor } from 'primereact/editor';
import { Card } from './Card'
import "./PostCreator.css"
const PostCreator = () => {
    const postTitle = useSelector((state)=>state.postState.postTitle)
    const postContent = useSelector((state)=>state.postState.postContent)
    const dispatch = useDispatch();
  return (
    <>
    <div className="post-creator-container">
        <Card width="50vw" minHeight="90vh">
          <h1 className="post-creator-title">Create Post</h1>
          <div className="post-creator-inner-container">
              <input type="text" id="title-box"  value={postTitle} onChange={(e)=>{
                dispatch(postActions.setPostTitle(e.target.value))
              }}/>
              <Editor 
              value={postContent}
              onTextChange={(e)=> dispatch(postActions.setPostContent(e.htmlValue))}
              style={{border:'none', maxHeight:'40vh', height:'40vh', overflow:'auto', backgroundColor:"var(--tertiary-background)", borderRadius:'0px 0px 8px 8px',
                boxShadow: "1px 1px 1px var(--primary-shadow)"
              }}/>
            </div>
        </Card>
    </div>
    </>
  )
}

export default PostCreator