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

    Axios.get("https://api.cloudinary.com/v1_1/dharun/samples", {
      headers: {
        "Access-Control-Allow-Origin": true,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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

        <button onClick={upload}>Post</button>
      </div>
    </div>
  );
}

export default Upload;
