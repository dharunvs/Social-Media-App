import React from "react";
import "./Upload.css";

function Upload() {
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
        <input className="UploadFile" type="file" />
        <button onClick={() => {}}>Register</button>
      </div>
    </div>
  );
}

export default Upload;
