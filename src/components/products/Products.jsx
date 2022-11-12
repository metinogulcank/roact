import React from 'react'
import { popularProduct } from '../../data'
import Product from './Product'
import './products.css'

const Products = () => {
  return (
    <div className='products_container'>
      {popularProduct.map((item) => (
        <Product item={ item } key={item.id} />
      ))}
    </div>
  )
}

export default Products
