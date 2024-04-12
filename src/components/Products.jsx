import React from 'react'
import { SingleProduct } from './SingleProduct'

export const Products = () => {
  return (
    <section className="container shadow p-3">
      <h3>Our Products</h3>
      <div className="divider bg-custom"></div>
      <SingleProduct />
    </section>
  )
}

