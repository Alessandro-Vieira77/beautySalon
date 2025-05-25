import { useRef } from "react";

import { Link } from "react-router-dom";
import { CardHair } from "../../components/CardHair";

// icons
import { FiSearch } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export function CS() {
  const inputRef = useRef(null);

  function handleInput() {
    if (inputRef.current) {
      inputRef.current.style.width = "90%";
      // inputRef.current.style.width = "";
    }
  }

  function remove() {
    if (inputRef.current) {
      inputRef.current.style.width = "48px";
    }
  }

  return (
    <div className="w-full max-w-2xl min-h-screen px-5 py-5 mx-auto bg-background">
      <main className="w-full">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-2xl font-bold px-1.5 text-center">C&S</h1>
          <div className="flex justify-between items-center mb-5 w-full">
            {" "}
            <Link to={"/"}>
              <FaArrowLeft size={18} />
            </Link>{" "}
            <div
              ref={inputRef}
              className="flex flex-row-reverse items-center w-12 h-12 rounded-xl bg-white px-3 shadow-xl duration-1000"
            >
              <button onClick={() => handleInput()} className=" cursor-pointer">
                <FiSearch size={24} />
              </button>{" "}
              <input
                className="w-full pl-2.5 outline-none  "
                type="text"
                placeholder="Do a search..."
              />
              <FaArrowRight onClick={() => remove()} size={18} />
            </div>
          </div>
        </div>

        {/* card */}
        <div className="flex flex-col gap-4">
          <CardHair />
          <CardHair />
          <CardHair />
          <CardHair />
          <CardHair />
          <CardHair />
          <CardHair />
        </div>
      </main>
    </div>
  );
}
