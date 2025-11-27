import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        <Navbar />
        <main className="h-max w-max">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}