import React from 'react'
import { Link } from 'react-router-dom'
import phone from "../../assets/icons-phone.png"
import mail from "../../assets/icons-mail.png"
import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <div>
       <div className='flex ml-[80px] pt-[30px] pb-[50px]'>
          <Link to={"/"}>
           <h1 className='text-[grey]'>Home / </h1>
          </Link>
        <h1 className='ml-[5px]'>Contact</h1>
        </div>

        <div className='flex justify-around mt-[20px] pb-[50px]'>

          <div className='shadow-2xl px-[30px]'>
          <div>
            <div className='flex items-center pt-[20px]'>
            <img className='ml-[10px]' src={phone} alt="" />
            <h1 className='text-[22px] ml-[10px]'>Call To Us</h1>
            </div>
            <p className='mt-[10px] ml-[10px]'>We are available 24/7, 7 days a week.</p>
            <p className='mt-[10px] ml-[10px]'>Phone: +8801611112222</p>
          </div>

         <div>
         <div className='flex items-center mt-[40px]'>
            <img className='ml-[10px]' src={mail} alt="" />
            <h1 className='text-[22px] ml-[10px]'>Write To US</h1>
            </div>
            <p className='mt-[10px] px-[10px]'>Fill out our form and we will contact you within 24 hours.</p>
            <p className='mt-[10px] ml-[10px]'>Emails: customer@exclusive.com</p>
            <p className='mt-[10px] ml-[10px] pb-[20px]'>Emails: support@exclusive.com</p>
         </div>
          </div>

            <div className='shadow-2xl px-[30px] py-[30px]'>
             
             <div className='flex'>
             <TextField id="outlined-basic" label="Name" variant="outlined" />
             <TextField id="outlined-basic" label="Email" variant="outlined" />
             <TextField id="outlined-basic" label="Phone" variant="outlined" />
             </div>
             <div>
             <TextField style={{"width":"670px","marginTop":"50px"}}
          id="outlined-multiline-static"
          label="Massege"
          multiline
          rows={4}
          defaultValue="Write a massege"
        />
             </div>
         <button className='bg-[#DB4444] w-[200px] h-[35px] rounded-[5px] text-[white] mt-[10px] ml-[470px]'>Send Massage</button>
         
            </div>
          
        </div>
    </div>
  )
}

export default Contact
