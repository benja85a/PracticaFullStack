import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()
 
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks")
  }, [isAuthenticated])

  return (
    <div className="d-flex justify-content-center mt-5 p-6">
      <div className="bg-secondary p-5 border rounded ">
        {signinErrors.map((error, i) => (
          <div className="bg-danger text-white p-2 text-center" key={i}>
            {error}
          </div>
        ))}
        <h1 className="m-3 text-center bold">
          <strong>Login</strong>
        </h1>
        <form onSubmit={onSubmit} className="text-center row">
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-75 px-4 py-2 my-2 input-group-text"
            placeholder="Email"
          />
          {errors.email && <p className="text-danger">email is required</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-75 px-4 py-2 my-2 input-group-text"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-danger">password is required</p>
          )}
          <button type="submit" className="border rounded p-2 mt-3 w-25">
            login
          </button>
        </form>
        <p className="d-flex gap-2 space-between">
          dont have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
