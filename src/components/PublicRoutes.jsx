import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {

    const tokenOfTheUser = localStorage.getItem('token');

    return tokenOfTheUser ? <Navigate to='/studentsuccessfailurepredictor' /> : children;
    
};

export default PublicRoutes;