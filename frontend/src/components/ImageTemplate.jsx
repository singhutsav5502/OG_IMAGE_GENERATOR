import React from "react";
import { useSelector } from "react-redux";
import './ImageTemplate.css'
const ImageTemplate = () => {
  const userName = useSelector((state) => state.userState.userName);
  const userImage = useSelector((state) => state.userState.userImage);
  const postTitle = useSelector((state) => state.postState.postTitle);
  const postContent = useSelector((state) => state.postState.postContent);
  return (
    <div
      id="image-template"
      style={{
        width: "1200px",
        height: "630px",
        background: "#f0f0f0",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        overflow: "hidden",
        backgroundColor: "var(--tertiary-background)",
        borderRadius: "16px",
      }}
    >
      <div
        width="100%"
        height="auto"
        style={{
          backgroundColor: "var(--primary-background)",
          borderRadius: "8px",
        }}
      >
        <div
          className="user-info"
          style={{
            justifyContent: "space-between",
            padding: "0px 2vw 0px 2vw",
          }}
        >
          <img src={userImage} alt="" width="20px" height="20px" />
          <p style={{ fontSize: "3rem", lineHeight: "1" }}>{userName}</p>
        </div>
      </div>
      <div className="vignette"></div>
      <div style={{padding:'20px'}}>
        <h1 style={{ fontSize: "3rem" }}>{postTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: postContent }} className="post-content-template"/>
      </div>


    </div>
  );
};

export default ImageTemplate;
