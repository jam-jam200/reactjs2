import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class PostList extends React.Component {
  render() {
    //destructing of post...post is the props passed into postlist
    const { posts } = this.props;
    //the destructed props are stored in item, slice is like a limit, map collects a call back function
    const item = posts.slice(0, 10).map((post) => {
      return (
        //in your loop you can only place the columns here 
        <Col md={4} key={post.id}>
          <h2>
            <Link to={`/post/${post.id}` }>
            {post.title}
            </Link>
            </h2>
          <p>{post.body}</p>
        </Col>
       );
    });

    return (
      <div>
        <h1>Posts</h1>
        {/* the rows are placed in the main div...rows are columns and columns are rows in bootstrap */}
        <Row>{item}</Row>
      </div>
    );
  }
}

export default PostList;
