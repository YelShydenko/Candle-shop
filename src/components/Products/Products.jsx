import React from 'react';
import "./Products.scss";
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';

const Products = () => {
    const { products } = useSelector(state => state.products)

    return (
        <div className='products'>
            <div className="container">
                <div className="content">
                    <div className="content__header">
                        <h2>Products</h2>
                        <p>Order it for you or for your beloved ones </p>
                    </div>
                    <div className="content__body">
                        <div className="products-list">
                            {
                                products && products.slice(0, 8).map(product => <ProductCard key={product.id} product={product} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products