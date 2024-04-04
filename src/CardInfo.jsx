// CartInfo.js
import React, { useContext } from 'react';
import { Shopping } from './App';

const CardInfo = () => {
  const { cartCount, totalCost } = useContext(Shopping);

  return (
    <div className='grid justify-end p-3 m-2 '>
      <p >Cart: {cartCount}</p>
      <p>Total: ${totalCost}</p>
    </div>
  );
};

export default CardInfo;
