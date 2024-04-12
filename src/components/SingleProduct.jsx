import React from 'react'
import { products } from '../data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const SingleProduct = () => {
  return (
    <div className="container p-3 d-flex flex-wrap gap-3 justify-content-evenly">
      {products.map(prod =>
        <Card 
          key={prod.id}
          style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.thumbnail} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{prod.category}</Card.Subtitle>
          <Card.Text>
            {prod.description}
          </Card.Text>
          <p>Price : ${prod.price}</p>
        </Card.Body>
          <Button variant="primary" className='mb-3 mx-auto w80'>Add to Cart</Button>
      </Card>
      )}
    </div>
  )
}
