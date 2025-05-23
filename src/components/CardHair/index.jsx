import { useState } from "react";

// import "./styled.css";
import { IoIosTime } from "react-icons/io";

export function CardHair() {
  return (
    <form className="w-full bg-white px-5 py-5 rounded-xl shadow-sm">
      <div>
        <strong className="flex justify-between ">
          <h2 className="text-colorTitles text-xl font-bold">Sealing</h2>{" "}
          <p className="text-colorTitles font-bold mb-4">R$ 400</p>
        </strong>
        <p className=" text-colorTitles">first sealing</p>
      </div>

      <div className="flex gap-3 flex-wrap mt-4">
        <label className="time cursor-pointer ">
          <input
            className="hidden peer"
            type="radio"
            name="option"
            value={1}
            // checked
          />
          <div className="flex justify-center items-center w-12.5 h-7.5 border-2 border-backgroundButtons peer-checked:bg-backgroundButtons peer-checked:text-white rounded-md">
            8:30
          </div>
        </label>

        <label className="time cursor-pointer">
          <input
            className="hidden peer"
            type="radio"
            name="option"
            value={2}
            // checked
          />
          <div className="flex justify-center items-center w-12.5 h-7.5 border-2 border-backgroundButtons peer-checked:bg-backgroundButtons peer-checked:text-white rounded-md">
            9:30
          </div>
        </label>

        <label className="time cursor-pointer">
          <input
            className="hidden peer"
            type="radio"
            name="option"
            value={3}
            // checked
          />
          <div className="flex justify-center items-center w-12.5 h-7.5 border-2 border-backgroundButtons peer-checked:bg-backgroundButtons peer-checked:text-white rounded-md">
            10:30
          </div>
        </label>

        <label className="time cursor-pointer">
          <input
            className="hidden peer"
            type="radio"
            name="option"
            value={4}
            // checked
          />
          <div className="flex justify-center items-center w-12.5 h-7.5 border-2 border-backgroundButtons peer-checked:bg-backgroundButtons peer-checked:text-white rounded-md">
            11:30
          </div>
        </label>

        <label className="time cursor-pointer">
          <input
            className="hidden peer"
            type="radio"
            name="option"
            value={1}
            // checked
          />
          <div className="flex justify-center items-center w-12.5 h-7.5 border-2 border-backgroundButtons peer-checked:bg-backgroundButtons peer-checked:text-white rounded-md">
            12:30
          </div>
        </label>
      </div>

      <div className="flex justify-between w-full mt-4">
        <button
          onClick={() => alert("agendamento concluído com sucesso! ")}
          type="submit"
          className="h-7  px-4 rounded-xl bg-backgroundButtons text-white "
        >
          to schedule
        </button>

        <p className="flex items-center gap-1 text-xs text-backgroundButtons">
          <IoIosTime color="#000" /> Time: 40 minutes
        </p>
      </div>
    </form>
  );
}
