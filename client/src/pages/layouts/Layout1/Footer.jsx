import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="bg-[#222]">
      <div className="max-w-[1440px] m-auto">
        <div className="flex flex-col gap-[60px]">
          <div className="flex justify-between w-full py-[25px] text-[17px] text-white font-medium leading-7 border-b border-white/[0.07]">
            <div className="flex gap-8">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
              <span>Site Map</span>
            </div>
            <div className="flex gap-8 items-center">
              <span>Follow Us</span>
              <div className="flex gap-6 leading-4">
                <div className="p-3 rounded-full cursor-pointer transition-colors duration-500 ease-in-out hover:bg-white/5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1087_1705)">
                      <path
                        d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1087_1705">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="p-3 rounded-full cursor-pointer transition-colors duration-500 ease-in-out hover:bg-white/5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1087_1715)">
                      <path
                        d="M5.03344 14.5005C11.0697 14.5005 14.3722 9.49829 14.3722 5.16173C14.3722 5.0211 14.3691 4.87735 14.3628 4.73673C15.0052 4.27213 15.5597 3.69666 16 3.03735C15.4017 3.30356 14.7664 3.47741 14.1159 3.55298C14.8009 3.14243 15.3137 2.49747 15.5594 1.73767C14.915 2.11953 14.2104 2.3889 13.4756 2.53423C12.9806 2.0082 12.326 1.6599 11.6131 1.54319C10.9003 1.42648 10.1688 1.54786 9.53183 1.88855C8.89486 2.22925 8.38787 2.77029 8.08923 3.42803C7.7906 4.08577 7.71695 4.82357 7.87969 5.52735C6.575 5.46188 5.29862 5.12296 4.13332 4.53255C2.96802 3.94215 1.9398 3.11345 1.11531 2.10017C0.696266 2.82265 0.568038 3.67759 0.756687 4.49122C0.945337 5.30485 1.43671 6.01612 2.13094 6.48048C1.60975 6.46393 1.09998 6.32361 0.64375 6.0711V6.11173C0.643283 6.86992 0.905399 7.60488 1.38554 8.19167C1.86568 8.77846 2.53422 9.18086 3.2775 9.33048C2.7947 9.46257 2.28799 9.48182 1.79656 9.38673C2.0063 10.0388 2.41438 10.6091 2.96385 11.018C3.51331 11.427 4.17675 11.6542 4.86156 11.668C3.69895 12.5812 2.26278 13.0766 0.784375 13.0742C0.522191 13.0738 0.260266 13.0578 0 13.0261C1.5019 13.9897 3.24902 14.5014 5.03344 14.5005Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1087_1715">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="p-3 rounded-full cursor-pointer transition-colors duration-500 ease-in-out hover:bg-white/5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1087_1707)">
                      <path
                        d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98438 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60313 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76562C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z"
                        fill="white"
                      />
                      <path
                        d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z"
                        fill="white"
                      />
                      <path
                        d="M13.2312 3.72891C13.2312 4.26016 12.8 4.68828 12.2719 4.68828C11.7406 4.68828 11.3125 4.25703 11.3125 3.72891C11.3125 3.19766 11.7438 2.76953 12.2719 2.76953C12.8 2.76953 13.2312 3.20078 13.2312 3.72891Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1087_1707">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="p-3 rounded-full cursor-pointer transition-colors duration-500 ease-in-out hover:bg-white/5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1087_1712)">
                      <path
                        d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1087_1712">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 text-white/70">
            <div className="flex flex-col leading-9">
              <span className="text-white leading-6 mb-[10px]">About</span>
              <span className="cursor-pointer">Careers</span>
              <span className="cursor-pointer">Press & News</span>
              <span className="cursor-pointer">Partnerships</span>
              <span className="cursor-pointer">Privacy Policy</span>
              <span className="cursor-pointer">Terms of Service</span>
              <span className="cursor-pointer">Investor Relations</span>
            </div>
            <div className="flex flex-col leading-9">
              <span className="text-white leading-6 mb-[10px]">Categories</span>
              <span className="cursor-pointer">Graphics & Design</span>
              <span className="cursor-pointer">Digital Marketing</span>
              <span className="cursor-pointer">Writing & Translation</span>
              <span className="cursor-pointer">Video & Animation</span>
              <span className="cursor-pointer">Music & Audio</span>
              <span className="cursor-pointer">Programming & Tech</span>
              <span className="cursor-pointer">Data</span>
              <span className="cursor-pointer">Business</span>
              <span className="cursor-pointer">Lifestyle </span>
            </div>
            <div className="flex flex-col leading-9">
              <span className="text-white leading-6 mb-[10px]">Support</span>
              <span className="cursor-pointer">Help & Support</span>
              <span className="cursor-pointer">Trust & Safety</span>
              <span className="cursor-pointer">Selling on Freeio</span>
              <span className="cursor-pointer">Buying on Freeio</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white leading-6 mb-[18px]">Subscribe</span>
              <div className="flex gap-5 bg-white/5 w-full rounded px-5 py-4 mb-[30px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-transparent outline-none"
                />
                <button className="flex-none outline-none text-white">
                  Send
                </button>
              </div>
              <span className="text-white leading-6 mb-[11px]">Apps</span>
              <div className="flex gap-[13px] items-center opacity-70 text-white">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1087_3645)">
                    <path
                      d="M10.9987 0.425781C10.1457 0.484781 9.14868 1.03078 8.56769 1.74177C8.03769 2.38677 7.6017 3.34476 7.7717 4.27576C8.70369 4.30476 9.66667 3.74576 10.2247 3.02277C10.7467 2.34977 11.1417 1.39778 10.9987 0.425781Z"
                      fill="white"
                    />
                    <path
                      d="M14.3696 5.79487C13.5506 4.76787 12.3996 4.17188 11.3126 4.17188C9.87759 4.17188 9.27059 4.85887 8.2736 4.85887C7.2456 4.85887 6.46461 4.17388 5.22362 4.17388C4.00462 4.17388 2.70663 4.91887 1.88364 6.19287C0.726643 7.98687 0.924642 11.3599 2.79963 14.2329C3.47063 15.2609 4.36662 16.4169 5.53861 16.4269C6.58161 16.4369 6.87561 15.7579 8.2886 15.7509C9.70159 15.7429 9.96959 16.4359 11.0106 16.4249C12.1836 16.4159 13.1286 15.1349 13.7996 14.1069C14.2806 13.3699 14.4596 12.9989 14.8326 12.1669C12.1196 11.1339 11.6846 7.27587 14.3696 5.79487Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1087_3645">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.425781)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="leading-10">iOS App</span>
              </div>
              <div className="flex gap-[13px] items-center opacity-70 text-white">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1087_3652)">
                    <path
                      d="M9.66953 16.4238C10.2045 16.4238 10.671 15.9573 10.671 15.4223V13.0834H11.3397C11.741 13.0834 12.0085 12.8159 12.0085 12.4147V5.73438H3.99023V12.4148C3.99023 12.816 4.25772 13.0835 4.65895 13.0835H5.32772V15.4224C5.32772 15.9574 5.79414 16.4239 6.32922 16.4239C6.86413 16.4239 7.33061 15.9574 7.33061 15.4224V13.0835H8.66809V15.4224C8.66804 15.9573 9.13456 16.4238 9.66953 16.4238Z"
                      fill="white"
                    />
                    <path
                      d="M13.6792 12.4148C14.2142 12.4148 14.6806 11.9483 14.6806 11.4133V6.73545C14.6806 6.2033 14.2142 5.73438 13.6792 5.73438C13.1442 5.73438 12.6777 6.2033 12.6777 6.73545V11.4133C12.6777 11.9482 13.1442 12.4148 13.6792 12.4148Z"
                      fill="white"
                    />
                    <path
                      d="M2.31975 12.4148C2.85478 12.4148 3.32125 11.9483 3.32125 11.4133V6.73545C3.32125 6.2033 2.85483 5.73438 2.31975 5.73438C1.78478 5.73438 1.31836 6.2033 1.31836 6.73545V11.4133C1.31836 11.9482 1.78478 12.4148 2.31975 12.4148Z"
                      fill="white"
                    />
                    <path
                      d="M11.2059 0.526689C11.0723 0.392145 10.8732 0.392145 10.7395 0.526689L9.84263 1.42061L9.80125 1.46193C9.26943 1.19562 8.67316 1.06262 8.00914 1.06134C8.00589 1.06134 8.00269 1.06123 7.99943 1.06123H7.99932C7.99596 1.06123 7.99286 1.06134 7.9895 1.06134C7.32553 1.06262 6.72927 1.19562 6.1975 1.46193L6.15602 1.42061L5.25916 0.526689C5.12537 0.392145 4.92644 0.392145 4.79275 0.526689C4.65895 0.660486 4.65895 0.859045 4.79275 0.992735L5.66034 1.86049C5.38079 2.04714 5.12729 2.27555 4.90684 2.53679C4.37908 3.16236 4.04245 3.97651 3.99616 4.85863C3.99573 4.86781 3.99483 4.87689 3.9944 4.88607C3.99157 4.94614 3.99023 5.00652 3.99023 5.06712H12.0085C12.0085 5.00652 12.007 4.94614 12.0043 4.88607C12.0039 4.87689 12.003 4.86781 12.0024 4.85863C11.9562 3.97651 11.6195 3.16231 11.0917 2.53684C10.8714 2.2756 10.6178 2.0472 10.3382 1.86054L11.2059 0.992788C11.3397 0.859045 11.3397 0.660486 11.2059 0.526689ZM6.32793 3.89953C6.05126 3.89953 5.82697 3.67523 5.82697 3.39856C5.82697 3.12189 6.05126 2.8976 6.32793 2.8976C6.6046 2.8976 6.8289 3.12189 6.8289 3.39856C6.8289 3.67523 6.6046 3.89953 6.32793 3.89953ZM9.67076 3.89953C9.39409 3.89953 9.1698 3.67523 9.1698 3.39856C9.1698 3.12189 9.39409 2.8976 9.67076 2.8976C9.94743 2.8976 10.1717 3.12189 10.1717 3.39856C10.1717 3.67523 9.94743 3.89953 9.67076 3.89953Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1087_3652">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.425781)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="leading-10">Android App</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-5 text-sm text-white/70 border-t border-white/[0.07]">
            <span className="leading-7">
              © Tskr.com - 2023. All rights reserved.
            </span>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } fixed bottom-5 right-5 bg-white/5 hover:bg-white/50 focus:bg-white/70 rounded-full p-[15px] shadow-sm transition-opacity focus:outline-none `}
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1087_3677)">
            <path
              d="M5.19814 2.65332L0.124392 7.74115C-0.0417463 7.90784 -0.041467 8.17773 0.125251 8.34415C0.291948 8.51043 0.561983 8.51 0.72825 8.34329L5.50002 3.5583L10.2718 8.34346C10.438 8.51015 10.7079 8.51058 10.8746 8.34432C10.9582 8.26089 11 8.1516 11 8.04231C11 7.9333 10.9585 7.82444 10.8755 7.74117L5.80187 2.65332C5.72199 2.57303 5.61328 2.52798 5.50001 2.52798C5.38675 2.52798 5.27817 2.57316 5.19814 2.65332Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1087_3677">
              <rect
                width="11"
                height="11"
                fill="white"
                transform="translate(0 11) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Footer;
