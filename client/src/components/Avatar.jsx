const AvatarSize = {
  xsmall: "w-6 h-6",
  small: "w-8 h-8",
  medium: "w-[38px] h-[38px]",
  large: "w-[42px] h-[42px]",
  xlarge: "w-[60px] h-[60px]",
};

const Avatar = ({ className, alt, src, size = "medium" }) => {
  return (
    <img
      className={`rounded-full ${AvatarSize[size]} ${className && className}`}
      alt={alt}
      src={src}
    />
  );
};

export default Avatar;
