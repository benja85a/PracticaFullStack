import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors:RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-secondary d-flex p-5 card col-5 container-fluid my-5">
        {
          RegisterErrors.map((error, i)=> (
            <div className="bg-danger text-white p-2" key={i}>
              {error}
            </div>
          ))
        }
      <form onSubmit={onSubmit} className="text-center row justify-content-center">
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-100 px-4 py-2 my-2  input-group-text"
          placeholder="Username"
          />
        {errors.username && <p className="text-danger">username is required</p>}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-100 px-4 py-2 my-2 input-group-text"
          placeholder="Email"
        />
        {errors.email && <p className="text-danger">email is required</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-100 px-4 py-2 my-2 input-group-text"
          placeholder="Password"
          />
        {errors.password && <p className="text-danger">password is required</p>}
        <button type="submit" className="border rounded p-2 mt-3">
          register
        </button>
      <p className="text-center gap-2 space-between">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </form>
    </div>
  );
};

export default RegisterPage;
