import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import Router
import "./App.css";
import Login from "./authpages/Login";
import ForgetPassword from "./authpages/ForgetPassword";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Budget2025 from "./pages/Budget2025";
import Crime from "./pages/Crime";
import InnerCrime from "./pages/InnerCrime"; 
import Footer from "./components/Footer";
import Choice from "./pages/Choice";

const App = () => {
  return (
    <Router> 
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/budget-2025" element={<Budget2025 />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/innercrime" element={<InnerCrime />} /> 
        <Route path="Footer" element={<Footer/>}/>
        <Route path ="choice" element={<Choice/>}/>
      </Routes>
    </Router>
  );
};

export default App;
