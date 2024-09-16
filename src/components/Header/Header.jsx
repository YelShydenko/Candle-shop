import React from 'react'
import Button from '@/components/Button/Button'
import "./Header.scss"

const Header = () => {
  return (
    <header className='header'>
        <img src="./images/bg-image.jpg" alt="" className='header__image'/>

        <div className="header__content">
           <div>
              <span>🌱</span>
              <h2>The nature candle</h2>
              <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
           </div>

           <Button className='btn-default-size btn-default-color'>Discovery our collection</Button>
        </div>
    </header>
  )
}

export default Header