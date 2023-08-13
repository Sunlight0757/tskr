import { useRef, useState, useEffect } from "react";

const Segmented = ({ name, value, onChange, segments, controlRef }) => {
  const componentReady = useRef();

  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    const activeSegmentRef = segments[value].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [value, segments, controlRef]);

  return (
    <div
      className={`inline-flex justify-between text-sm leading-7 mb-9 rounded-full bg-[#FFEDE8] px-3 py-[9px] relative before:content-[''] before:bg-white before:rounded-full before:w-[--highlight-width] before:translate-x-[--highlight-x-pos] before:absolute before:left-0 before:inset-y-2 ${
        componentReady.current
          ? "before:transition-transform before:duration-300 before:ease-[ease]"
          : ""
      }`}
      ref={controlRef}
    >
      {segments.map((item, i) => (
        <div
          key={item.value}
          className={"relative text-center z-[1] px-[35px] py-1"}
          ref={item.ref}
        >
          <input
            type="radio"
            value={item.value}
            id={item.label}
            name={name}
            onChange={onChange}
            checked={i === value}
            className="opacity-0 absolute w-full cursor-pointer h-full m-0 inset-0"
          />
          <label
            htmlFor={item.label}
            className={`transition-all duration-500 ease-[ease] ${
              i === value
                ? "text-[#222] font-normal"
                : "text-[#1F4B3F] font-medium"
            }`}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Segmented;
