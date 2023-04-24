import { NavLink } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div className="bg-blue-50 w-full lg:flex lg:items-center lg:justify-between p-6 px-20">

      <p className="text-blue-600 text-lg lg:text-xl font-hind font-bold tracking-wider text-center">Student Dropout Academic Success Predictor</p>

      <NavLink to="/abouttheproject">
        <p className="text-blue-500 mt-5 lg:mt-0 text-center text-lg font-hind font-bold tracking-wider hover:border-b-2 hover:border-blue-700 transition-all duration-200">AboutTheProj</p>
      </NavLink>

    </div>
  )
};

export default PublicNavbar;