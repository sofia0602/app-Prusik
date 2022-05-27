import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import PORT from "../../constants/constants";

const EditPost = () => {
  let history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({
    author: "",
    title: "",
    description: "",  
    price: "",
  });

  const {  author,  title, description, price} = post;
  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onChangeTime=(e)=>{
    setPost({ ...post, [e.target.name]:new Date().toLocaleString()});
  }
  useEffect(() => {
    loadPost();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:${PORT}/posts`, post);
    history.push("/");
  };

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:${PORT}/posts/${id}`);
    setPost(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Post</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="author"
              value={author}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="title"
              value= {title}
              onChange={e=>onChangeTime(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="description"
              value= {description}
              onChange={e=>onChangeTime(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="price"
              value= {price}
              onChange={e=>onChangeTime(e)}
            />
          </div>
        
          <button className="btn btn-warning btn-block" onChange={e=>onChangeTime(e)}>Update Post</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
