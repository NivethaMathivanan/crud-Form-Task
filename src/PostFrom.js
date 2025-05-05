import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost } from './reduxFile/Action';

const PostForm = ({ editingPostIndex, setEditingPostIndex }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingPostIndex !== null) {
      const post = posts[editingPostIndex];
      setTitle(post.title);
      setContent(post.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPostIndex, posts]);

  const handleSubmit = () => {
    if (editingPostIndex !== null) {
      dispatch(updatePost(editingPostIndex, { title, content }));
      setEditingPostIndex(null);
    } else {
      dispatch(addPost({ title, content }));
    }
    setTitle('');
    setContent('');
  };

  return (
    <>
    <h1 className='text-center'>React [useState,useEffect] CRUD</h1>
    <div className="card-form p-4 my-4 shadow-lg w-75 mx-auto">
      <h2 className='text-center mb-4'>{editingPostIndex !== null ? 'Edit Post' : 'Add Post'}</h2>
      <input
        className='form-control mb-3'
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className='form-control mb-3'
        placeholder="Enter Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="d-flex justify-content-center gap-3">
        <button onClick={handleSubmit} className='btn btn-primary'>
          {editingPostIndex !== null ? 'Update Post' : 'Add Post'}
        </button>
      
      </div>
    </div>
    </>
  );
};

export default PostForm;
