import React from 'react'
import img from "../../assets/Group 1116606595.png"
import img1 from "../../assets/Wishlist.png"
import img2 from "../../assets/Cart1 with buy.png"
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div>
     <div className='flex justify-around items-center mt-[10px]'>
     <div className='ml-[20px]'>
        <img src={img} alt="" />
      </div>
      <div className='flex'> 
        <p className='mr-[30px]'>Home</p>
        <p className='mr-[30px]'>Contact</p>
        <p className='ml-[30px]'>About</p>
        <p className='ml-[30px]'>Sign Up</p>
      </div>
      <div className='flex'>
        <input className='border-[1px] border-[black] w-[200px] rounded-[3px] mr-[30px]' type="text"  placeholder='  What are you looking for?'/>
        <img className='mr-[20px]' src={img1} alt="" />
        <img className='mr-[20px]' src={img2} alt="" />
      </div>
     </div>

     <div className='w-[310px] ml-[500px] mt-[80px]'>


        <div className='ml-[10px]'>
            <h1 className='text-[30px] pt-[30px]'>Log in to Exclusive</h1>
            <p className='text-[18px] mt-[10px]'>Enter your details below</p>
        </div>
        <div className='mt-[30px] ml-[5px]'>
        <TextField
        style={{"marginTop":"20px","width":"300px"}}
          id="outlined-password-input"
          label="Email"
          type="Email"
          autoComplete="current-password"
        />
        <TextField
        style={{"marginTop":"20px","width":"300px"}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> 
        <p className='ml-[85px] text-[#DB4444] mt-[20px]'>Forget Password?</p>
        <button className='text-[white] bg-[#DB4444] w-[300px] h-[40px] rounded-[5px] mt-[20px]'>Log In</button>
        </div>
     </div>
    </div>
  )
}

export default Login
