import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../../src/assets/google.png";
import facebook from "../../src/assets/facebook.png";
import newbg1 from "../../src/assets/tech.jpg";
import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../firebase/setup";
import EmailSignup from "./EmailSignup";

const Signup = () => {
  const [showEmailSignup, setShowEmailSignup] = useState(false);
  const navigate = useNavigate();

  const googlesignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/main");
    } catch (err) {
      console.error(err);
    }
  };

  const facebooksignin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/main");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${newbg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full w-10/12 max-w-4xl rounded-sm p-8 bg-opacity-50 backdrop-blur-lg">
        <h1 className="text-red-700 text-6xl font-bold font-serif text-center">
          Quora
        </h1>

        <h1 className="text-center font-bold text-blue-600 mt-3">
          A place to share knowledge and better understand the world
        </h1>

        <div className="flex flex-col sm:flex-row mt-10 text-indigo-600">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-cyan-100 w-72">
              By continuing you indicate that you agree to Quora’s{" "}
              <span className="text-red-300">Terms of Service</span> and{" "}
              <span className="text-red-300">Privacy Policy</span>.
            </h1>

            <div
              onClick={googlesignin}
              className="cursor-pointer flex p-4 mt-3 bg-white items-center w-80 rounded-sm shadow-sm"
            >
              <img src={google} className="w-5 h-5 mx-1" alt="Google icon" />
              <h1 className="ml-7">Continue with Google</h1>
            </div>

            <div
              onClick={facebooksignin}
              className="flex p-4 mt-3 cursor-pointer bg-white items-center w-80 rounded-sm shadow-sm"
            >
              <img
                src={facebook}
                className="w-5 h-5 mx-1"
                alt="Facebook icon"
              />
              <h1 className="ml-7">Continue with Facebook</h1>
            </div>
          </div>

          <div className="ml-0 sm:ml-16 text-white mt-10 sm:mt-0">
            <h1>Login</h1>
            <hr className="w-72 mt-3" />

            <h1 className="mt-4 font-bold text-sm">Email</h1>
            <input
              placeholder="Your Email Please"
              className="border text-slate-950 border-gray-300 p-2 w-72 mt-2 rounded-sm"
            />
            <h1 className="mt-4 font-bold text-sm">Password</h1>
            <input
              type="password"
              placeholder="Your Password"
              className="border text-slate-950 border-gray-300 p-2 w-72 mt-2 rounded-sm"
            />

            <div className="flex justify-between mt-4">
              <h1 className="text-zinc-400 text-sm mt-2 hover:underline cursor-pointer">
                Forgot password?
              </h1>
              <button className="bg-blue-500 text-white p-2 w-20 rounded-full">
                Login
              </button>
            </div>

            <h1
              onClick={() => setShowEmailSignup(true)}
              className="mt-4 text-blue-500 hover:underline cursor-pointer"
            >
              Sign up with Email
            </h1>
          </div>
        </div>
        <hr className="mt-8 w-full border-gray-300" />
        <h1 className="text-sm text-center mt-3 text-blue-500">
          About . Careers . Privacy . Terms . Contact . Languages . Your Ad
          Choices . Press © Quora, Inc. 2024
        </h1>

              <h2 style={{color:"red"}}>Note:Currently in maintenance - Login via Google only

                The inconvenience is deeply regretted!!
              </h2>

      </div>
      {showEmailSignup && <EmailSignup setEmailSignup={setShowEmailSignup} />}


    </div>
  );
};

export default Signup;
