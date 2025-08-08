import React, { useContext, useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/UserContext';
import uploadImage from '../../utils/uploadImage';

const SignUp = () => {
  const [profilePic, setProfilepic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle Signup Form Submit 
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";
    if(!fullName) {
      setError("Please enter your name");
      return;
    }
    if(!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if(!password) {
      setError("Please enter the password");
      return;
    }

    setError("");
    
    try {
      if(profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.profileImageUrl || imgUploadRes.profileImageUrl || "";
      }
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl
      });

      const { token, user } = response.data;

      if(token){
        localStorage.setItem("token" , token);
        updateUser(user);
        navigate("/dashboard");
      }
    }
    catch (error) {
      if(error.response && error.response.data.message){
        setError(error.response.data.messsage);
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-indigo-600/80">Create an Account</h3>
          <p className="text-sm text-indigo-600/80 mt-2">
            Join us today by entering your details below
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="flex justify-center mb-6">
            <ProfilePhotoSelector image={profilePic} setImage={setProfilepic} />
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
                label="Full Name"
                placeholder="John"
                type="text"
              />
              <Input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder="john@example.com"
                type="text"
              />
            </div>
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
            Create Account
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link 
              className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200" 
              to="/login"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp