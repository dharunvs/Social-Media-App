import React, { useState } from "react";
import "./Upload.css";
import Axios from "axios";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  function upload() {
    const imageData = new FormData();
    imageData.append("file", image);
  }

  return (
    <div className="Upload">
      <div className="UploadForm">
        <h2>Create A Post</h2>
        <input type="text" placeholder="Title" onChange={() => {}} />
        <textarea
          type="password"
          placeholder="Description"
          onChange={() => {}}
          rows="4"
        />
        <input
          className="UploadFile"
          type="file"
          onChange={(e) => {
            setImage(e.target.files);
          }}
        />
        <button onClick={() => {}}>Post</button>
      </div>
    </div>
  );
}

export default Upload;
