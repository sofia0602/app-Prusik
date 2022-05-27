import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Post from "./components/posts/Post";
import EditPost from "./components/posts/EditPost";
import CreatePost from "./components/posts/CreatePost";
import PostAdmin from "./components/pages/PostAdmin";
import UserAdmin from "./components/pages/UserAdmin";



function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={UserAdmin} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={PostAdmin} />
          <Route exact path="/posts/add" component={CreatePost} />
          <Route exact path="/posts/edit/:id" component={EditPost} />
          <Route exact path="/posts/:id" component={Post} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
        
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
