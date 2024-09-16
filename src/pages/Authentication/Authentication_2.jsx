import React, { useState } from 'react'
import "./Authentication.scss"

const Authentication = () => {
    const [emailValue, setEmailValue] = useState("");
    const [saleValue, setSaleValue] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [secondNameValue, setSecondNameValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    const [shippingAddressValue, setShippingAddressValue] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [postCodeValue, setPostCodeValue] = useState("");
    const [provinceValue, setProvinceValue] = useState("");
    const [countryValue, setCountryValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let data = Object.fromEntries(formData);

        console.log("data", data);
    }

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value)
    }

    const handleChangeName = (e) => {
        setNameValue(e.target.value)
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
                                        <input 
                                            type="text" 
                                            className='form-control' 
                                            placeholder='Email or mobile phone number' 
                                            name='email' 
                                            value={emailValue}
                                            onChange={handleChangeEmail}
                                        />
                                    </div>
                                    <div className="form__item">
                                        <label htmlFor="">
                                            <input type="checkbox" name='sale' value={saleValue}/>
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
                                            <input type="text" className='form-control' placeholder='Name' name='name' value={nameValue}  onChange={handleChangeName}/>
                                            <input type="text" className='form-control' placeholder='Second Name' name='second_name' value={secondNameValue}/>
                                        </div>
                                    </div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Address and number' name='address' value={addressValue}/>
                                    </div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Shipping note (optional)' name='shipping_address' value={shippingAddressValue}/>
                                    </div>
                                    <div className="form__item">
                                        <div className="grid-column-3">
                                            <input type="text" className='form-control' placeholder='City' name='city' value={cityValue}/>
                                            <input type="text" className='form-control' placeholder='Postal Code' name='post_code' value={postCodeValue}/>
                                            <select id="" className='form-control' name='province' value={provinceValue}>
                                                <option value="">Province</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form__item">
                                        <select id="" className='form-control' name='country' value={countryValue}>
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
                    <div>
                        <h2>Email: {emailValue}</h2>
                        <h2>Name: {nameValue}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication