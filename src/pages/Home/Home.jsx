import React from 'react'
import Header from '@/components/Header/Header'
import Products from '@/components/Products/Products'
import Reviews from '@/components/Reviews/Reviews'
import Popular from '@/components/Popular/Popular'

const Home = () => {
  return (
    <>
      <Header/>

      <Products/>

      <Reviews />

      <Popular/>
    </>
  )
}

export default Home