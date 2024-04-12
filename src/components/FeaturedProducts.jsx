import React from 'react'
import {featuredProducts} from '../data.js'
import Card from 'react-bootstrap/Card';

export const FeaturedProducts = () => {
  return (
    <div className='container d-flex flex-wrap justify-content-evenly gap-3 p-3 bg-custom'>
      {featuredProducts.map(prod => 
        <Card 
          key={prod.id}
          style={{ width: '18rem' }}>
        <Card.Body className="text-center text-primary">
          <Card.Title>{prod.title}</Card.Title>
        </Card.Body>
        <Card.Img src={prod.thumbnail} alt="product" />
      </Card>
      )}
    </div>
  )
}
