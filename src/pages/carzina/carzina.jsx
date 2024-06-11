import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCarz, removeAll } from '../../api/carzina/carzina';
import Card1 from '../../components/cart/Card1';

const Carzina = () => {
  const imgApi = "http://65.108.148.136:8072/images/";
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCarz());
    }, []);
  const data = useSelector((state) => state.carzina.data);

    const handleUpdateCart = () => {
        // Logic to update the cart
    };

    const handleApplyCoupon = () => {
        // Logic to apply a coupon code
    };

    const subtotal = data.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <div className='flex ml-[80px] pt -[30px] pb-[50px]'>
                <Link to={"/"}>
                    <h1 className='text-[grey]'>Home / </h1>
                </Link>
                <h1 className='ml-[5px]'>Cart</h1>
            </div>

            <div className='w-[80%] mx-auto'>
                <div className='flex w-[100%] flex-wrap items-start gap-[35px]'>
                    {data?.map((el) => (
                    
                        <Card1
                            key={el.id}
                            image={`${imgApi}${el.product.image}`}
                            productName={el.product.productName}
                            price={el.product.price}
                            discountPrice={el.product.discountPrice}
                            quantity={el.quantity}
                            id={el.id}
                        />
                    ))}
                </div>

                <div className='flex justify-between mt-10'>
                    <button className='bg-gray-200 p-2' onClick={handleUpdateCart}>Update Cart</button>
                    <button className='bg-red-200 p-2' onClick={()=>dispatch(removeAll(el.id))}>Remove all</button>
                </div>

                <div className='mt-10'>
                    <input type='text' placeholder='Coupon Code' className='border p-2' />
                    <button className='bg-red-200 p-2 ml-2' onClick={handleApplyCoupon}>Apply</button>
                </div>

                <div className='border p-5 mt-10'>
                    <h2 className='text-2xl'>Cart Total</h2>
                    <p className='mt-2'>Subtotal: ${subtotal}</p>
                    <p className='mt-2'>Shipping: Free</p>
                    <p className='mt-2 text-xl'>Total: ${subtotal}</p>
                    <button className='bg-red-500 text-white p-2 mt-5'>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Carzina;
