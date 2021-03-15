import React from "react";
import {Route} from "react-router-dom";
import axios from "axios";


import "bootstrap/dist/css/bootstrap.min.css"


import Home from "./component/Home";
import About from "./component/About";
import PostList from "./component/PostList";
import Contact from "./component/Contact";
import Navigation from "./component/Navigation";

class App extends React.Component {

  state = {
    posts: [],
  };


  //fetch data from json placeholder "https://jsonplaceholder.typicode.com/posts"
  componentDidMount(){
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      this.setState({posts: res.data,});
    })
    .catch((err) => {
      console.log(err.response);
    });

  }

  render() {
    return (
      <div>
        
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts" render={(routerprops) => <PostList {...routerprops} posts={this.state.posts}/> } />
        {/* <Router path="/posts"> <PostList posts={this.state.posts} </Router> */}
        <Route exact path="/contact" component={Contact} />

        
      </div>
    );
  }
}

export default App;
