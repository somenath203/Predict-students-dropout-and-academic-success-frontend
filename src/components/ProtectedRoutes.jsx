import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUser } from '../redux/userSlice';
import { useEffect } from "react";


const ProtectedRoutes = ({ children }) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const getAuthenticatedUserData = async () => {

    try {

      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_NODE_API_BASE_URL}/profile`, {}, {

        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }

      });

      dispatch(setUser(data?.data));

    } catch (error) {

      localStorage.getItem('token');

      navigate('/login');

    }
  };

  useEffect(() => {
    getAuthenticatedUserData();
  }, []);


  return (
    <>
      {children}
    </>
  )
};

export default ProtectedRoutes;