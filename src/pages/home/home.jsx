import React from 'react'
import img from "../../assets/Frame 560.png"
import Cart from '../../components/cart/cart'

const Home = () => {
  return (
    <div>
      <div>
        

       <div className='flex justify-around mt-[30px]'>
       <div className='mt-[10px]'>
          <h1>Woman’s Fashion</h1>
          <h1 className='mt-[10px]'>Men’s Fashion</h1>
          <h1 className='mt-[10px]'>Electronics</h1>
          <h1 className='mt-[10px]'>Home & Lifestyle</h1>
          <h1 className='mt-[10px]'>Medicine</h1>
          <h1 className='mt-[10px]'>Sports & Outdoor</h1>
          <h1 className='mt-[10px]'>Baby’s & Toys</h1>
          <h1 className='mt-[10px]'>Groceries & Pets</h1>
          <h1 className='mt-[10px]'>Health & Beauty</h1>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
       </div>
       <Cart/>
      </div>
    </div>
  )
}

export default Home
