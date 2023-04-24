import { message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedNavbar = () => {

    const navigate = useNavigate();

    const { userData } = useSelector((state) => state.userData);

    const logoutUser = () => {

        localStorage.removeItem('token');

        navigate('/login');

        message.success('you are logged out successfully');

    };

    return (
        <div className="bg-blue-50 w-full lg:flex lg:items-center lg:justify-between p-6 px-20">

            <p className="text-blue-600 text-lg lg:text-xl text-center font-hind font-bold tracking-wider">Student Dropout Academic Success Predictor</p>

            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-8 lg:mt-0 text-center">

                <NavLink to='/profile'>
                    <p className="text-blue-500 text-lg font-hind font-bold tracking-wider hover:border-b-2 hover:border-blue-700 transition-all duration-200">{userData?.fullName?.split(' ')[0]}</p>
                </NavLink>

                <NavLink to="/abouttheproject">
                    <p className="text-blue-500 text-lg font-hind font-bold tracking-wider hover:border-b-2 hover:border-blue-700 transition-all duration-200">AboutTheProj</p>
                </NavLink>

                <NavLink to="/login">
                    <p className="text-blue-500 text-lg font-hind font-bold tracking-wider hover:border-b-2 hover:border-blue-700 transition-all duration-200" onClick={logoutUser}>Logout</p>
                </NavLink>

            </div>

        </div>
    )
}

export default ProtectedNavbar;