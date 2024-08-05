import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../store";
import { Editor } from "primereact/editor";
import { Helmet } from "react-helmet";
import { Card } from "./Card";
import { toPng } from "html-to-image";
import "./PostCreator.css";
const PostCreator = () => {
  const postTitle = useSelector((state) => state.postState.postTitle);
  const postContent = useSelector((state) => state.postState.postContent);
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const imageGenerationHandler = () => {
    const node = document.getElementById("image-template");
    toPng(node)
      .then(async (dataUrl) => {
        const formData = new FormData();
        formData.append("file", dataUrl);
        formData.append("upload_preset", "IMG_UPLOAD_DEFAULT");
        formData.append("cloud_name", `${process.env.REACT_APP_CLOUD_NAME}`);
        try {
          toast("uploading image!");
          fetch("https://api.cloudinary.com/v1_1/dnyr0qvru/image/upload", {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((response) => {
              const imageUrl = response.url;
              setImageUrl(imageUrl);
              const copyContent = async () => {
                try {
                  await navigator.clipboard.writeText(imageUrl);
                  toast("Image Url copied to clipboard");
                } catch (err) {
                  toast.error("Failed to copy image Url to Clipboard");
                }
              };
              copyContent();
            });
        } catch (error) {
          console.error(error);
          toast.error("Error uploading image");
        }
      })
      .catch((error) => {
        console.error("Error generating image", error);
        toast.error("Error generating image");
      });
  };
  return (
    <>
      <Helmet>
        <title>Dynamic OG Image Example</title>
        <meta property="og:title" content="Dynamic OG Image Example" />
        <meta
          property="og:description"
          content="This is a dynamically updated Open Graph image"
        />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </Helmet>
      <div className="post-creator-container">
        <Card width="40vw" minHeight="90vh">
          <h1
            className="post-creator-title"
            style={{ color: "var(--highlight-color)" }}
          >
            Create Post
          </h1>
          <div className="post-creator-inner-container">
            <input
              type="text"
              id="title-box"
              value={postTitle}
              onChange={(e) => {
                dispatch(postActions.setPostTitle(e.target.value));
              }}
            />
            <Editor
              value={postContent}
              onTextChange={(e) =>
                dispatch(postActions.setPostContent(e.htmlValue))
              }
              style={{
                border: "none",
                maxHeight: "40vh",
                height: "40vh",
                overflow: "auto",
                backgroundColor: "var(--tertiary-background)",
                borderRadius: "0px 0px 8px 8px",
                boxShadow: "1px 1px 1px var(--primary-shadow)",
              }}
            />
            <button
              onClick={imageGenerationHandler}
              style={{
                height: "3vh",
                width: "10vw",
                alignSelf: "center",
                padding: "20px",
                textAlign: "center",
                backgroundColor: "var(--primary-background)",
                color: "var(--highlight-color)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                cursor: "pointer",
              }}
              className="generate-button"
            >
              Generate
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default PostCreator;
