import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/auth/Register";
import CustomerLogin from "./pages/auth/CustomerLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import ManagerLogin from "./pages/auth/ManagerLogin";
import TechnicianLogin from "./pages/auth/TechnicianLogin";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import TechnicianDashboard from "./pages/technician/TechnicianDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Register />} />

                <Route path="/login">
                    <Route index element={<Navigate to="customer" replace />} />
                    <Route path="customer" element={<CustomerLogin />} />
                    <Route path="admin" element={<AdminLogin />} />
                    <Route path="manager" element={<ManagerLogin />} />
                    <Route path="technician" element={<TechnicianLogin />} />
                </Route>

                <Route path="/dashboard">
                    <Route index element={<Navigate to="/" replace />} />
                    <Route path="customer" element={<CustomerDashboard />} />
                    <Route path="admin" element={<AdminDashboard />} />
                    <Route path="manager" element={<ManagerDashboard />} />
                    <Route path="technician" element={<TechnicianDashboard />} />
                </Route>

                <Route path="/customer-dashboard" element={<Navigate to="/dashboard/customer" replace />} />
                <Route path="/admin-dashboard" element={<Navigate to="/dashboard/admin" replace />} />
                <Route path="/manager-dashboard" element={<Navigate to="/dashboard/manager" replace />} />
                <Route path="/technician-dashboard" element={<Navigate to="/dashboard/technician" replace />} />

                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
