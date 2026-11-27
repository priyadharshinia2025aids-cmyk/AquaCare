import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../components/formschema/registerschema";

function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerSchema)
    });

    function onSubmit1(data) {
        console.log("Register Data:", data);

        alert("Registration successful!");

        switch (data.role) {
            case "customer":
                navigate("/login/customer", { state: data });
                break;

            case "admin":
                navigate("/login/admin", { state: data });
                break;

            case "manager":
                navigate("/login/manager", { state: data });
                break;

            case "technician":
                navigate("/login/technician", { state: data });
                break;

            default:
                alert("Invalid role selected");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-teal-200 p-5">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

                <h1 className="text-3xl font-bold text-center text-teal-700 mb-2">
                    AquaCare
                </h1>

                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                    Create Your Account
                </h2>

                <p className="text-center text-gray-500 mb-6">
                    Register to access AquaCare services
                </p>

                <form onSubmit={handleSubmit(onSubmit1)} className="flex flex-col gap-3">

                    <input type="text" placeholder="Enter your full name" {...register("name")} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm">{errors.name?.message}</p>

                    <input type="email" placeholder="Enter your email" {...register("email")} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>

                    <input type="text" placeholder="Enter your mobile number" {...register("mobile")} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm">{errors.mobile?.message}</p>

                    <input type="password" placeholder="Create your password" {...register("password")} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm">{errors.password?.message}</p>

                    <input type="password" placeholder="Confirm your password" {...register("confirmPassword")} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
                    <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

                    <select {...register("role")} className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-teal-500">
                        <option value="">Select your role</option>
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="technician">Technician</option>
                    </select>
                    <p className="text-red-500 text-sm">{errors.role?.message}</p>

                    <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">
                        Register
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Register;
