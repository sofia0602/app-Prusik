import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import PORT from "../../constants/constants"
const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    id:"",
    name: "",
    email:'',
    createdTime: new Date().toLocaleString(),
    modifyTime:""
  });

  const { name, createdTime, email } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:${PORT}/users/add`, user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
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
              placeholder="Enter User Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter date"
              name="createdTime"
              value= {createdTime}
              disabled='true'
            />
          </div>

          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
