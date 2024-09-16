import React, { useState } from 'react'
import "./Authentication.scss"

const Authentication = () => {
    const [form, setForm] = useState({
        email: "",
        sale: false,
        name: "",
        second_name: "",
        address: "",
        shipping_address: "",
        city: "",
        post_code: "",
        province: "1",
        country: "1"
    });

    const handleChangeInput = (e) => {
        setForm(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    return (
        <div className='authentication'>
            <div className="container">
                <div className="content">
                    <div>
                        <form className='form'>
                            <div className="form__block">
                                <h2>Contact</h2>

                                <div>
                                    <div className="form__item">
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Email or mobile phone number'
                                            name='email'
                                            value={form.email}
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                    <div className="form__item">
                                        <label htmlFor="">
                                            <input type="checkbox" name='sale' value={form.sale} />
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
                                            <input type="text" className='form-control' placeholder='Name' name='name' value={form.name} onChange={handleChangeInput}/>
                                            <input type="text" className='form-control' placeholder='Second Name' name='second_name' value={form.second_name} onChange={handleChangeInput}/>
                                        </div>
                                    </div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Address and number' name='address' value={form.address} onChange={handleChangeInput}/>
                                    </div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Shipping note (optional)' name='shipping_address' value={form.shipping_address} onChange={handleChangeInput}/>
                                    </div>
                                    <div className="form__item">
                                        <div className="grid-column-3">
                                            <input type="text" className='form-control' placeholder='City' name='city' value={form.city} onChange={handleChangeInput}/>
                                            <input type="text" className='form-control' placeholder='Postal Code' name='post_code' value={form.post_code} onChange={handleChangeInput}/>
                                            <select id="" className='form-control' name='province' value={form.province} onChange={handleChangeInput}>
                                                <option value="0">Province</option>
                                                <option value="1">Alabama</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form__item">
                                        <select id="" className='form-control' name='country' value={form.country} onChange={handleChangeInput}>
                                            <option value="0">Country/Region</option>
                                            <option value="1">USA</option>
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
                    <div>
                        <h2>Email: {form.email}</h2>
                        <h2>Name: {form.name}</h2>
                        <h2>Second name: {form.second_name}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication