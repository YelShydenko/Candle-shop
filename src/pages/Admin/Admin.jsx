import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '@/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '@/store/futures/productSlice';
import "./Admin.scss"
import { Link } from 'react-router-dom';


const Admin = () => {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, setError, formState: { errors }, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            title: "",
            price: 0,
            sale: 0,
            image: ""
        }
    });

    const onSubmit = data => {
        dispatch(addProduct(data))

        reset();
    };

    const handleRemove = (productId) => {
        dispatch(removeProduct(productId))
    }

    return (
        <div className='admin'>
            <div className="container">
                <div className="content">
                    <div>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form__block">
                                <h2>Add Product</h2>

                                <div>
                                    <div className="form__item">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.title ? "form-control-danger" : ""}`}
                                            placeholder='Enter product title'
                                            {...register("title", { required: "Title is required", minLength: 8 })}
                                        />

                                        {errors.title && <span className='alert-danger'>{errors.title.message}</span>}
                                    </div>

                                    <div className="form__item">
                                        <input
                                            type="number"
                                            className={`form-control ${errors.price ? "form-control-danger" : ""}`}
                                            placeholder='Enter product price'
                                            {...register("price", { required: "Price is required", min: 1 })}
                                        />

                                        {errors.price && <span className='alert-danger'>{errors.price.message}</span>}
                                    </div>

                                    <div className="form__item">
                                        <input
                                            type="number"
                                            className={`form-control ${errors.sale ? "form-control-danger" : ""}`}
                                            placeholder='Enter product sale'
                                            {...register("sale", { required: "Sale is required" })}
                                        />

                                        {errors.sale && <span className='alert-danger'>{errors.sale.message}</span>}
                                    </div>

                                    <div className="form__item">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.image ? "form-control-danger" : ""}`}
                                            placeholder='Enter product image'
                                            {...register("image", { required: "Image is required" })}
                                        />

                                        {errors.image && <span className='alert-danger'>{errors.image.message}</span>}
                                    </div>

                                    <Button type='submit' className="btn-default-color">ADD PRODUCT</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="container">
                <table className='table-admin'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Sale</th>
                            <th></th>
                        </tr>
                    </thead>
                    {/* import.meta.env.BASE_URL */}
                    <tbody>
                        {
                            products && products.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><div><img src={`${import.meta.env.APP_WEB_URL}${item.image}`} alt="" /></div></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}$</td>
                                    <td>{item.sale}%</td>
                                    <td>
                                        <Button className="btn-default-color "><Link to={`/admin/product/edit/${item.id}`}>Edit</Link></Button>
                                        <Button className="btn-danger-color" onClick={()=>handleRemove(item.id)}>Remove</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin