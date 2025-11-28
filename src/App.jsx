import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WorkerRoutes from "./WokerRoutes";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-[#f8f5ef] overflow-x-hidden">
        <div className="w-full max-w-[100vw] mx-auto">
          {/* Navbar + Routes */}
          <Router>
            <Navbar />
            <main className="m-0 p-0 w-full max-w-[100vw] overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workers/*" element={<WorkerRoutes />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </div>
    </>
  );
}
