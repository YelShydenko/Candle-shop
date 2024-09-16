import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import "./Popular.scss";
import { useSelector } from 'react-redux';

const Popular = () => {
    const { products } = useSelector(state => state.products)

    const getRandomProducts = (products, count) => {
        return products && products.length > 0 ? [...products].sort(() => 0.5 - Math.random()).slice(0, count) : [];
    }

    const productsRandom = getRandomProducts(products, 4);

    return (
        <div className='popular'>
            <div className="container">
                <div className="content">
                    <div className="content__header">
                        <h2>Popular</h2>
                        <p>Our top selling product that you may like </p>
                    </div>
                    <div className="content__body">
                        <div className="products-list">
                            {
                                productsRandom && productsRandom.map(product => <ProductCard key={product.id} product={product} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular