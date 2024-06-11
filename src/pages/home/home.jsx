import React, { useEffect, useState, useRef } from 'react';
import img from '../../assets/Frame 560.png';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../api/home/home';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Cart from "../../components/cart/Cart"
import img1 from "../../assets/Rectangle 18.png"
import img2 from "../../assets/Category-CellPhone.png"
import img3 from "../../assets/Category-Computer.png"
import img4 from "../../assets/Category-SmartWatch.png"
import img5 from "../../assets/Category-Camera.png"
import img6 from "../../assets/Category-Headphone.png"
import img7 from "../../assets/Category-Gamepad.png"
import img8 from "../../assets/Frame 694.png"
import img9 from "../../assets/Frame 601.png"
import img10 from "../../assets/ps5-slim-goedkope-playstation_large 1.png"
import img11 from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.png"
import img12 from "../../assets/Frame 707.png"
import img13 from "../../assets/Frame 706.png"
import img14 from "../../assets/Services (4).png"
import img15 from "../../assets/Services (5).png"
import img16 from "../../assets/Services (6).png"
import { Link } from 'react-router-dom';

const Home = () => {
  const [value, setValue] = React.useState(2);
  const data = useSelector((state) => state.home.data);
  const data2 = data.slice(0,4)
  const data3 = data.slice(0,8)
  const imgApi = "http://65.108.148.136:8072/images/";
  const dispatch = useDispatch();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const countdownDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; 
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    
    };
    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
    
  }, []);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <div className='flex justify-around mt-8'>
        <div className='mt-2'>
          <h1>Woman’s Fashion</h1>
          <h1 className='mt-2'>Men’s Fashion</h1>
          <h1 className='mt-2'>Electronics</h1>
          <h1 className='mt-2'>Home & Lifestyle</h1>
          <h1 className='mt-2'>Medicine</h1>
          <h1 className='mt-2'>Sports & Outdoor</h1>
          <h1 className='mt-2'>Baby’s & Toys</h1>
          <h1 className='mt-2'>Groceries & Pets</h1>
          <h1 className='mt-2'>Health & Beauty</h1>
        </div>
        <div>
          <img src={img} alt="Main display" />
        </div>
      </div>

      <div className="flex items-center gap-[100px] m-[50px] ">
      <div>
        <h1 className="text-[40px]">Flash Sales</h1>
        </div>
        <div className="flex flex-col items-start">

        <div className="flex gap-[24px] ">
            <h1>Days</h1>
            <h1>Hours</h1>
            <h1>Minutes</h1>
            <h1>Seconds</h1>
        </div>  

        <div className="flex items-center gap-[20px] font-bold text-[40px]">
          {`${timeLeft.days} : ${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
        </div>
        </div>
        </div>

      <div className='mt-[80px] px-[20px]'>
      <Swiper
          slidesPerView={4} // Number of slides to show
          pagination={false} // Disable pagination
          spaceBetween={10} // Space between slides in pixels
          modules={[Pagination]} // Importing the Pagination module
          className="mySwiper w-[100%]"
        >
        <div className='flex w-[100%] flex-wrap items-start gap-[35px] ml-[20px]'>
        {data.map((el)=>(
        <SwiperSlide>
       <Cart
       image={`${imgApi}${el.image}`}
       productName={el.productName}
       price={el.price}
       discountPrice={el.quantity}
       quantity={el.price + 72}
       id={el.id}
   />

        </SwiperSlide>
))}
      </div>
      </Swiper>
      <Link to={"products"}>
      <button className='ml-[550px] mt-[30px] w-[200px] h-[35px] rounded-[3px] bg-[#DB4444] text-[white]'>View All Products</button>
      </Link>
      </div>

      <div className='flex items-center m-[50px]'>
        <img src={img1} alt="" />
        <h1 className='ml-[10px] text-[#DB4444]'>Categories</h1>
      </div>
      <div className='ml-[50px] mt-[50px]'>
        <h1 className='text-[30px]'>Browse By Category</h1>
      </div>

      <div className='w-[100%] flex justify-around mt-[50px]'>

        <div className='border-[1px] border-[solid] border-[black] rounded-[5px] w-[10%] hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-[white]'>
          <img className='pt-[15px] pl-[40px]' src={img2} alt="" />
          <p className='text-center p-[10px]'>Phones</p>
        </div>
        <div className='border-[1px] border-[solid] border-[black] rounded-[5px] w-[10%] hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-[white]'>
          <img className='pt-[15px] pl-[40px]' src={img3} alt="" />
          <p className='text-center p-[10px]'>Computers</p>
        </div>
        <div className='border-[1px] border-[solid] border-[black] rounded-[5px] w-[10%] hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-[white]'>
          <img className='pt-[15px] pl-[40px]' src={img4} alt="" />
          <p className='text-center p-[10px]'>SmartWatch</p>
        </div>
        <div className='border-[1px] border-[solid] rounded-[5px] w-[10%] bg-[#DB4444] text-[white]'>
          <img className='pt-[15px] pl-[40px]' src={img5} alt="" />
          <p className='text-center p-[10px]'>Camera</p>
        </div>
        <div className='border-[1px] border-[solid] border-[black] rounded-[5px] w-[10%] hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-[white]'>
          <img className='pt-[15px] pl-[40px]' src={img6} alt="" />
          <p className='text-center p-[10px]'>HeadPhones</p>
        </div>
        <div className='border-[1px] border-[solid] border-[black] rounded-[5px] w-[10%] hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-[white]'>
          <img className='pt-[15px] pl-[40px]' src={img7} alt="" />
          <p className='text-center p-[10px]'>Gaming</p>
        </div>
      </div>

      <div className='flex items-center m-[50px]'>
        <img src={img1} alt="" />
        <h1 className='ml-[10px] text-[#DB4444]'>This Month</h1>
      </div>
      <div className='ml-[50px] mt-[50px] flex justify-between'>
        <h1 className='text-[30px]'>Best Selling Products</h1>
        <Link to={"products"}>
        <button className='w-[100px] mr-[50px] h-[35px] border-[1px] border-[#DB4444] bg-[#DB4444] rounded-[5px] text-[white]'>View All</button>
        </Link>
      </div>

       {/* getCategories */}

      <div className='flex w-[100%] flex-wrap items-start gap-[35px]'>
        {data2.map((el)=>(
       <Cart
       image={`${imgApi}${el.image}`}
       productName={el.productName}
       price={el.price}
       discountPrice={el.quantity}
       quantity={el.price + 72}
   />

))}

      </div>

       {/* getCategories */}

     <div className='flex justify-around bg-[black] text-[white] mt-[50px]'>
      <div className='px-[30px] py-[30px]'>
       <p className='text-[#00FF66] '>Categories</p>
       <h1 className='text-[55px]'>Enhance Your <br /> Music Experience</h1>
       <img className='mt-[20px]' src={img9} alt="" />
       <button className='w-[100px] mt-[30px] h-[35px] border-[1px] border-[#00FF66] bg-[#00FF66] rounded-[5px]'>Buy Now!</button>
      </div>
      <div>
        <img src={img8} alt="" />
      </div>
     </div>

     <div className='flex items-center m-[50px]'>
        <img src={img1} alt="" />
        <h1 className='ml-[10px] text-[#DB4444]'>Our Products</h1>
      </div>
      <div className='ml-[50px] mt-[50px]'>
        <h1 className='text-[30px]'>Explore Our Products</h1>
      </div>

      <div className='flex w-[100%] flex-wrap items-start gap-[35px]'>
        {data3.map((el)=>(
       <Cart
       image={`${imgApi}${el.image}`}
       productName={el.productName}
       price={el.price}
       discountPrice={el.quantity}
       quantity={el.price + 72}
   />

))}
  <Link to={"products"}>
        <button className='w-[150px] ml-[600px] h-[35px] border-[1px] border-[#DB4444] bg-[#DB4444] rounded-[5px] text-[white]'>View All</button>
        </Link>
      </div>


     <div className='flex items-center m-[50px]'>
        <img src={img1} alt="" />
        <h1 className='ml-[10px] text-[#DB4444]'>Featured</h1>
      </div>
      <div className='ml-[50px] mt-[50px]'>
        <h1 className='text-[30px]'>New Arrival</h1>
      </div>


    <div className='flex'>

    <div className='bg-[black] text-[white] w-[600px] mt-[50px] ml-[30px] h-[620px]'>
      <img className='w-[620px] h-[600px]' src={img10} alt="" />
      <div className='absolute text-[white] z-1 mt-[-120px] ml-[20px]'>
      <h1>PlayStation 5</h1>
       <p>Black and White version of <br /> the PS5 coming out on sale.</p>
       <p>Shop Now</p>
      </div>
     </div>

     <div className='mt-[50px] ml-[50px]'>

      <div className='bg-[black] w-[600px] h-[300px]'>
        <img className='w-[600px] h-[300px]' src={img11} alt="" />
        <div className='absolute text-[white] z-1 mt-[-120px] ml-[20px]'>
      <h1>Women’s Collections</h1>
       <p>Black and White version of <br /> the PS5 coming out on sale.</p>
       <p>Shop Now</p>
      </div>
      </div>

      <div className='flex mt-[30px]'>

        <div className='w-[280px] bg-[black]'>
          <img className='w-[280px]' src={img12} alt="" />
          <div className='absolute text-[white] z-1 mt-[-120px] ml-[10px]'>
      <h1>Speakers</h1>
       <p>Black and White version of <br /> the PS5 coming out on sale.</p>
       <p>Shop Now</p>
      </div>
        </div>

        <div className='w-[280px] bg-[black] ml-[30px]'>
          <img className='w-[280px]' src={img13} alt="" />
          <div className='absolute text-[white] z-1 mt-[-120px] ml-[10px]'>
      <h1>Perfume</h1>
       <p>Black and White version of <br /> the PS5 coming out on sale.</p>
       <p>Shop Now</p>
      </div>
        </div>
      </div>

     </div>

    </div>

    <div className='w-[100%] flex justify-around mt-[100px]'>

        <div className='w-[23%] shadow-2xl text-center'>
          <img className='ml-[110px] pt-[10px]' src={img14} alt="" />
          <h1 className='text-[23px] mt-[10px]'>FREE AND FAST DELIVERY</h1>
          <p className='mt-[10px] pb-[10px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='w-[23%] shadow-2xl text-center'>
          <img className='ml-[110px] pt-[10px]' src={img15} alt="" />
          <h1 className='text-[23px] mt-[10px]'>24/7 CUSTOMER SERVICE</h1>
          <p className='mt-[10px] pb-[10px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='w-[23%] shadow-2xl text-center'>
          <img className='ml-[110px] pt-[10px]' src={img16} alt="" />
          <h1 className='text-[23px] mt-[10px]'>MONEY BACK GUARANTEE</h1>
          <p className='mt-[10px] pb-[10px]'>Free delivery for all orders over $140</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
