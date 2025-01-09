import React from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FilterByType } from "@/interfaces/data/FiltrarPorTipos";

export const FiltrarPor: React.FC<FilterByType> = ({
  title,
  items,
  classNameDrop,
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div className="relative border border-tertiary rounded-lg w-full">
      <div
        className="w-full p-2 flex items-center justify-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <CiFilter />
        <p>Filtrar</p>
        <IoIosArrowDown />
      </div>

      {isOpen && (
        <ul
          className={`w-max p-4 absolute top-12 bg-white border border-tertiary rounded-lg grid gap-1 ${classNameDrop}`}
        >
          <li className="mb-2">
            <span className="block text-base font-medium uppercase text-gray-400">
              {title}
            </span>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <button className="font-semibold">
                {item.label} <span>({item.count})</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
