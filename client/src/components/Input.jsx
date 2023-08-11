const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full bg-white px-4 py-[14px] border border-[#E9E9E9] text-[14px] leading-7 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 ${className}`}
      {...props}
    />
  );
};

export default Input;
