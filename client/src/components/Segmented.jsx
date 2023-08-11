import { useRef, useState, useEffect } from "react";

const Segmented = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const componentReady = useRef();

  useEffect(() => {
    componentReady.current = true;
  }, []);

  const onInputChange = (value, index) => {
    setActiveIndex(index);
    callback(value, index);
  };

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [activeIndex, callback, segments, controlRef]);

  return (
    <div
      className={`controls inline-flex justify-between text-sm leading-7 mb-9 rounded-full bg-[#FFEDE8] px-3 py-2 relative before:content-[''] before:bg-white before:rounded-full before:w-[--highlight-width] before:translate-x-[--highlight-x-pos] before:absolute before:left-0 before:inset-y-2 ${
        componentReady.current
          ? "before:transition-transform before:duration-300 before:ease-[ease]"
          : ""
      }`}
      ref={controlRef}
    >
      {segments.map((item, i) => (
        <div
          key={item.value}
          className={"min-w-[120px] relative text-center z-[1] px-9 py-1"}
          ref={item.ref}
        >
          <input
            type="radio"
            value={item.value}
            id={item.label}
            name={name}
            onChange={() => onInputChange(item.value, i)}
            checked={i === activeIndex}
            className="opacity-0 absolute w-full cursor-pointer h-full m-0 inset-0"
          />
          <label
            htmlFor={item.label}
            className={`cursor-pointer block font-medium relative transition-[color] duration-[0.5s] ease-[ease]`}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Segmented;
