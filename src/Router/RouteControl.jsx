import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import VerificationPage from "../Pages/Verify";
import NotAuth from "../Components/Navigates/NotAuth";
import Profile from "../Pages/Profile";
import UserRoute from "../Components/Navigates/ProfileRoute";
import Blog from "../Components/Blog/Blog";

const RouteControl = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotAuth>
            <Home />
          </NotAuth>
        }
      />
      <Route
        path="/account/register"
        element={
          <UserRoute>
            <Register />
          </UserRoute>
        }
      />
      <Route
        path="/account/sign-in"
        element={
          <UserRoute>
            <Login />
          </UserRoute>
        }
      />
      <Route
        path="/account/verify"
        element={
          <UserRoute>
            <VerificationPage />
          </UserRoute>
        }
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/blog" element={<Blog/> } />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default RouteControl;
