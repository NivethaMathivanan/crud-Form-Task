import React, { useState } from 'react';
import PostList from './PostList';
import './App.css';
import PostForm from './PostFrom';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css';


const App = () => {
  const [editingPostIndex, setEditingPostIndex] = useState(null);

  return (

    <div>
      {/* <h1 data-shadow='dang!' className=' head mt-3 '>Redux (useState,useEffect) CRUD</h1> */}
      <PostForm editingPostIndex={editingPostIndex} setEditingPostIndex={setEditingPostIndex} />
      <PostList setEditingPost={setEditingPostIndex} />
    </div>
    
  );
};

export default App;
