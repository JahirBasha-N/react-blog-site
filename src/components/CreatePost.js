import { React, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      title,
      body: description,
    };
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    navigate("/home");
  };

  return (
    <Fragment>
      <form className="create-posts">
        <p>Title</p>
        <input placeholder="Title" value={title} onChange={handleTitleChange} />
        <p>Description</p>
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button
          type="submit"
          style={{ width: "fit-content" }}
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </Fragment>
  );
};

export default CreatePost;
