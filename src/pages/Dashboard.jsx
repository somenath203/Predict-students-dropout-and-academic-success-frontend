import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import ProtectedNavbar from './../components/ProtectedNavbar';
import { showLoading, hideLoading } from './../redux/alertSlice';
import { NavLink } from "react-router-dom";


const Dashboard = () => {


  const { userData } = useSelector((state) => state.userData);

  const [predResult, setPredResult] = useState();


  const disptch = useDispatch();


  const getPredResult = async () => {

    disptch(showLoading());

    try {

      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_NODE_API_BASE_URL}/getAllPredResult`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      setPredResult(data?.data);

      disptch(hideLoading());

    } catch (error) {

      disptch(hideLoading());

    };

  };

  useEffect(() => {
    getPredResult();
  }, []);


  return (
    <div className='min-h-screen'>

      <ProtectedNavbar />

      <div className='mt-20 flex items-center flex-col'>

        <div className="w-11/12 lg:w-9/12 bg-blue-100 p-10 shadow-lg rounded-xl">

          <p className="text-xl font-sans text-blue-600 tracking-wider font-medium">Profile</p>

          <div className="flex flex-col mt-7 gap-5">

            <p className="text-lg lg:text-2xl font-sans tracking-wider text-blue-700 font-semibold">fullname: {userData?.fullName}</p>

            <p className="text-lg lg:text-2xl font-sans tracking-wider text-blue-700 font-semibold">emailID: {userData?.email}</p>

            <p className="text-lg lg:text-2xl font-sans tracking-wider text-blue-700 font-semibold">Prediction Result: {predResult ? predResult : 'Not Yet Evaluated'}</p>

          </div>

        </div>

        <NavLink to='/studentsuccessfailurepredictor' className='w-5/6 lg:w-1/4 mt-14 mb-8 text-center bg-blue-400 hover:bg-blue-800 transition-all duration-500 text-white py-3 rounded-lg text-lg tracking-widest'>
          <button>Predict Your Future In Academics</button>
        </NavLink>

      </div>


    </div>
  )
};

export default Dashboard;