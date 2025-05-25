import { useRef } from "react";

import { Link } from "react-router-dom";
import { CardHair } from "../../components/CardHair";

// icons
import { FiSearch } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export function AllServices() {
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
    <div className="flex flex-col gap-4 w-full max-w-2xl min-h-screen px-5 py-5 mx-auto bg-background">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-2xl font-bold px-1.5 text-center">All Services</h1>
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
      {/* hair */}
      <div className="flex flex-col items-center w-full rounded-xl px-4 py-3 bg-white shadow-lg duration-1000 ">
        <h1 className="text-xl font-bold px-1.5 text-center text-colorTitles mb-1">
          Hair
        </h1>
        <div className="flex flex-col gap-2 w-full ">
          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Women's cut
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Brush / Modeling brush
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Hydration / Nutrition / Hair reconstruction
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Brush / Modeling brush
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Party hairstyles
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Treatments for hair loss or strengthening
            </p>
          </div>
        </div>
      </div>
      {/* Makeup */}
      <div className="flex flex-col items-center w-full rounded-xl px-4 py-3 bg-white shadow-lg">
        <h1 className="text-xl font-bold px-1.5 text-center text-colorTitles mb-1">
          Makeup
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Social makeup (day, night)
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Makeup for brides, parties, events
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Self-makeup (classes)
            </p>
          </div>
        </div>
      </div>
      {/* Eyebrows and eyelashes */}
      <div className="flex flex-col items-center w-full rounded-xl px-4 py-3 bg-white shadow-lg">
        <h1 className="text-xl font-bold px-1.5 text-center text-colorTitles mb-1">
          Eyebrows and eyelashes
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Eyebrow design
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Henna for eyebrows
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Micropigmentation
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Eyelash extension (lash by lash, Russian volume)
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Lash lifting (eyelash curling)
            </p>
          </div>
        </div>
      </div>
      {/* Facial aesthetics */}
      <div className="flex flex-col items-center w-full rounded-xl px-4 py-3 bg-white shadow-lg duration-1000">
        <h1 className="text-xl font-bold px-1.5 text-center text-colorTitles mb-1">
          Facial aesthetics
        </h1>
        <div className="flex flex-col gap-2 w-full ">
          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Skin cleaning
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Peeling (chemical, diamond, etc.)
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Facial hydration
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Anti-acne, anti-aging treatments
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Facial massage / lymphatic drainage
            </p>
          </div>
        </div>
      </div>

      {/* Body aesthetics */}
      <div className="flex flex-col items-center w-full rounded-xl px-4 py-3 bg-white shadow-lg duration-1000">
        <h1 className="text-xl font-bold px-1.5 text-center text-colorTitles mb-1">
          Body aesthetics
        </h1>
        <div className="flex flex-col gap-2 w-full ">
          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Hair removal (hot, cold, Egyptian, laser wax)
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Modeling / relaxing massage
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Body lymphatic drainage
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Treatments for cellulite, localized fat and stretch marks
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Artificial tanning
            </p>
          </div>
        </div>
      </div>
      {/* Services for Brides and Events */}
      <div className="flex flex-col items-center w-full rounded-xl px-4 py-3 bg-white shadow-lg duration-1000">
        <h1 className="text-xl font-bold px-1.5 text-center text-colorTitles mb-1">
          Services for Brides and Events
        </h1>
        <div className="flex flex-col gap-2 w-full ">
          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Bridal Day (Full Package)
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Production for bridesmaids, debutantes, graduates
            </p>
          </div>

          <div className="w-full bg-backgroundButtons px-2 py-1.5 rounded-xl">
            <p className="text-xs text-white font-semibold text-center">
              Consultoria de imagem e estilo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
