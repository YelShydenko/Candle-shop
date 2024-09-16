import React from 'react'
import { useForm } from 'react-hook-form'

const Test = () => {

    const { register, handleSubmit, watch, setError, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="form__item">
                <input 
                    type="text" 
                    {...register("username", { required: "The username field is required!" })} 
                    className={`form-control ${errors.username ? "form-control-danger" : ""}`} 
                />

                {errors.username && <span className='alert-danger'>{errors.username.message}</span>}
            </div>
            <div className="form__item">
                <input 
                    type="text" 
                    {...register("surname", { required: "The surname field is required!" })} 
                    className={`form-control ${errors.surname ? "form-control-danger" : ""}`} 
                />

                {errors.surname && <span className='alert-danger'>{errors.surname.message}</span>}
            </div>
            <div className="form__item">
                <input 
                    type="number" 
                    {...register("age", { min: { value: 18, message: "The field should be larger 18!" } })} 
                    className={`form-control ${errors.age ? "form-control-danger" : ""}`}  
                />
                {errors.age && <span className='alert-danger'>{errors.age.message}</span>}
            </div>
            <div className="form__item">
                <input 
                    type="number" 
                    {...register("experiance", { min: { value: 4, message: "The field should be larger 4!" } })} 
                    className={`form-control ${errors.experiance ? "form-control-danger" : ""}`}  
                />
                  {errors.experiance && <span className='alert-danger'>{errors.experiance.message}</span>}
            </div>

            <button type='submit' className='btn'>Check Credit</button>
        </form>
    )
}

export default Test