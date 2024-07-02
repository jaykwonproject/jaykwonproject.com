import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';

import NavBar from './components/NavBar';

function BlogPost({ isNavbarCollapsed, setIsNavbarCollapsed }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/getPost/${id}`); // Ensure your backend can handle this route
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const data = await response.json();
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching post:', error);
      setLoading(false); // Also stop loading state if there's an error
    }
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
        </Spinner>
      </Container>
    );
  }

  if (!post) {
    return <Container className="text-center mt-5">Post not found</Container>;
  }

  return ( 
  <div className="App">
      <NavBar isCollapsed={isNavbarCollapsed} setIsCollapsed={setIsNavbarCollapsed} />
      <Container className="mt-5">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.genre}</p>
      <p>{post.description}</p>
    </Container>
      </div>
    
  );
}

export default BlogPost;
