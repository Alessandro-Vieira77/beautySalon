import { Link } from "react-router-dom";

// icons
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { BsScissors } from "react-icons/bs";
import { GrUserFemale } from "react-icons/gr";
import { GiLipstick } from "react-icons/gi";
import { IoHandLeft } from "react-icons/io5";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="w-full max-w-2xl min-h-screen px-5 py-5 mx-auto bg-background">
      <header>
        <div className="w-full flex items-center gap-4">
          <div className="w-10 h-10  rounded-full">
            <FaUserCircle size={40} />
          </div>
          <p className="font-bold text-3xl text-colorTitles">
            Hello, Alessandro!
          </p>
        </div>
        <p className="text-colorTitles">
          Find the services you need and take care of yourself.
        </p>
      </header>
      <main className="flex flex-col gap-6.5 w-full mt-6.5">
        {/* promotion */}
        <div className="flex flex-col justify-between gap-2.5 w-full bg-white shadow-xl rounded-xl px-5 py-2.5">
          <p className="text-colorSubTitle">above 50%</p>
          <h2 className="text-colorTitles text-xl font-semibold">
            Incredible discounts for you today only.
          </h2>
          <a
            className="w-36 h-8 rounded-xl text-center pt-0.5 bg-backgroundButtons text-white"
            href="#"
          >
            Receive now
          </a>
        </div>

        {/* search */}
        <div className="flex items-center w-full h-12 rounded-xl bg-white px-3 shadow-xl">
          <button
            onClick={() => alert("botão funcionando:)")}
            className=" cursor-pointer"
          >
            <FiSearch size={24} />
          </button>{" "}
          <input
            className="flex-1 pl-2.5 outline-none"
            type="text"
            placeholder="Do a search..."
          />
        </div>
        {/* service */}
        <section className="w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-3xl font-bold text-colorTitles">
              Our services
            </h2>
            <p className="text-base text-colorSubTitle cursor-pointer">
              All services
            </p>
          </div>
          <div className="flex justify-between w-full mt-4">
            <Link
              to={"/hair"}
              className="flex flex-col justify-center items-center gap-2 w-15 sm:w-18.5 h-22 rounded-xl bg-backgroundhair shadow-lg"
            >
              <BsScissors size={22} color="#FFF" />
              <p className="text-white text-sm sm:text-base">hair</p>
            </Link>

            <div className="flex flex-col justify-center items-center gap-2 w-15 sm:w-18.5 h-22 rounded-xl bg-backgroundhair shadow-lg">
              <GiLipstick size={22} color="#FFF" />
              <p className="text-white text-sm   sm:text-base">Makeup</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 w-15 sm:w-18.5 h-22 rounded-xl bg-backgroundhair shadow-lg">
              <GrUserFemale size={22} color="#FFF" />
              <p className="text-white text-sm   sm:text-base">Spa</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-15 sm:w-18.5 h-22 rounded-xl bg-backgroundhair shadow-lg">
              <IoHandLeft size={22} color="#FFF" />
              <p className="text-white text-sm   sm:text-base">Nails</p>
            </div>
          </div>
        </section>

        {/* Popular */}
        <section className="w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-3xl font-bold text-colorTitles">Common</h2>
            <p className="text-base text-colorSubTitle cursor-pointer">
              All services
            </p>
          </div>
          <div className="w-full mt-4">
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}
