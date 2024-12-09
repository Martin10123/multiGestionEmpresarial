import { useState } from "react";
import { sidebarOptions } from "../../data/sidebarOpciones";
import { logoEmpresa } from "../../images";
import { ItemsSidebar } from "./ItemsSidebar";

interface SidebarInicioProps {
  openSidebar: boolean;
  handleToggleSidebar: () => void;
}

export const SidebarInicio = ({
  openSidebar,
  handleToggleSidebar,
}: SidebarInicioProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedSidebar, setExpandedSidebar] = useState<boolean>(true);

  const handleToggle = (nombre: string) => {
    if (nombre === "Dashboard") {
      setExpanded(null);
      return;
    }

    setExpandedSidebar(true);
    setExpanded((prev) => (prev === nombre ? null : nombre));
  };

  const handleToggleOpenSidebar = () => {
    setExpanded(null);
    setExpandedSidebar(!expandedSidebar);
  };

  return (
    <aside
      className={`w-full h-full flex flex-col fixed top-0 left-0 z-[999] bg-tertiary overflow-auto md1:relative md1:h-[calc(100vh-73px)] md1:max-w-[22rem] duration-300 ${
        expandedSidebar ? "md1:max-w-[22rem]" : "md1:w-max"
      } transform ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      } md1:translate-x-0 md1:transform-none`}
    >
      <div className="flex justify-between p-4 bg-quaternary sticky top-0 z-50 md1:bg-transparent md1:hidden">
        <img
          className="size-10 object-cover rounded-full cursor-pointer"
          src={logoEmpresa}
          alt="Imagen principal"
        />

        <button
          type="button"
          className="text-gray-400 bg-transparent p-2 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm inline-flex items-center"
          onClick={handleToggleSidebar}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      <div className="w-full h-full p-4 overflow-auto relative z-50">
        <ul className="flex flex-col gap-2 text-white">
          {sidebarOptions.map((opcion) => (
            <ItemsSidebar
              key={opcion.nombre}
              expanded={expanded}
              handleToggle={handleToggle}
              opcion={opcion}
              expandedSidebar={expandedSidebar}
            />
          ))}
        </ul>
      </div>

      <div
        className={`hidden fixed bg-tertiary rounded-r-full p-1.5 top-1/2 ${
          expandedSidebar ? "left-[21.8rem]" : "left-[4.3rem]"
        } cursor-pointer md1:block`}
        onClick={handleToggleOpenSidebar}
      >
        {!expandedSidebar ? (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        )}
      </div>
    </aside>
  );
};
