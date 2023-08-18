import React from 'react';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(props.product)} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;