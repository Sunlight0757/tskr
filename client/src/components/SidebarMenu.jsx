import { NavLink, useLocation } from "react-router-dom";

const SidebarMenu = ({ label, items }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      <span className="text-[15px] font-normal text-[#6B7177] pl-[35px] py-[18px]">
        {label}
      </span>
      {items.map((item) => (
        <NavLink
          key={`${item.label}-icon`}
          to={item.link}
          className={`flex items-center gap-[15px] rounded-r pl-[35px] py-[18px] ${
            location.pathname.indexOf(item.link) === 0
              ? "bg-[#222222] text-[#F1FCFA] hover:bg-[#222222]"
              : "text-[#222222] hover:bg-[#22222280]"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className={
              location.pathname.indexOf(item.link) === 0
                ? "fill-[#F1FCFA]"
                : "fill-[#222222]"
            }
          >
            {item.icon}
          </svg>
          <span className="text-[17px] font-medium">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarMenu;
