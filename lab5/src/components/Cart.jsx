import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cart, dispatch } = useCart();

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    return (
        <div className="cart">
            <h2>Кошик</h2>
            {cart.length === 0 ? (
                <p>Ваш кошик пустий</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <span>{item.name}</span>
                        <span>{item.price * item.quantity} грн.</span>
                        <span>Кількість: {item.quantity}</span>
                        <button onClick={() => removeFromCart(item)}>Видалити с кошика</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
