import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />} />
        <Route path="/home" component={UnderConstruction} />
       
      </Routes>
    </Router>
  );
}

export default App;
