import React from "react";
import { axiosRequest } from "../../utils/axiosRequest";
import { saveToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";
import img from "../../assets/Icon-Google.png"

const Registration = () => {
  let navigate = useNavigate();
  function Log(){
    navigate("/login")
  }

  async function handleRegistration(e) {
    e.preventDefault();

    const formData = {
      userName: e.target.userName.value,
      password: e.target.password.value,
      email: e.target.email.value,
      fullName: e.target.fullName.value,
      confirmPassword: e.target.confirmPassword.value,
    };
 
    try {
      const {data} = await axiosRequest.post("Account/register", formData , 
        {
          'Content-Type': 'application/json'
        }
      );
      if (data.statusCode === 200) {
        saveToken(data);
        navigate("/");
      } else {
        console.error("Registration failed:", data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <div className="flex justify-center items-center ml-[480px] mt-[100px] w-[400px] xs:ml-[0px] lg:ml-[50px] xl:ml-[500px]">
      <div className="w-full max-w-4xl flex items-center justify-between">
        <div className="w-full max-w-md p-8d rounded">
          <p className="text-gray-700 mb-3 text-[28px]">
          Create an account
          </p>
          <p className="text-gray-700 mb-8 text-[20px]">
          Enter your details below
          </p>
          <form onSubmit={handleRegistration}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="userName"
              >
               Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="userName"
                id="userName"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
               Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
               Name and Surname
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="fullName"
                id="fullName"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                className="bg-[#DB4444] w-full mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
                Registration
              </button>
               <div>
       <button className='w-[400px] h-[45px] rounded-[5px] mt-[20px] border-[1px] border-[lightgrey]'>Sign up with Google</button>
       <img className='absolute mt-[-35px] ml-[80px]' src={img} alt="" />
       </div>
        <div className='flex mt-[20px] ml-[20px]'>
        <p className='ml-[20px]'>Already have account?</p>
        <button className='ml-[20px] pb-[30px]' onClick={()=>Log()}>Log in</button>
        </div>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Registration;
