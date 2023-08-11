import { useRef } from "react";

import Input from "../components/Input";
import Password from "../components/Password";
import Segmented from "../components/Segmented";

const Signin = () => {
  return (
    <div className="bg-[#FFEDE8] text-[#222] text-[15px]">
      <div className="flex flex-col items-center max-w-[650px] m-auto pt-[120px] pb-72">
        <div className="text-[32px] font-bold leading-10 mb-16">Register</div>
        <div className="flex flex-col items-center bg-white w-full rounded-lg border border-[#E9E9E9] p-[50px]">
          <Segmented
            name="role-group"
            callback={(val) => console.log(val)}
            defaultIndex={0}
            controlRef={useRef()}
            segments={[
              {
                label: "I'm a Client",
                value: true,
                ref: useRef(),
              },
              {
                label: "I'm a Freelancer",
                value: false,
                ref: useRef(),
              },
            ]}
          />
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
