import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import OpenRoute from "./components/core/Auth/OpenRoute"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/common/Navbar"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
//import ProfileDropDown from "./components/core/Auth/ProfileDropDown";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route 
            path="signup"
            element = {
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
            />

        <Route  
            path="login"
            element = {
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
            />

        <Route  
            path="forgot-password"
            element = {
              <OpenRoute>
                <ForgotPassword />
              </OpenRoute>
            }
            /> 
             <Route 
            path="verify-email"
            element = {
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
            /> 

            <Route  
            path="update-password/:id"
            element = {
              <OpenRoute>
                <UpdatePassword />
              </OpenRoute>
            }
            />

       

            <Route 
            path="about"
            element = {
              <OpenRoute>
                <About />
              </OpenRoute>
            }
            />  
             <Route path="/contact" element={<Contact />} />

             <Route path="dashbord/my-profile" element={<MyProfile />} />  
      </Routes>
    </div>
  );
}

export default App;
