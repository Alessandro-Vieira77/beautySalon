import image1 from "/img/image1.png";

import { LiaStarSolid } from "react-icons/lia";

import "./styles.css";

export function Card() {
  return (
    <div className="container-card flex gap-6 w-full overflow-x-scroll cursor-pointer">
      <div className="min-w-70 px-2.5 py-2.5 bg-white rounded-xl">
        <img className="w-full h-36" src={image1} alt="" />

        <div className="flex flex-col gap-1.5 w-full">
          <h2 className="font-semibold text-xl">Facial massage</h2>
          <p className="text-colorSubTitle text-base">Expert: Rony Mello</p>
          <div className="flex items-center justify-between w-full ">
            <a
              className="h-7  px-4 rounded-xl bg-backgroundButtons text-white"
              href="#"
            >
              to schedule
            </a>
            <p className="flex gap-1 items-center text-colorSubTitle">
              <LiaStarSolid size={21} color="yellow" /> 315
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-70 px-2.5 py-2.5 bg-white rounded-xl">
        <img className="w-full h-36" src={image1} alt="" />

        <div className="flex flex-col gap-1.5 w-full">
          <h2 className="font-semibold text-xl">Facial massage</h2>
          <p className="text-colorSubTitle text-base">Expert: Rony Mello</p>
          <div className="flex items-center justify-between w-full ">
            <a
              className="h-7  px-4 rounded-xl bg-backgroundButtons text-white"
              href="#"
            >
              to schedule
            </a>
            <p className="flex gap-1 items-center text-colorSubTitle">
              <LiaStarSolid size={21} color="yellow" /> 315
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-70 px-2.5 py-2.5 bg-white rounded-xl">
        <img className="w-full h-36" src={image1} alt="" />

        <div className="flex flex-col gap-1.5 w-full">
          <h2 className="font-semibold text-xl">Facial massage</h2>
          <p className="text-colorSubTitle text-base">Expert: Rony Mello</p>
          <div className="flex items-center justify-between w-full ">
            <a
              className="h-7  px-4 rounded-xl bg-backgroundButtons text-white"
              href="#"
            >
              to schedule
            </a>
            <p className="flex gap-1 items-center text-colorSubTitle">
              <LiaStarSolid size={21} color="yellow" /> 315
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-70 px-2.5 py-2.5 bg-white rounded-xl">
        <img className="w-full h-36" src={image1} alt="" />

        <div className="flex flex-col gap-1.5 w-full">
          <h2 className="font-semibold text-xl">Facial massage</h2>
          <p className="text-colorSubTitle text-base">Expert: Rony Mello</p>
          <div className="flex items-center justify-between w-full ">
            <a
              className="h-7  px-4 rounded-xl bg-backgroundButtons text-white"
              href="#"
            >
              to schedule
            </a>
            <p className="flex gap-1 items-center text-colorSubTitle">
              <LiaStarSolid size={21} color="yellow" /> 315
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
