import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout"; 
import AdminLayout from "./components/AdminLayout/AdminLayout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />} />   
        <Route path="/" element={<AdminLayout />} /> 
      </Routes>
    </Router>
  );
}

export default App;
