import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AdminLogin() {
    const location = useLocation();
    const registerdata = location.state;
    const navigate = useNavigate();

    const [logindata, setlogindata] = useState({ username: "", password: "" });

    function handlesubmit(e) {
        e.preventDefault();
        console.log("Admin Login", logindata);
        console.log("Register", registerdata);

        if (registerdata && logindata.username === registerdata.name && logindata.password === registerdata.password) {
            console.log("Login Success");
            navigate("/admin-dashboard", { state: logindata });
        } else {
            alert("Invalid Admin Username or Password");
        }
    }

    function handlechange(e) {
        setlogindata({ ...logindata, [e.target.name]: e.target.value });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-teal-200 p-5">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold text-center text-teal-700 mb-2">AquaCare</h1>
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Admin Login</h2>
                <p className="text-center text-gray-500 mb-6">Login to your AquaCare Admin Account</p>

                <form onSubmit={handlesubmit} className="flex flex-col gap-5">
                    <input type="text" required placeholder="Enter your admin username" name="username" value={logindata.username} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />

                    <input type="password" required placeholder="Enter your password" name="password" value={logindata.password} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />

                    <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;