import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductsById } from '@/store/futures/productSlice';
import { editProduct } from '@/store/futures/productSlice';

const ProductEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { productId } = useParams(); // 1
    
    const product = useSelector(state => state.products.product)

    const { register, handleSubmit, setValue, watch, setError, formState: { errors }, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            title: "",
            price: 0,
            sale: 0,
            image: ""
        }
    });

    const onSubmit = data => {
        dispatch(editProduct({id:productId, ...data}))

        navigate(-1)
    };

    useEffect(() => {
        dispatch(fetchProductsById(productId));
    }, [productId])

    useEffect(() => { 
       if(product){
        setValue("title", product.title)
        setValue("price", product.price)
        setValue("sale", product.sale)
        setValue("image", product.image)
       }
    }, [product])

    return (
        <div className='product-edit'>
            <div className="container">
                <div className="content">
                    <div>
                        <form className='form' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form__block">
                                <h2>Edit Product</h2>

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

                                    <Button type='submit' className="btn-default-color">SAVE PRODUCT</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit