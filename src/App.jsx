import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Register from "./pages/Register";
import Login from './pages/Login';
import AboutTheProject from "./pages/AboutTheProject";
import StudentSuccessFailurePredictorForm from "./pages/StudentFailureSuccessForm/StudentSuccessFailurePredictorForm";
import Dashboard from "./pages/Dashboard";
import Loader from './components/Loader';
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";


const App = () => {

  const { loading } = useSelector((state) => state.alertLoader);

  return (
    <>
      <BrowserRouter>

        {loading && <Loader />}

        <Routes>
          <Route path="/" element={<PublicRoutes><Register /></PublicRoutes>} />
          <Route path="/abouttheproject" element={<AboutTheProject />} />
          <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
          <Route path="/studentsuccessfailurepredictor" element={<ProtectedRoutes><StudentSuccessFailurePredictorForm /></ProtectedRoutes>} />
          <Route path="/profile" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
        </Routes>

      </BrowserRouter>
    </>
  )
};

export default App;