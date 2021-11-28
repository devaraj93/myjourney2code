import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class TableRows extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.body}</td>
          <td>
            <i className="trash icon"></i>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Book-Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderList()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.data.test);
  return { posts: state.data.rowFilter };
};

export default connect(mapStateToProps, { fetchPosts })(TableRows);
