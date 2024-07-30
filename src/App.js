import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [classes, setClasses] = useState([]);

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

    async function fetchClasses(){
      try{
        const response = await fetch('https://dnd5eapi.co/api/classes');
        if (!response.ok){
          throw new Error('D&D 5e SRD API not available.')
        }
        const data = await response.json();
        setClasses(data);
        console.log(data);
      } catch (err) {
        console.error(err)
      }
    }

    fetchPosts();
    fetchClasses();
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
