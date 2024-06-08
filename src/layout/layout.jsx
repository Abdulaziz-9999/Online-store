import React from "react";
import { Link, Outlet } from "react-router-dom";
import login from "../assets/Group 1116606595.png";
import img from "../assets/Wishlist.png"
import img1 from "../assets/Cart1 with buy.png"
import img2 from "../assets/Frame 741.png"

function Layout() {
  return (
    <div className="">
      <div className="flex justify-around items-center mt-[20px]">
        <div className="ml-[20px]">
          <img src={login} alt="Login" />
        </div>
        <div className="flex ml-[50px]">
          <Link to="/">
            <h1 className="mr-[20px]">Home</h1>
          </Link>
          <Link to="/contact">
            <h1 className="mr-[20px]">Contact</h1>
          </Link>
          <Link to="/about">
            <h1 className="ml-[10px]">About</h1>
          </Link>
          <Link to="/registration">
            <h1 className="ml-[20px]">Sign Up</h1>
          </Link>
          <Link to="/login">
            <h1 className="ml-[20px]">Log In</h1>
          </Link>
        </div>
        <div className="flex items-center ml-[50px]">
          <input className="w-[200px] h-[30px] rounded-[3px] border" type="text" placeholder=" What are you looking for?"/>
        <img className="ml-[20px]" src={img} alt="" />
         <img className="ml-[20px]" src={img1} alt="" />
        </div>
        <div>
        </div>
      </div>
      <Outlet />
      <div className="bg-[black] text-[white] mt-[150px] h-[270px]">
        <div className="flex justify-around">

          <div>
            <h1 className="pt-[20px] text-[22px]">Exclusive</h1>
            <p className="pt-[10px]">Subscribe</p>
            <p className="pt-[10px]">Get 10% off your first order</p>
            <input className="border-[1px] border-[white] bg-[black] mt-[10px] mb-[20px]" type="text" placeholder=" Enter your email" />
          </div>
          <div>
            <h1 className="pt-[20px] text-[22px]">Support</h1>
            <p className="pt-[10px]">111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
            <p className="pt-[10px]">exclusive@gmail.com</p>
            <p className="pt-[10px]">+88015-88888-9999</p>
          </div>
          <div>
            <h1 className="pt-[20px] text-[22px]">Account</h1>
            <p className="pt-[10px]">My Account</p>
            <p className="pt-[10px]">Cart</p>
            <p className="pt-[10px]">Wishlist</p>
            <p className="pt-[10px]">Shop</p>
          </div>
          <div>
            <h1 className="pt-[20px] text-[22px]">Quick Link</h1>
            <p className="pt-[10px]">Privacy Policy</p>
            <p className="pt-[10px]">Terms Of Use</p>
            <p className="pt-[10px]">FAQ</p>
            <p className="pt-[10px]">Contact</p>
          </div>
          <div>
            <h1 className="pt-[20px] text-[22px]">Social </h1>
             <img className="pt-[20px]" src={img2} alt="" />
          </div>
        </div>
        <div>
          <p className="text-[grey] flex justify-center pt-[40px]">Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Layout;
