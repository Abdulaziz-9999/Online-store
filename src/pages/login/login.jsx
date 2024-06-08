import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../reducers/login/loginSlice';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-[310px] ml-[500px] mt-[60px]">
            <Formik
              initialValues={{ userName: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                dispatch(login(values))
                navigate('/');
              }}
            >
              
              <Form className="flex flex-col items-center">
              <div>
          <h1 className='text-[30px] pt-[30px]'>Log in to Exclusive</h1>
          <p className='text-[18px] mt-[10px] pb-[30px]'>Enter your details below</p>
        </div>
                <Field
                  className="w-80 h-10 px-4 mb-4 border rounded focus:outline-none"
                  type="text"
                  name="userName" 
                  placeholder="Phone number, username, or email"
                />
                <ErrorMessage name="userName" component="div" className="text-red-600" />
                <Field
                  className="w-80 h-10 px-4 mb-4 border rounded focus:outline-none"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-red-600" />
                <button type='submit'
                 className='text-[white] bg-[#DB4444] w-[320px] h-[40px] rounded-[5px] mt-[20px]'>
            Log In
          </button>
          <Link
                to={"/registration"}
                className="text-[#DB4444] hover:text-blue-800 font-bold text-sm mt-[30px]"
              >
                Forgot password  ?
              </Link>
              </Form>
            </Formik>
          </div>
    </div>
  );
};

