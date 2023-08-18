import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleClearCart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='w-96 text-2xl cart-color p-5 rounded-lg'>
            <h4 className='text-center text-3xl font-bold mb-5'>Order Summary</h4>
            <p className='mb-2.5'>Selected Items: {quantity}</p>
            <p className='mb-2.5'>Total Price: ${totalPrice}</p>
            <p className='mb-2.5'>Shipping: ${totalShipping}</p>
            <p className='mb-2.5'>Tax: ${tax.toFixed(2)}</p>
            <h6 className='font-bold'>Grand Total: ${grandTotal.toFixed(2)} </h6>
            <button onClick={handleClearCart} className='btn btn-error text-white block mx-auto mt-10'>
                <span>Clear Cart </span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Cart;