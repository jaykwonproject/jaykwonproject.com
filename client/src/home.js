import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CustomCard from './components/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Home({ isNavbarCollapsed, setIsNavbarCollapsed }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/getPosts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      const filteredPosts = data.filter(post => post.date && post.title);
      setPosts(filteredPosts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const renderPlaceholders = () => (
    <Row className="mt-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <Col key={index} xs={12} md={6} lg={4}>
          <div className="card-placeholder">
            <ProgressBar animated now={100} />
          </div>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="App">
      <NavBar isCollapsed={isNavbarCollapsed} setIsCollapsed={setIsNavbarCollapsed} />
      <div className="body">
      <div className="container">
          <div className="row mt-5">
            <h2 className="home-intro-h">HELLO,</h2>
            <p className="home-intro-p">
              I am HyukJoo Kwon, web developer from Seoul, South Korea. I have rich experience
              in website design, building, customization.
            </p>
            <p><bold>🚧website under construction🚧</bold></p>
          </div>
          {loading ? (
            renderPlaceholders()
          ) : (
            <Row className="mt-5">
              {posts.slice(0, 6).map(post => (
                <Col key={post._id} xs={12} md={6} lg={4}>
                  <CustomCard
                    slug={post.slug}
                    title={post.title}
                    content={post.description}
                    genre={post.genre}
                    date={post.date}
                  />
                </Col>
              ))}
            </Row>
          )}
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="primary" href="/study">View All Posts</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
