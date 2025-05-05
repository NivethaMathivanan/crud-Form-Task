import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './reduxFile/Action';

const PostList = ({ setEditingPost }) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleDlete = (index) => {
    dispatch(deletePost(index));
  };

  return (
    <div>
      <h2 className="head1">Posts</h2>
      {posts.map((post, index) => (
        <div className="card-post animate__animated animate__fadeInUp" key={index}>
          <h3 className="list1">Title: {post.title}</h3>
          <p className="list2">Content: {post.content}</p>
          <div className="text-center">
            <button className="btn btn-secondary mx-2" onClick={() => setEditingPost(index)}>Edit</button>
            <button className="btn btn-danger mx-2" onClick={() => handleDlete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
