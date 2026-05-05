import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import DashboardLayout from "./components/layout/DashboardLayout";
import { AuthProvider } from "./contexts/AuthContext";
import { HotelsProvider } from "./contexts/HotelsContext";

function App() {
  return (
    <AuthProvider>
      <HotelsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Home />} />
              <Route path="listings" element={<Listings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HotelsProvider>
    </AuthProvider>
  );
}

export default App