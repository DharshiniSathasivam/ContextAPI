import React, { createContext, useContext, useState } from 'react';
import './App.css';
import CardInfo from './Components/CardInfo';


export const Shopping = createContext(null);

export default function App() {
  const data = [
    {
      id: 1,
      title: 'iPhone 15 128 GB',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      images: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKUmj-SS7mhxpZPHt5teS6ZEqGEdMRvt5Or3M7PG6oxnbW78I-2RkzGrr6c0vT4N7koXtMlE5d5imgKZ62yDg-duODMxDOz0Phu3bAt1Wlwn-b44pvZOujbdiP5E1JAKs4hkP6Pw&usqp=CAc',
    },
  ];

  const [Product, setProduct] = useState(data[0]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setTotalCost(totalCost + Product.price);
  };

  return (
    <div className="App">
      <Shopping.Provider value={{ Product, setProduct, cartCount, totalCost }}>
       <CardInfo/>
        <Card addToCart={addToCart} />
      </Shopping.Provider>
    </div>
  );
}

function Card({ addToCart }) {
  const { Product } = useContext(Shopping);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={Product.images} alt="Product Thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Product.title}</h2>
        <p>{Product.description}</p>
        <p>Price: ${Product.price}</p>
        <p>Stock: {Product.stock}</p>
        <p>Brand: {Product.brand}</p>
        <p>Category: {Product.category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
