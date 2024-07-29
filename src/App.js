import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts(){
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
          throw new Error('Network not available');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err)
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch API Example</h1>
      </header>
      <div className="posts">
        {posts.map(post => (
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
