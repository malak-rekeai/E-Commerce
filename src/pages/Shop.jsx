import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import { Offer } from '../components/Offer/Offer'
import NewCollection from '../components/new_collection/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter  />
    </div>
  )
}

export default Shop