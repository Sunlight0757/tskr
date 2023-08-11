import { NavLink } from "react-router-dom";

const Navbar = () => {
  const items = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "Browse Jobs",
      key: "job",
    },
    {
      label: "Services",
      key: "service",
    },
    {
      label: "Blog",
      key: "blog",
    },
    {
      label: "Pages",
      key: "page",
    },
    {
      label: "Contact",
      key: "contact",
    },
  ];

  return (
    <div className="flex justify-between px-[30px] h-20 border-b border-[#e9e9e9] text-[#222] text-[15px] font-medium leading-7">
      <div className="flex gap-8 my-5">
        <img
          alt="logo"
          src="/assets/images/logo/logo.svg"
          className="border-r border-[#e9e9e9] pr-8"
        />
        <div className="group flex items-center cursor-pointer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline mr-[10px]"
          >
            <path
              d="M14.125 8.625H10.5C9.46613 8.625 8.625 9.46613 8.625 10.5V14.125C8.625 15.1589 9.46613 16 10.5 16H14.125C15.1589 16 16 15.1589 16 14.125V10.5C16 9.46613 15.1589 8.625 14.125 8.625ZM14.75 14.125C14.75 14.4696 14.4696 14.75 14.125 14.75H10.5C10.1554 14.75 9.875 14.4696 9.875 14.125V10.5C9.875 10.1554 10.1554 9.875 10.5 9.875H14.125C14.4696 9.875 14.75 10.1554 14.75 10.5V14.125ZM5.5 8.625H1.875C0.841125 8.625 0 9.46613 0 10.5V14.125C0 15.1589 0.841125 16 1.875 16H5.5C6.53387 16 7.375 15.1589 7.375 14.125V10.5C7.375 9.46613 6.53387 8.625 5.5 8.625ZM6.125 14.125C6.125 14.4696 5.84462 14.75 5.5 14.75H1.875C1.53038 14.75 1.25 14.4696 1.25 14.125V10.5C1.25 10.1554 1.53038 9.875 1.875 9.875H5.5C5.84462 9.875 6.125 10.1554 6.125 10.5V14.125ZM5.5 0H1.875C0.841125 0 0 0.841125 0 1.875V5.5C0 6.53387 0.841125 7.375 1.875 7.375H5.5C6.53387 7.375 7.375 6.53387 7.375 5.5V1.875C7.375 0.841125 6.53387 0 5.5 0ZM6.125 5.5C6.125 5.84462 5.84462 6.125 5.5 6.125H1.875C1.53038 6.125 1.25 5.84462 1.25 5.5V1.875C1.25 1.53038 1.53038 1.25 1.875 1.25H5.5C5.84462 1.25 6.125 1.53038 6.125 1.875V5.5ZM14.125 0H10.5C9.46613 0 8.625 0.841125 8.625 1.875V5.5C8.625 6.53387 9.46613 7.375 10.5 7.375H14.125C15.1589 7.375 16 6.53387 16 5.5V1.875C16 0.841125 15.1589 0 14.125 0ZM14.75 5.5C14.75 5.84462 14.4696 6.125 14.125 6.125H10.5C10.1554 6.125 9.875 5.84462 9.875 5.5V1.875C9.875 1.53038 10.1554 1.25 10.5 1.25H14.125C14.4696 1.25 14.75 1.53038 14.75 1.875V5.5Z"
              fill="#222222"
              className="transition-colors duration-500 ease-in-out group-hover:fill-[#5BBB7B]"
            />
          </svg>
          <span className="transition-colors duration-500 ease-in-out group-hover:text-[#5BBB7B]">
            Categories
          </span>
        </div>
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
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group cursor-pointer"
          >
            <g clip-path="url(#clip0_720_21026)">
              <path
                d="M7.04606 0C3.16097 0 0 3.16097 0 7.04606C0 10.9314 3.16097 14.0921 7.04606 14.0921C10.9314 14.0921 14.0921 10.9314 14.0921 7.04606C14.0921 3.16097 10.9314 0 7.04606 0ZM7.04606 12.7913C3.87816 12.7913 1.30081 10.214 1.30081 7.04609C1.30081 3.87819 3.87816 1.30081 7.04606 1.30081C10.214 1.30081 12.7913 3.87816 12.7913 7.04606C12.7913 10.214 10.214 12.7913 7.04606 12.7913Z"
                fill="#222222"
                className="transition-all duration-300 ease-in-out group-hover:fill-[#5BBB7B]"
              />
              <path
                d="M15.8095 14.8898L12.0805 11.1608C11.8264 10.9067 11.4149 10.9067 11.1608 11.1608C10.9067 11.4146 10.9067 11.8266 11.1608 12.0804L14.8898 15.8094C15.0168 15.9365 15.1831 16 15.3496 16C15.5159 16 15.6824 15.9365 15.8095 15.8094C16.0636 15.5556 16.0636 15.1436 15.8095 14.8898Z"
                fill="#222222"
                className="transition-all duration-300 ease-in-out group-hover:fill-[#5BBB7B]"
              />
            </g>
            <defs>
              <clipPath id="clip0_720_21026">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#5BBB7B]">
            Become a Seller
          </span>
          <NavLink
            to="/signin"
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#5BBB7B]"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-[#5BBB7B] text-[#fff] font-bold px-6 py-1 rounded"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
