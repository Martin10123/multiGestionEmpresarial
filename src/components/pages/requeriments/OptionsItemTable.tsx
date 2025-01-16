import { RowTableColumn } from "@/data/columnTableFake";
import { useCloseModal } from "@/hooks/useCloseClickOutside";
import { Row } from "@tanstack/react-table";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

export const OptionsItemTable = ({ row }: { row: Row<RowTableColumn> }) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const refDropdown = useCloseModal<HTMLDivElement>(() =>
    setOpenDropdownId(null)
  );

  const handleOpenDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex items-center p-0.5 text-sm font-medium text-center rounded-lg"
        type="button"
        onClick={() => handleOpenDropdown(row.original.taxiID)}
      >
        <FaEllipsisH />
      </button>

      {openDropdownId === row.original.taxiID && (
        <div
          className="absolute right-0 top-5 bg-white border border-gray-200 rounded-lg shadow-lg w-48 z-[999]"
          ref={refDropdown}
        >
          <button className="w-full text-start px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-lg">
            Ver
          </button>
          <button className="w-full text-start px-4 py-2 text-sm text-tertiary rounded-lg hover:bg-tertiary hover:text-white duration-100">
            Editar
          </button>
          <button className="w-full text-start px-4 py-2 text-sm text-red-500 rounded-lg hover:bg-red-600 hover:text-white duration-100">
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
};
