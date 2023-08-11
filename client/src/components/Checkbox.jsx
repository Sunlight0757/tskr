const Checkbox = ({ label, ...props }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <div className="relative h-4">
        <input
          type="checkbox"
          id="some_id"
          className="relative peer shrink-0 appearance-none w-4 h-4 border border-black rounded bg-white checked:bg-[#1F4B3F] checked:border-0"
          {...props}
        />
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1 left-1 hidden peer-checked:block pointer-events-none"
        >
          <g clipPath="url(#clip0_1087_3833)">
            <path
              d="M7.81411 1.30692C7.56659 1.05907 7.16466 1.05923 6.9168 1.30692L2.8783 5.34559L1.08335 3.55066C0.835501 3.30281 0.433739 3.30281 0.185888 3.55066C-0.0619628 3.79851 -0.0619628 4.20027 0.185888 4.44812L2.42947 6.69171C2.55332 6.81555 2.71571 6.87763 2.87812 6.87763C3.04053 6.87763 3.20309 6.81571 3.32693 6.69171L7.81411 2.20437C8.06196 1.95669 8.06196 1.55476 7.81411 1.30692Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1087_3833">
              <rect width="8" height="8" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;
