import React from "react";


class PostList extends React.Component {

  render() {
    const { posts } = this.props;
    const item = posts.slice(0, 10).map((post) => {
      return(
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    });


    return (
      <div>
        <h1>Posts</h1>
        <div>{item}</div>
      </div>
    );
  }
}

export default PostList;
