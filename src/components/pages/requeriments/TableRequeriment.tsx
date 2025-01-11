import { DataFakeInterfa } from "@/data/dataFakeTable";
import { FaEllipsisH } from "react-icons/fa";

export const TableRequeriment = ({ data }: { data: DataFakeInterfa[] }) => {
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
                {item.requerimiento}
              </td>
              <td className="px-4 py-3 md1:py-6">{item.descripcion}</td>
              <td className="px-4 py-3 md1:py-6">{item.categoria}</td>
              <td className="px-4 py-3 md1:py-6">{item.prioridad}</td>
              <td className="px-4 py-3 md1:py-6">{item.responsable}</td>
              <td className="px-4 py-3 md1:py-6">{item.fechaCreacion}</td>
              <td className="px-4 py-3 md1:py-6">{item.estado}</td>
              <td className="px-4 py-3 md1:py-6">{item.fechaLimite}</td>
              <td className="px-4 py-3 md1:py-6 flex items-center justify-end">
                <button
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center rounded-lg"
                  type="button"
                >
                  <FaEllipsisH />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
