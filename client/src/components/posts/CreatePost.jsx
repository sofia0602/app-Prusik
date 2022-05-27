import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Uploady from "@rpldy/uploady";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import PORT from "../../constants/constants";

const CreatePost = () => {
  let history = useHistory();
  const [post, setPost] = useState({
    id:"",
    author: "",
    title: "",
    description: "",  
    price: "",
    picture: ""
  });
  const [file,setFile]=useState([])
  const [formData,setFormData]= useState(new FormData())
  const mockSenderEnhancer = getMockSenderEnhancer();
  const { author, title, description, price, picture } = post;
  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
    if(e.target.name==="picture"){
      //setFile(e.target.files[0])
      //setPost({ ...post, new FormData().append('picture',  e.target.value)})
      //: new FormData().append('picture',  e.target.value)
     // console.log(new FormData().append( e.target.name,  e.target.files[0]))
    
     console.log(formData)
     if(e.target && e.target.files[0]){
      formData.append('file',e.target.files[0])
      console.log( new FormData().set('picture', e.target.files[0]))
     }
    
      setPost({ ...post, formData });
    }
  };


  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:${PORT}/posts/add`, post);
    //await axios({url:`http://localhost:${PORT}/posts/add`, method:"POST", data:{...post,formData}});
    history.push("/");
  };
  console.log(picture)
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Create a post</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Author Name"
              name="author"
              value={author}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter picture title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="description"
              className="form-control form-control-lg"
              placeholder="Enter post description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter picture price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg"
              placeholder="Uppload picture"
              name="picture"
              value={picture}
              onChange={e => onInputChange(e)}
            />
          </div>
            {/* <Uploady
              destination={{ url: "http://localhost:${PORT}/posts/add" }}
              enhancer={mockSenderEnhancer}
            >
              <UploadButton>Upload Files</UploadButton>
              <UploadPreview />
            </Uploady> */}
          <button className="btn btn-primary btn-block">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
