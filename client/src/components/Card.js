import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function CustomCard({ slug, title, content, genre, date }) {
  return (
    <Link to={`/post/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '100%', marginBottom: '20px' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>{genre}</Card.Text>
          {/* Uncomment if you want to display content */}
          {/* <Card.Text>{content}</Card.Text> */}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CustomCard;
