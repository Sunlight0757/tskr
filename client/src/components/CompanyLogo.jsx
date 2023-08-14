const CompanyLogo = ({ alt, src, status }) => {
  return (
    <div
      className={`relative rounded-full w-[60px] h-[60px] after:absolute after:w-[9px] after:h-[9px] after:rounded-full after:top-[4px] after:right-[4px] after:border after:border-white ${
        status ? "after:bg-[#5BBB7B]" : "after:bg-[#EAEAEA]"
      }`}
    >
      <img alt={alt} src={src} />
    </div>
  );
};

export default CompanyLogo;
