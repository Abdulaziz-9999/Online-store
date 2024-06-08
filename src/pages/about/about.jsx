import React from 'react'
import img from "../../assets/Side Image.png"
import img1 from "../../assets/Services.png"
import img2 from "../../assets/Services (1).png"
import img3 from "../../assets/Services (2).png"
import img4 from "../../assets/Services (3).png"
import img5 from "../../assets/Frame 874.png"
import img6 from "../../assets/Frame 875.png"
import img7 from "../../assets/Frame 876.png"
import img8 from "../../assets/Frame 877.png"
import img9 from "../../assets/Frame 883.png"
import img10 from "../../assets/Services (4).png"
import img11 from "../../assets/Services (5).png"
import img12 from "../../assets/Services (6).png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className='flex ml-[80px] pt-[30px] pb-[50px]'>
          <Link to={"/"}>
           <h1 className='text-[grey]'>Home / </h1>
          </Link>
        <h1 className='ml-[5px]'>About</h1>
        </div>
      <div className='flex justify-around w-[100%] mt-[20px]'>
        <div className='w-[35%] mt-[50px]'>
          <h1 className='text-[35px]'>Our Story</h1>
          <p className='mt-[30px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p> <br />
          <p className='mt-[10px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>

      <div className='w-[100%] flex justify-around mt-[150px]'>

      <div className='w-[20%] border-[1px] border-[black] text-center rounded-[3px] hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-[white] shadow-2xl'>
        <img className='pt-[10px] ml-[90px]' src={img1} alt="" />
        <h1 className='text-[25px] mt-[10px]'>10.5k </h1>
        <p className='mt-[10px] pb-[10px]'>Sallers active our site</p>
      </div>
      <div className='w-[20%] border-[1px] bg-[#DB4444] border-[#DB4444] text-[white] text-center rounded-[3px] hover:border-[black] hover:bg-[white] hover:text-[black] shadow-2xl'>
        <img className='pt-[10px] ml-[90px]' src={img2} alt="" />
        <h1 className='text-[25px] mt-[10px]'>33k</h1>
        <p className='mt-[10px] pb-[10px]'>Mopnthly Produduct Sale</p>
      </div>
      <div className='w-[20%] border-[1px] border-[black] text-center rounded-[3px] hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-[white] shadow-2xl'>
        <img className='pt-[10px] ml-[90px]' src={img3} alt="" />
        <h1 className='text-[25px] mt-[10px]'>45.5k</h1>
        <p className='mt-[10px] pb-[10px]'>Customer active in our site</p>
      </div>
      <div className='w-[20%] border-[1px] border-[black] text-center rounded-[3px] hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-[white] shadow-2xl'>
        <img className='pt-[10px] ml-[90px]' src={img4} alt="" />
        <h1 className='text-[25px] mt-[10px]'>25k</h1>
        <p className='mt-[10px] pb-[10px]'>Anual gross sale in our site</p>
      </div>
      </div>

      <div className='w-[100%] flex justify-around mt-[150px]'>
        
        <div className='w-[30%]'>
          <img src={img5} alt="" />
          <h1 className='text-[25px] mt-[10px]'>Tom Cruise</h1>
          <p className='mt-[10px]'>Founder & Chairman</p>
          <img className='mt-[10px]' src={img8} alt="" />
        </div>
        <div className='w-[30%]'>
          <img src={img6} alt="" />
          <h1 className='text-[25px] mt-[10px]'>Emma Watson</h1>
          <p className='mt-[10px]'>Managing Director</p>
          <img className='mt-[10px]' src={img8} alt="" />
        </div>
        <div className='w-[30%]'>
          <img src={img7} alt="" />
          <h1 className='text-[25px] mt-[10px]'>Will Smith</h1>
          <p className='mt-[10px]'>Product Designer</p>
          <img className='mt-[10px]' src={img8} alt="" />
        </div>
      </div>

      <div className='flex justify-center mt-[50px]'>
         <img src={img9} alt="" />
      </div>

      <div className='w-[100%] flex justify-around mt-[100px]'>

        <div className='w-[23%] shadow-2xl text-center'>
          <img className='ml-[110px] pt-[10px]' src={img10} alt="" />
          <h1 className='text-[23px] mt-[10px]'>FREE AND FAST DELIVERY</h1>
          <p className='mt-[10px] pb-[10px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='w-[23%] shadow-2xl text-center'>
          <img className='ml-[110px] pt-[10px]' src={img11} alt="" />
          <h1 className='text-[23px] mt-[10px]'>24/7 CUSTOMER SERVICE</h1>
          <p className='mt-[10px] pb-[10px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='w-[23%] shadow-2xl text-center'>
          <img className='ml-[110px] pt-[10px]' src={img12} alt="" />
          <h1 className='text-[23px] mt-[10px]'>MONEY BACK GUARANTEE</h1>
          <p className='mt-[10px] pb-[10px]'>Free delivery for all orders over $140</p>
        </div>
      </div>
    </div>
  )
}

export default About
