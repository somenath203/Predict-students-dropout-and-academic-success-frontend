import { NavLink } from 'react-router-dom';

import ProtectedNavbar from '../components/ProtectedNavbar';
import PublicNavbar from '../components/PublicNavbar';


const AboutTheProject = () => {

  const token = localStorage.getItem('token');

  return (
    <div className='min-h-screen flex items-center flex-col bg-slate-100'>

      {!token ? <PublicNavbar /> : <ProtectedNavbar />}

      <p className='mt-16 lg:mt-32 font-sans text-blue-700 text-2xl lg:text-4xl tracking-wider font-semibold'>About The Project</p>

      <div className='w-4/5'>
        <p className='mt-10 text-lg lg:text-xl font-hind tracking-wider text-blue-600 font-semibold text-center'>
          This is a project which predicts whether a particular student would dropout or succeed in academics
          in the future. The main aim of this project is to reduce the number of dropouts and failure rates
          of the students in academics by identifying those students at early stage who are at a risk of facing
          failure in academics in the future with the help of machine learning.
        </p>
      </div>

      {!token ? <><NavLink to='/login'>
        <button className='mb-6 lg:mb-0 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-sans rounded-lg shadow-lg text-lg tracking-wider py-4 px-8 mt-14'>Back to Login Page</button>
      </NavLink></> : <><NavLink to='/profile'>
        <button className='mb-6 lg:mb-0 bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-sans rounded-lg shadow-lg text-lg tracking-wider py-4 px-8 mt-14'>Back to Profile Page</button>
      </NavLink></>}

    </div>
  )
};

export default AboutTheProject;