import React, { useState } from "react";
import "./Upload.css";
import Axios from "axios";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  function upload() {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "gaciqzb6");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dharun/social-media-app",
      formData
    ).then((res) => {
      const fileName = res.data.public_id;
      Axios.post("http://localhost:3001/upload", {
        title: title,
        description: description,
        image: fileName,
      });
    });
  }

  return (
    <div className="Upload">
      <div className="UploadForm">
        <h2>Create A Post</h2>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="password"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rows="4"
        />
        <input
          className="UploadFile"
          type="file"
          onChange={(e) => {
            setImage(e.target.files);
          }}
        />

        <button onClick={upload}>Post</button>
      </div>
    </div>
  );
}

export default Upload;
