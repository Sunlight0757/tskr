import Button from "../../../components/Button";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-white px-11 py-[35px]">
      <span>© Tskr.com - 2023. All rights reserved.</span>
      <Button className="font-[Jost] font-normal text-[#F9AB00] border-[#F9AB00]">
        Report an Issue
      </Button>
    </div>
  );
};

export default Footer;
