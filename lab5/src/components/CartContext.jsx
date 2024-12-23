import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...state, { ...action.payload, quantity: 1 }];
        }
        case 'REMOVE_FROM_CART': {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem.quantity > 1) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return state.filter(item => item.id !== action.payload.id);
        }
        case 'INIT_CART':
            return action.payload || [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart && Array.isArray(savedCart)) {
            dispatch({ type: 'INIT_CART', payload: savedCart });
        } else {
            localStorage.setItem('cart', JSON.stringify([]));
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
