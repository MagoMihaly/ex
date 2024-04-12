import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'

export const Home = () => {
  return (
    <>
    <header className='text-center'>
      <h1 className='text-primary fw-bold p-2'>Welcome to our Online Store</h1>
      <p className='text-secondary'>Discover our featured products and find the perfect items for you.</p>
    </header>
    <main className='container mw800'>
      <h2 className='text-primary fst-italic'>Featured Products</h2>
      <FeaturedProducts />
    </main>
    <footer className='border-top mt-3 text-center mw800 mx-auto'>
      <p>2023 Our Online Store. All rights reserved.</p>
    </footer>
    </>
  )
}
