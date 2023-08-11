import { NavLink } from "react-router-dom";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Password from "../components/Password";

const Signin = () => {
  return (
    <div className="bg-[#FFEDE8] text-[#222] text-[15px]">
      <div className="flex flex-col items-center max-w-[650px] m-auto pt-[120px] pb-72">
        <div className="text-[32px] font-bold leading-10 mb-16">Log In</div>
        <div className="bg-white w-full rounded-lg border border-[#E9E9E9] shadow-[0px 6px 15px 0px #404F680D] p-[50px]">
          <div className="flex flex-col items-center gap-5 font-medium mb-9">
            <span className="text-xl leading-[26px]">Welcome back!</span>
            <span>
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="font-normal text-[#5BBB7B] cursor-pointer"
              >
                Sign Up!
              </NavLink>
            </span>
          </div>
          <div className="flex flex-col gap-6 font-medium mb-8">
            <div>
              <span className="block mb-[5px]">Email Address</span>
              <Input type="email" placeholder="Enter email address" />
            </div>
            <div>
              <span className="block mb-[5px]">Password</span>
              <Password />
            </div>
            <div className="flex justify-between">
              <Checkbox label="Remember me" />
              <NavLink to="/forgot-password" className="underline">
                Forgot Password?
              </NavLink>
            </div>
          </div>
          <button className="w-full bg-[#5BBB7B] rounded py-3 font-bold leading-7 text-white">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
