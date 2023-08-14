import React from "react";
import SidebarMenu from "../../../components/SidebarMenu";
import {
  TSKR_Freelancer_Menu,
  Account_Freelancer_Menu,
} from "../../../constants/MenuList";
import Signout from "../../../containers/Auth/Signout";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[277px] bg-white pr-3">
      <SidebarMenu label="Tskr" items={TSKR_Freelancer_Menu} />
      <SidebarMenu label="Account" items={Account_Freelancer_Menu} />
      <Signout />
    </div>
  );
};

export default Sidebar;
