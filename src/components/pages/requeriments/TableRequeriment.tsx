import { DataFakeInterfa } from "@/data/dataFakeTable";
import { useCloseModal } from "@/hooks/useCloseClickOutside";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

export const TableRequeriment = ({ data }: { data: DataFakeInterfa[] }) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const refDropdown = useCloseModal<HTMLDivElement>(() =>
    setOpenDropdownId(null)
  );

  const handleOpenDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full text-sm text-left text-black">
        <thead className="text-xs uppercase bg-tertiary text-white">
          <tr>
            <th scope="col" className="px-4 py-3">
              Requerimiento
            </th>
            <th scope="col" className="px-4 py-3">
              Descripción
            </th>
            <th scope="col" className="px-4 py-3">
              Categoria
            </th>
            <th scope="col" className="px-4 py-3">
              Prioridad
            </th>
            <th scope="col" className="px-4 py-3">
              Responsable
            </th>
            <th scope="col" className="px-4 py-3">
              Fecha de creación
            </th>
            <th scope="col" className="px-4 py-3">
              Estado
            </th>
            <th scope="col" className="px-4 py-3">
              Fecha límite
            </th>
            <th scope="col" className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="px-6 py-4 font-medium whitespace-nowrap">
                {item.requeriment}
              </td>
              <td className="px-4 py-3 md1:py-6">{item.description}</td>
              <td className="px-4 py-3 md1:py-6">{item.category}</td>
              <td className="px-4 py-3 md1:py-6">{item.priority}</td>
              <td className="px-4 py-3 md1:py-6">{item.responsible}</td>
              <td className="px-4 py-3 md1:py-6">{item.dateCreation}</td>
              <td className="px-4 py-3 md1:py-6">{item.state}</td>
              <td className="px-4 py-3 md1:py-6">{item.deadline}</td>
              <td className="px-4 py-3 md1:py-6">
                <div className="relative inline-block text-left">
                  <button
                    className="inline-flex items-center p-0.5 text-sm font-medium text-center rounded-lg"
                    type="button"
                    onClick={() => handleOpenDropdown(item.requeriment)}
                  >
                    <FaEllipsisH />
                  </button>

                  {openDropdownId === item.requeriment && (
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
