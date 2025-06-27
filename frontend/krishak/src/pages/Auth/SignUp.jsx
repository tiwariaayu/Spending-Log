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
  const [farmName, setFarmName] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [error, setError] = useState("");

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle Signup Form Submit 
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    if (!farmName) {
      setError("Please enter your farm name");
      return;
    }
    if (!farmLocation) {
      setError("Please enter your farm location");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        farmName,
        farmLocation,
        role: 'farmer'
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
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
          <h3 className="text-2xl font-bold text-green-600/80">Join Krishak</h3>
          <p className="text-sm text-green-600/80 mt-2">
            Create your farmer account to manage your farm
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="flex justify-center mb-6">
            <ProfilePhotoSelector image={profilePic} setImage={setProfilepic} />
          </div>

          <div className="space-y-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John Doe"
              type="text"
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="farmer@example.com"
              type="text"
            />
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />
            <Input
              value={farmName}
              onChange={({ target }) => setFarmName(target.value)}
              label="Farm Name"
              placeholder="Green Valley Farm"
              type="text"
            />
            <Input
              value={farmLocation}
              onChange={({ target }) => setFarmLocation(target.value)}
              label="Farm Location"
              placeholder="Village, District, State"
              type="text"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Create Farmer Account
          </button>

          <p className="text-center text-sm text-gray-600">
            Already a farmer?{" "}
            <Link 
              className="font-medium text-green-600 hover:text-green-700 transition-colors duration-200" 
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