import React, { useContext, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import{ Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import{ validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const [email , setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [error, setError]= useState("");

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  //Handle login Form Submit 
  const handleLogin= async (e) => {
    e.preventDefault();

    if( !validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }
    if(!password){
      setPassword("Please enter the password");
      return;
    }

    setError("");

    //Login API Call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN , {
        email,
        password,
      });
      const { token , user } = response.data;

      if(token) {
        localStorage.setItem("token" , token);
        updateUser(user)
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-indigo-600/80">Welcome Back</h3>
          <p className="text-sm text-indigo-600/80 mt-2">
            Please enter your details to log in 
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />

            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Sign In
          </button>   

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link 
              className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200" 
              to="/signup"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login;