import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import "./Cart.scss"
import { useDispatch, useSelector } from 'react-redux'
import { decrementProduct, incrementProduct, removeProductFromCart } from '../../store/futures/productSlice'

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.products.cart); // []

  return (
    <div className="cart">
      <div className='container'>

        <div className="content">
          <table className='table'>
            <thead>
              <tr>
                <th colSpan={2}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {
                cart && cart.map(item => (
                  <tr className='cart-item'>
                    <td className='table-w-10'>
                      <div className='cart-item__image'>
                        <img src={`../../${item.image}`} alt="" />
                      </div>
                    </td>
                    <td className='table-w-30'>
                      <div className='cart-item__block'>
                        <h2 className='cart-item__title'>{item.title}</h2>
                        <button className='btn' onClick={() => dispatch(removeProductFromCart(item.id))}>Remove</button>
                      </div>
                    </td>
                    <td>$ {item.price}</td>
  
                    <td className='cart-item__actions'>
                      <div className='quantity'>
                        <button onClick={() => dispatch(decrementProduct(item.id))}><FaMinus className='quantity__icon' /></button>
                        <span>{item.count}</span>
                        <button onClick={() => dispatch(incrementProduct(item.id))}><FaPlus className='quantity__icon' /></button>
                      </div>
                    </td>
    
                    <td className='cart-item__total'>$ {item.price * item.count}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart