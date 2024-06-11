import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reduce, incrence, delProduct } from '../../api/carzina/carzina';

function Card1({ id, productName, image, price, quantity }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-[10px] mt-[10px] w-[1200px]"
      style={{ width: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-[100px] w-[200px] items-center">
        <img src={image} alt={productName} className='object-cover h-[100px] w-[100%]' />
        <h3 className="mt-2 text-lg font-bold">{productName}</h3>
      </div>

      <p>{`$${price}`}</p>
      
      <div className="flex items-center">
        <button className='w-[30px] h-[30px] text-[30px]' onClick={() => dispatch(incrence(id))}>+</button>
        <span className="font-bold mt-[20px]">{`${quantity}`}</span>
        <button className='w-[30px] h-[30px] text-[30px]' onClick={() => dispatch(reduce(id))}>-</button>
      </div>
      <p> $ {quantity * price}</p>

      <img onClick={()=>dispatch(delProduct(id))} className='w-[35px] h-[35px]' src="data:image/png;base64,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" alt="" />
    </div>
  );
}

export default Card1;
