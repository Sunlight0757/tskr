import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import Logo from "../../../assets/images/logo/logo1.svg";

const Navbar = () => {
  const items = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "Availale Jobs",
      key: "job",
    },
    {
      label: "Blog",
      key: "blog",
    },
  ];

  return (
    <div className="flex justify-between px-[30px] h-20 border-b border-[#e9e9e9] text-[#222] text-[15px] font-medium leading-7">
      <div className="flex gap-8 my-5">
        <NavLink to="/" className="border-r border-[#e9e9e9] pr-8 min-w-fit">
          <img alt="logo" src={Logo} />
        </NavLink>
      </div>
      <div className="flex gap-[17px] items-center">
        <ul className="flex h-full">
          {items.map((item) => (
            <li
              key={item.key}
              className="relative flex items-center px-[15px] h-full cursor-pointer before:absolute before:w-0 before:top-0 before:border-t-[3px] before:border-[#5BBB7B] before:transition-[width] before:ease-in-out before:duration-500 before:content-[''] hover:before:w-[calc(100%-32px)] transition-colors duration-500 ease-in-out hover:text-[#5BBB7B]"
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="flex gap-[30px] items-center my-5 pl-8 border-l border-[#E9E9E9]">
          <NavLink
            to="/signin"
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#5BBB7B]"
          >
            Login
          </NavLink>
          <NavLink to="/signup">
            <Button type="primary">Sign Up</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
