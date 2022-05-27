import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PORT from "../../constants/constants";

const Post = () => {
  const [post, setPost] = useState({
    author: "",
    title: "",
    description: "",  
    price: "",
    picture: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:${PORT}/posts/${id}`);
    setPost(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h3 className="display-4">Post Id: {id}</h3>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><b>Author Name: </b> {post.author}</li>
        <li className="list-group-item"><b>Title:</b> {post.title}</li>
        <li className="list-group-item"><b>Description:</b>  {post.description}</li>
        <li className="list-group-item"><b>Price:</b> {post.price}</li>
        <li className="list-group-item"><b>Picture:</b> <img src={post.picture} /> </li>
      </ul>
    </div>
  );
};

export default Post;
