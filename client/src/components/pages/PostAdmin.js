import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "../Table";
import PORT from "../../constants/constants";

const PostAdmin = () => {
  const [posts, setPost] = useState([]);
  const [tableName, setTableName]=useState('');
  const [colums, setColums]=useState(['id', 'Author', 'Title', 'Description','Price','Picture'])
  const [rows, setRows]=useState(['id','author', 'title', 'description','price','picture'])
  const [route,setRoute]=useState('posts')

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:${PORT}/posts`);
    setPost(result.data.reverse());
  };

  const deleteUser = async _id => {
    await axios.delete(`http://localhost:${PORT}/posts/${_id}`);
    loadUsers();
  };

  return (
    <React.Fragment>
       <div className="row justify-content-center pt-4">
        <h3>Post admin panel</h3>
      </div>
      <div className="container row justify-content-end pt-5">
      <Link className="btn btn-outline-dark " to="/posts/add">Add Post</Link>
      </div>
      <Table tableName={tableName} colums={colums} rows={rows} data={posts} deleteData={deleteUser} route={route}></Table>
    </React.Fragment>
    
  );
};

export default PostAdmin;
