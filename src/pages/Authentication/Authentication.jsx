import React, { useEffect, useState } from 'react'
import "./Authentication.scss"
import { useForm } from 'react-hook-form';
import Test from './Test';

const Authentication = () => {
    const { register, handleSubmit, watch, setError, formState: { errors }, reset  } = useForm({
        defaultValues: {
            email: "admin@gmail.com",
            name: "John",
            second_name: "Done",
            address: "2425 Wilson Boulevard",
            shipping_address: "",
            post_code: 10236,
            city: "Alabama",
            country: "1",
            province: "1"
        }
    });

    const onSubmit = data => {
        reset();
    };

    // console.log(watch("email"));

    useEffect(()=>{
        setError("address", { type: 'custom', message: 'Address is not correct!' })
    },[])

    console.log(errors)

    return (
        <div className='authentication'>
            <div className="container">
                <div className="content">
                    <div>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form__block">
                                <h2>Contact</h2>

                                <div>
                                    <div className="form__item">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.email ? "form-control-danger" : ""}`}
                                            placeholder='Email or mobile phone number'
                                            {...register("email", {  required: "Email Address is required" })}
                                        />

                                        {errors.email && <span className='alert-danger'>{errors.email.message}</span>}
                                    </div>
                                    <div className="form__item">
                                        <label htmlFor="">
                                            <input type="checkbox" {...register("sale")} />
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
                                            <input 
                                                type="text" 
                                                className={`form-control ${errors.name ? "form-control-danger" : ""}`}
                                                placeholder='Name' {...register("name", {maxLength: 8})} 
                                            />
                                            <input type="text" className='form-control' placeholder='Second Name' {...register("second_name")} />
                                        </div>
                                        {errors.name && <span className='alert-danger'>This field maxLength is 8</span>}
                                    </div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Address and number' {...register("address")} />
                                        {errors.address && <span className='alert-danger'>{errors.address.message}</span>}
                                    </div>
                                    <div className="form__item">
                                        <input type="text" className='form-control' placeholder='Shipping note (optional)' {...register("shipping_address")} />
                                    </div>
                                    <div className="form__item">
                                        <div className="grid-column-3">
                                            <input type="text" className='form-control' placeholder='City' name='city' {...register("city")} />
                                            <input type="text" className='form-control' placeholder='Postal Code' {...register("post_code")} />
                                            <select id="" className='form-control' name='province' {...register("province")}>
                                                <option value="0">Province</option>
                                                <option value="1">Alabama</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form__item">
                                        <select id="" className='form-control' name='country' {...register("country")}>
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
                        <Test />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication