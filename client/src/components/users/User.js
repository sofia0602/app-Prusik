import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PORT from "../../constants/constants"

const User = () => {
  const [user, setUser] = useState({
    username: "",
    email:"",
    createdTime: "",
    modifyTime: "",
    picture: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:${PORT}/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h6 className="display-4">User Id: {id}</h6>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"> <b>Author Name:</b> {user.username}</li>
        <li className="list-group-item"><b>Email:</b>   {user.email}</li>
        <li className="list-group-item"><b>Modify at:</b> {user.modifyTime}</li>
        <li className="list-group-item"><b>Picture:</b> <img src={user.picture} /> </li>
      </ul>
    </div>
  );
};

export default User;
