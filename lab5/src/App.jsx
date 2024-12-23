import React from 'react';
import { CartProvider } from './components/CartContext.jsx';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import './App.css';

const products = [
    { id: 1, name: 'Samsung Galaxy A25', price: 26000 },
    { id: 2, name: 'Xiaomi Redmi Note 13 Pro', price: 12000 },
    { id: 3, name: 'Samsung Galaxy M35 5G', price: 11000 },
];

const App = () => {
    return (
        <CartProvider>
            <div className="app-container">
                <ProductList products={products} />
                <Cart />
            </div>
        </CartProvider>
    );
};

export default App;
