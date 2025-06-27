import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./pages/Auth/Login"
import SignUp from './pages/Auth/SignUp';
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from './context/UserContext';
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route
            path="/dashboard"
            exact
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/" exact element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App;

const Root= () => {
  //check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to Dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};