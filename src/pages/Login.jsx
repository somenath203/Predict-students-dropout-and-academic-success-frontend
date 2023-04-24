/* eslint-disable jsx-a11y/img-redundant-alt */
import { Form, message } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import LoginAccountImg from './../assets/loginaccount.svg';
import PublicNavbar from '../components/PublicNavbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { showLoading, hideLoading } from './../redux/alertSlice';


const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSubmitForm = async (e) => {

    e.preventDefault();

    dispatch(showLoading());

    try {

      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_NODE_API_BASE_URL}/login`, {
        email,
        password
      });

      dispatch(hideLoading());

      message.success(data?.message);

      localStorage.setItem('token', data?.token);

      navigate('/studentsuccessfailurepredictor');

    } catch (error) {

      dispatch(hideLoading());

      message.error(error?.response?.data?.message);

    }

  };

  return (
    <div className='min-h-screen flex items-center flex-col bg-slate-100'>

      <PublicNavbar />

      <div className='w-10/12 lg:w-4/6 mt-0 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-36'>

        <div>
          <img src={LoginAccountImg} alt="register image" className='w-full scale-9 hidden lg:block ' />
        </div>

        <div>

          <Form layout='vertical' onSubmitCapture={onSubmitForm}>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'email is required',
                },
              ]}
            >
              <input
                type="email"
                className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
                placeholder='enter your email address'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'password is required',
                },
              ]}
            >
              <input
                type="password"
                className='border-2 py-2 pl-2 border-blue-500 rounded-md w-full'
                placeholder='enter your password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Item>

            <button className='w-full mt-1 text-center bg-blue-600 hover:bg-blue-800 transition-all duration-500 text-white py-3 rounded-lg text-lg tracking-widest'>LOGIN</button>

            <NavLink to='/'>
              <p className='mt-2 text-center text-lg text-blue-500 hover:text-blue-700 transition-all duration-500 font-semibold'>Don't have an account? Register</p>
            </NavLink>

          </Form>

        </div>

      </div>

    </div>
  )
};

export default Login;