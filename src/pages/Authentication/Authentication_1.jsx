import React, { useState } from 'react'
import "./Authentication.scss"

const Authentication = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let data = Object.fromEntries(formData);

        console.log("data", data);
    }

    return (
        <div className='authentication'>
            <div className="container">
                <div className="content">
                    <div>
                        <form className='form' onSubmit={handleSubmit}>
                            <div className="form__block">
                                <h2>Contact</h2>

                                <div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Email or mobile phone number' name='email' />
                                    </div>
                                    <div className="form__item">
                                        <label htmlFor="">
                                            <input type="checkbox" name='sale' />
                                            <span>Add me to Candleaf newsletter for a 10% discount</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form__block">
                                <h2>Shipping Address</h2>

                                <div>
                                    <div className="form__item">
                                        <div className="grid-column-2">
                                            <input type="text" className='form-control' placeholder='Name' name='name' />
                                            <input type="text" className='form-control' placeholder='Second Name' name='second_name' />
                                        </div>
                                    </div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Address and number' name='address_hello' />
                                    </div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Shipping note (optional)' name='shipping_address' />
                                    </div>
                                    <div className="form__item">
                                        <div className="grid-column-3">
                                            <input type="text" className='form-control' placeholder='City' name='city' />
                                            <input type="text" className='form-control' placeholder='Postal Code' name='post_code' />
                                            <select id="" className='form-control' name='province'>
                                                <option value="">Province</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form__item">
                                        <select id="" className='form-control' name='country'>
                                            <option value="">Country/Region</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='form__action'>
                                <button><a href="">Back to cart</a></button>

                                <button type='submit'>Go to shipping</button>
                            </div>
                        </form>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Authentication