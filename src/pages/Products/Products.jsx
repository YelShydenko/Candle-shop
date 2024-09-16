import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '@/components/ProductCard/ProductCard'
import "./Products.scss";
import { sortBy, filterByPrice } from '@/store/futures/productSlice';
import Sort from '@/components/Sort/Sort';
import Button from '@/components/Button/Button';

const Products = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1)

    const [itemPerPage] = useState(10)

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(9999999);

    const { products, filteredProducts } = useSelector(state => state.products);

    const [sortByValue, setSortByValue] = useState( {
        id: "1",
        label: "default",
        value: "default"
    })

    const [sortLabels, setSortLabels] = useState([
        {
            id: "1",
            label: "default",
            value: "default"
        },
        {
            id: "2",
            label: "Price: Low to High",
            value: "low-to-high"
        },
        {
            id: "3",
            label: "Price: High to Low",
            value: "high-to-low"
        },
    ])

    useEffect(()=>{
        dispatch(filterByPrice({minPrice, maxPrice}));
        dispatch(sortBy({value: sortByValue.value}));
    },[sortByValue, minPrice, maxPrice])
    

    const data = filteredProducts.length > 0 ? filteredProducts : products;

    const indexOfLastProduct = currentPage * itemPerPage; // 2 * 10 = 10
    const indexOfFirstProduct = indexOfLastProduct - itemPerPage; // 10 - 10 = 0
    const currentProductsOfPage = data.slice(indexOfFirstProduct, indexOfLastProduct); // 0 10

    const totalPage = Math.ceil(data.length / itemPerPage); // 18 / 10 = 2

    const handlePreviousPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if(currentPage < totalPage){
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className='products-page'>
            <div className="container">
                <div className="content">
                    <div className="content__header">
                        <h2>Products</h2>
                        <p>Order it for you or for your beloved ones </p>
                    </div>
                    <div className="content__body">
                        <div className='filters'>
                        <div className='filters__item'>
                                <label>Price:</label>

                                <input 
                                    type="text" 
                                    className='form-control' 
                                    name='minPrice'
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                />
                                -
                                <input 
                                    type="text" 
                                    className='form-control' 
                                    name='maxPrice'
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                />
                            </div>

                            <div className='filters__item'>
                                <label htmlFor="sort-by">Sort by:</label>
                                {/* <select name="sort-by" id="sort-by" onChange={(e) => setSortByValue(e.target.value)}>
                                    {
                                        sortLabels && sortLabels.map(item => <option key={item.id} value={item.value}>{item.label}</option>)
                                    }
                                </select> */}

                                <Sort labels={sortLabels} onSelect={setSortByValue} defaultSelect={sortByValue}/>
                            </div>
                        </div>

                        <div className="products-list">
                            {
                                currentProductsOfPage && currentProductsOfPage.map(product => <ProductCard key={product.id} product={product} />)
                            }
                        </div>

                        <div className="pagination">
                            <Button className="btn-default-color" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
                            <span>{currentPage} of {totalPage}</span>

                             {/* {
                                Array.from({length: totalPage}, (_, i) => i + 1).map(item => <span onClick={() => setCurrentPage(item)}>{item}</span>)
                             } */}

                            <Button className="btn-default-color" onClick={handleNextPage} disabled={currentPage === totalPage}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products