import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "../Table";
import PORT from "../../constants/constants";

const UserAdmin = () => {
  const [users, setUser] = useState([]);
  const [tableName, setTableName]=useState('');
  const [colums, setColums]=useState(['id', 'Author name', 'Email', 'Created at', 'Modify at'])
  const [rows, setRows]=useState(['id','name','email', 'createdTime', 'modifyTime'])
  const [route,setRoute]=useState('users')
  

  useEffect(() => {
  loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:${PORT}/users`);
    setUser(result.data.reverse());
  };

  const deleteUser = async _id => {
    await axios.delete(`http://localhost:${PORT}/users/${_id}`);
    loadUsers();
  };

  return (
    <React.Fragment>
       <div className="row justify-content-center pt-4">
        <h3>User admin panel</h3>
      </div>
      <div className="container row justify-content-end pt-5">
      <Link className="btn btn-outline-dark " to="/users/add">Add User</Link>
      </div>
      <Table tableName={tableName} colums={colums} rows={rows} data={users} deleteData={deleteUser} route={route}></Table>
    </React.Fragment>
  );
};

export default UserAdmin;
