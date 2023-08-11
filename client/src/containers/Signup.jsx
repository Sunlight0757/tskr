import { useState } from "react";

import Input from "../components/Input";
import Password from "../components/Password";

const Signin = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="bg-[#FFEDE8] text-[#222] text-[15px]">
      <div className="flex flex-col items-center max-w-[650px] m-auto pt-[120px] pb-72">
        <div className="text-[32px] font-bold leading-10 mb-16">Register</div>
        <div className="flex flex-col items-center bg-white w-full rounded-lg border border-[#E9E9E9] p-[50px]">
          <div className="flex items-center gap-3 text-sm leading-7 mb-9 rounded-full bg-[#FFEDE8] px-3 py-[9px]">
            <button
              onClick={() => setFlag(false)}
              className={`${
                flag ? "bg-transparent" : "bg-white"
              } px-[35px] py-1 rounded-full transition-colors duration-300 ease-in-out hover:bg-white/70 active:bg-white`}
            >
              I'm a Client
            </button>
            <button
              onClick={() => setFlag(true)}
              className={`${
                flag ? "bg-white" : "bg-transparent"
              } px-[35px] py-1 rounded-full transition-colors duration-300 ease-in-out hover:bg-white/70 active:bg-white`}
            >
              I'm a Freelancer
            </button>
          </div>
          <div className="flex flex-col gap-6 font-medium mb-8 w-full">
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <span className="block mb-[5px]">First Name</span>
                <Input type="text" placeholder="Enter first name" />
              </div>
              <div className="flex-1">
                <span className="block mb-[5px]">Last Name</span>
                <Input type="text" placeholder="Enter last name" />
              </div>
            </div>
            <div>
              <span className="block mb-[5px]">Email</span>
              <Input type="email" placeholder="Enter email address" />
            </div>
            <div>
              <span className="block mb-[5px]">Password</span>
              <Password />
            </div>
          </div>
          <button className="w-full bg-[#5BBB7B] rounded py-3 font-bold leading-7 text-white">
            Next <span className="font-normal">(Step 1/2)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
