import React from 'react';
import logo from './logo.svg';
import data from './data';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
     <div className="brand">
       <a href="index.html" >Sport Laden</a>
     </div>
     <div className="header-links">
       <a className="cart" href="Cart.html">Cart</a>
       <a href="Signin.html">Sign In</a>
     </div>
    </header>
    <main className="main">
      <div className="content">
        <Router path="/products/:id" component={ProductScreen} /> 
        <Router path="/" exact={true} component={HomeScreen} />
        <ul className="products">
          
          { 
            data.products.map(product =>

        <li >
          <div className="product">
            <img className="product-image" src={product.image} alt="product-image" />
            <div className="product-name">
              <a href="prod.html">{product.name}</a>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">CHF{product.price}</div>
            <div className="product-rating">4 {product.rating} stars {product.numReviews}</div>

             
          </div>
        </li>
           )}
      </ul>
      </div>
      
    </main>
    <footer className="footer">
      All right reserved - Sports Laden
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
