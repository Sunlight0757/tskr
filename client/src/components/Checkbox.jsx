const Checkbox = ({ checked, label, ...props }) => {
  return (
    <div className="relative group flex gap-2 items-center">
      <input
        type="checkbox"
        checked={checked}
        className="absolute w-full h-full opacity-0 outline-none cursor-pointer"
        {...props}
      />
      {checked ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="4" fill="#1F4B3F" />
          <g clipPath="url(#clip0_59_1196)">
            <path
              d="M11.8141 5.30756C11.5666 5.05971 11.1647 5.05987 10.9168 5.30756L6.8783 9.34623L5.08335 7.5513C4.8355 7.30345 4.43374 7.30345 4.18589 7.5513C3.93804 7.79915 3.93804 8.20091 4.18589 8.44877L6.42947 10.6923C6.55332 10.8162 6.71571 10.8783 6.87812 10.8783C7.04053 10.8783 7.20309 10.8164 7.32693 10.6923L11.8141 6.20501C12.062 5.95733 12.062 5.5554 11.8141 5.30756Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_59_1196">
              <rect
                width="8"
                height="8"
                fill="white"
                transform="translate(4 4)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            stroke="#222"
            className="group-hover:stroke-[#1F4B3F]"
          />
        </svg>
      )}
      <span className="text-[15px] leading-7 font-normal group-hover:text-[#1F4B3F]">
        {label}
      </span>
    </div>
  );
};

export default Checkbox;
