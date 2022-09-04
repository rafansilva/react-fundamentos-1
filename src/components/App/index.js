import React, { useState, useContext } from "react";

import Post from "../Post";
import Header from "../Header";

import { ThemeProvider } from '../../context/ThemeProvider';

import { Title } from "./styles";

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: "Title#01", subtitle: "Sub#01", likes: 20, read: false, removed: true },
    { id: Math.random(), title: "Title#02", subtitle: "Sub#02", likes: 10, read: true, removed: false },
    { id: Math.random(), title: "Title#03", subtitle: "Sub#03", likes: 50, read: false, removed: false },
    { id: Math.random(), title: "Title#04", subtitle: "Sub#04", likes: 50, read: true, removed: false }
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#${prevState.length + 1}`,
        subtitle: `Sub#${prevState.length + 1}`,
        likes: 60,
        read: false,
        removed: false
      }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => post.id === postId
        ? { ...post, removed: true }
        : post
    )
    );
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          likes={post.likes}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;