import React, { useContext } from "react";
import loginPic from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const nevigate = useNavigate();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        console.log("Logged in :", res.user);
        alert("Login successful");
        form.reset();
        nevigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        alert("Login failed. Recheck your email and password");
      });
  };

  return (
    <div className="mx-20 my-20 ">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src={loginPic}
              className="absolute p-24 bg-white inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                Login to{" "}
                <span className="text-primary font-sans">Car Doctors</span> 🦑
              </h2>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <form
                onSubmit={handleSubmit}
                className="mt-8 border-primary rounded-xl p-20 border-4 flex flex-col gap-6"
              >
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1  h-10 rounded-lg  w-full  border-4 border-primary bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 h-10 rounded-lg w-full  border-4 border-primary bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <input
                    value="Submit"
                    type="submit"
                    className="btn btn-wide text-gray-50 bg-primary"
                  />

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-gray-700 ml-1 underline"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Login;
