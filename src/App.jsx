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
import ProtectedRoutes from "./components/ProtectedRoutes";
import ParamsRoutes from "./components/ParamsRoutes";
import PublicRoutes from "./components/PublicRoutes";

function App() {
  return (
    <AuthProvider>
      <HotelsProvider>
        <BrowserRouter>
          <Routes>
            
            <Route element={<PublicRoutes />}>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>

            <Route element={<ParamsRoutes requiredParam="token" />}>
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
              </Route>
            </Route>

          </Routes>
        </BrowserRouter>
      </HotelsProvider>
    </AuthProvider>
  );
}

export default App