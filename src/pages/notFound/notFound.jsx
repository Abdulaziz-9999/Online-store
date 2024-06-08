import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    let navigate = useNavigate()
    
    function Home(){
        navigate("/")
    }
  return (
    <div>
      <div className='text-center mt-[100px]'>
        <h1 className='text-[100px]'>404 Not Found</h1>
        <p className='mt-[20px]'>Your visited page not found. You may go home page.</p>
        <button onClick={()=>Home()} className='text-[white] bg-[#DB4444] w-[320px] h-[40px] rounded-[5px] mt-[30px]'>Back to home page</button>
      </div>
    </div>
  )
}

export default NotFound
