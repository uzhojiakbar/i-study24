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
import Lessons from "../Pages/Lessons/Learn";
import Lesson from "../Pages/Lesson/Lesson";

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
      <Route
        path="/profile"
        element={
          <NotAuth profile={0}>
            <Profile />
          </NotAuth>
        }
      />
      <Route
        path="/blog"
        element={
          <NotAuth profile={0}>
            {" "}
            <Blog />
          </NotAuth>
        }
      />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route
        path="/lessons"
        element={
          <NotAuth profile={0}>
            <Lessons />
          </NotAuth>
        }
      />
      <Route
        path="/lesson/:lessonid"
        element={
          <NotAuth profile={0}>
            <Lesson />
          </NotAuth>
        }
      />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default RouteControl;
