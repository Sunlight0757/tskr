const inputHeight = {
  small: "px-[14px] py-1",
  medium: "px-4 py-2",
  large: "px-[18px] py-[11px]",
};

const Button = ({
  className,
  children,
  startIcon,
  endIcon,
  size = "medium",
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 w-full outline-none text-[#fff] font-bold rounded bg-[#5BBB7B] border-[#EBFFF2] transition-all duration-100 ease-[ease] hover:bg-[#51A36C] focus:border-4 disabled:opacity-40 disabled:pointer-events-none ${
        inputHeight[size]
      } ${className && className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
