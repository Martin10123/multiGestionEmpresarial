import { SearchTable } from "./SearchTable";

export const TableDashboard = () => {
  return (
    <div className="py-6 grid gap-6">
      <SearchTable />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 lg:text-base">
          <tbody>
            <tr className="border-b border-quaternary">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Tarea 1
              </th>
              <td className="px-6 py-4 text-black">
                <div className="flex justify-center items-center gap-2">
                  <svg
                    viewBox="-1.6 -1.6 19.20 19.20"
                    fill="none"
                    width="10px"
                    height="10px"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffa200"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                      <rect
                        x="-1.6"
                        y="-1.6"
                        rx="9.6"
                        fill="#ffa200"
                        strokeWidth="0"
                      ></rect>
                    </g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <circle cx="8" cy="8" r="8" fill="#ffa200"></circle>
                    </g>
                  </svg>
                  <span className="text-black">Finalizado</span>
                </div>
              </td>
              <td className="px-6 py-4 text-black">5h</td>
              <td className="px-6 py-4 text-black text-center">
                <button className="text-black">
                  <svg
                    className="size-6 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3"
                      d="M6 12h.01m6 0h.01m5.99 0h.01"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
