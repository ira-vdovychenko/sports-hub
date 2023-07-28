import React from "react";
import HomePage from './pages/HomePage';
import ArticlesPage from "./pages/ArticlesPage";
import UserProfilePage from './pages/UserProfilePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import MuSyrveysPage from './pages/MySurveysPage';
import TeamHubPage from './pages/TeamHubPage';
import { Route } from 'react-router';
import { createBrowserRouter, createRoutesFromElements, RouterProvider  } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route element={<HomePage />} path='/home' />
      <Route element={<ArticlesPage />} path='/articles' />
      <Route element={<UserProfilePage />} path='/user' />
      <Route element={<ChangePasswordPage />} path='/changepassword' />
      <Route element={<MuSyrveysPage />} path='/surveys' />
      <Route element={<TeamHubPage />} path='/teamhub' />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
