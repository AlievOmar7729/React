import React from 'react';
import { useCart } from './CartContext';



const ProductList = ({products}) => {
    const { dispatch } = useCart();

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div className="product-list">
            <h2>Товари</h2>
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">{product.price} грн.</div>
                    <div className="product-action">
                        <button onClick={() => addToCart(product)}>Додати до кошика</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
