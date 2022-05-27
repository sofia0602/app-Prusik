import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import PORT from "../../constants/constants"

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    id:"",
    name: "",
    email:"",
    createdTime: "",
    modifyTime: "",
  });

  const {  name, email} = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onChangeTime=(e)=>{
    setUser({ ...user, [e.target.name]:new Date().toLocaleString()});
  }
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:${PORT}/users`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:${PORT}/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter User Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter date"
              name="email"
              value= {email}
              onChange={e=>onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter date"
              name="modifyTime"
              value= {new Date().toLocaleString()}
              onChange={e=>onChangeTime(e)}
             // disabled='true'
            />
          </div>
        
          <button className="btn btn-warning btn-block" onChange={e=>onChangeTime(e)}>Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
