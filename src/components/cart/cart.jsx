import React, { useState } from 'react';
import { add } from '../../api/carzina/carzina';
import { useDispatch } from 'react-redux';


function Cart({ id, productName, image, price, discountPrice, quantity }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch()
  return (
    <div
      className="p-4 bg-gray-100 rounded-lg shadow-md mb-[50px] mt-[50px] w-[300px]"
      style={{ width: '300px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={image} alt={productName} className='object-cover h-[200px] w-[100%]' />
        <span className="absolute px-2 text-white bg-red-500 rounded top-2 left-2">
          {`-${discountPrice}%`}
        </span>
        {isHovered && (
          <button onClick={()=>dispatch(add(id))} className="absolute px-4 py-2 text-white transform -translate-x-1/2 bg-red-500 rounded bottom-[-110px] left-1/2 w-[265px]">
            Add to Cart
          </button>
        )}
      </div>
      
      <h3 className="mt-2 text-lg font-bold">{productName}</h3>
      <div className="flex items-center justify-between">
        <span className="font-bold text-red-500">{`$${price}`}</span>
        <span className="text-gray-500 line-through">{`$${quantity}`}</span>
      </div>
      <div className="flex items-center mt-3 space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < Math.round(price / 140) ? 'text-yellow-500' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.4 2.8 1-5.8L1.8 7l5.9-.9L10 1l2.3 5.1 5.9.9-4.3 4.2 1 5.8z" />
          </svg>
        ))}
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Cart;