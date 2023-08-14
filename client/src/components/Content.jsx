const Content = ({ title, description, component }) => {
  return (
    <div className="flex flex-col h-full gap-[58px] bg-[#F0EFEC] px-[86.5px] pt-[60px] pb-20">
      <div>
        <span className="block text-[32px] font-bold text-[#222222]">
          {title}
        </span>
        <span className="block text-lg font-normal text-[#222222]">
          {description}
        </span>
      </div>
      {component}
    </div>
  );
};

export default Content;
