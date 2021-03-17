import React from "react";
import axios from 'axios'


class PostDetail extends React.Component {
  state={
    postItem:{}
  }

  componentDidMount(){
     //fetching data for a single post using only one id
    let id = this.props.match.params.id       

     axios
     .get("https://jsonplaceholder.typicode.com/posts/"+id)
     .then((res) => {
       this.setState({ postItem: res.data });
     })
     .catch((err) => {
       console.log(err.response);
     });
  }
  render() {
    console.log(this.props);

    const {postItem} = this.state;

    console.log(this.state);


    return (
      <div key={postItem.id} className="container bg-light p-3">
        {/* pass as a props
        go to json placeholder----it comes as an object 
        then use dot notation to access title and body*/}

        {/* <h2>{postItem.}</h2> */}

        <h1>{postItem.title}</h1>
        <p>{postItem.body}</p>
      </div>
    );
  }
}

export default PostDetail;
