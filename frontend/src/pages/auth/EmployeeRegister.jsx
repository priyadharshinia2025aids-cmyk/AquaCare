
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../components/formschema/registerschema";

function EmployeeRegister() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  function onSubmit1(data) {
    console.log(data);
    alert("Registration successfully !");
    navigate("/login");
  }

  return (
    <>
      <h2>Employee Registration</h2>

      <form onSubmit={handleSubmit(onSubmit1)}>

        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
        />
        <p>{errors.age?.message}</p>

        <button type="submit">Register</button>

      </form>
    </>
  );
}

export default EmployeeRegister;
