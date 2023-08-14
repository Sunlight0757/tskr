const ButtonType = {
  primary:
    "bg-[#5BBB7B] hover:bg-[#51A36C] focus:border-4 focus:border-[#EBFFF2] text-[#FFFFFF]",
  secondary:
    "bg-[#F1FCFA] hover:bg-[#E8FFFB] focus:border-4 focus:border-[#E2FFFA] text-[#5BBB7B]",
  black:
    "bg-[#222222] hover:bg-[#000000] focus:border-4 focus:border-[#EAEAEA] text-[#FFFFFF]",
  default:
    "bg-[#FFFFFF] hover:bg-[#F9F9F9] border border-[#00000026] focus:shadow-[3px_6px_15px_0px_#0000000D] text-[#000000]",
  tertiary:
    "bg-[#FFEDE8] hover:bg-[#FFE1D9] focus:border-4 focus:border-[#FFE8E1] text-[#1F4B3F]",
  error:
    "bg-[#D44242] hover:bg-[#BB1F1F] focus:border-4 focus:border-[#FCE7E7] text-[#FFFFFF]",
};

const ButtonSize = {
  small: "px-[14px] py-1",
  medium: "px-4 py-2",
  large: "px-[18px] py-[11px]",
};

const IconButtonSize = {
  small: "p-[6px]",
  medium: "p-[10px]",
  large: "p-[13px]",
};

const Button = ({
  className,
  type = "default",
  children,
  startIcon,
  endIcon,
  size = "medium",
  iconOnly = false,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 outline-none font-bold rounded transition-all duration-100 ease-[ease] disabled:opacity-40 disabled:pointer-events-none ${
        ButtonType[type]
      } ${iconOnly ? IconButtonSize[size] : ButtonSize[size]} ${
        className && className
      }`}
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
