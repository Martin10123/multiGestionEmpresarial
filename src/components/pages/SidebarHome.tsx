import { useState } from "react";
import { sidebarOptions } from "../../data/sidebarOptions";
import { logoEmpresa } from "../../images";
import { ItemsSidebar } from "./ItemsSidebar";
import { HiMenuAlt3 } from "react-icons/hi";
import clsx from "clsx";

interface SidebarHomeProps {
  openSidebar: boolean;
  handleToggleSidebar: () => void;
}

export const SidebarHome = ({
  openSidebar,
  handleToggleSidebar,
}: SidebarHomeProps) => {
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
      className={clsx(
        "w-full h-full flex flex-col fixed top-0 left-0 z-[9999] bg-tertiary overflow-auto duration-300 min-w-max transform transition-all md1:sticky md1:top-[4.55rem] md1:h-[calc(100vh-73px)] md1:translate-x-0 md1:transform-none",
        {
          "md1:max-w-[22rem]": expandedSidebar,
          "md1:w-max": !expandedSidebar,
          "translate-x-0": openSidebar,
          "-translate-x-full": !openSidebar,
        }
      )}
    >
      <div className="flex justify-between p-4 bg-quaternary sticky top-0 z-50 md1:bg-transparent md1:hidden">
        <img
          className="size-10 object-cover rounded-full cursor-pointer"
          src={logoEmpresa}
          alt="Imagen principal"
        />
        <button
          type="button"
          className="text-gray-400 bg-transparent p-2 inline-flex items-center"
          onClick={handleToggleSidebar}
        >
          <HiMenuAlt3 className="size-8 fill-white" />
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      <div className="hidden md1:flex w-full justify-end px-2">
        <button
          type="button"
          className="text-gray-400 bg-transparent p-2 inline-flex items-center"
          onClick={handleToggleOpenSidebar}
        >
          <HiMenuAlt3 className="size-8 fill-white" />
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      <div className="w-full h-full p-4 overflow-auto relative z-50">
        <ul className="flex flex-col gap-2 text-white">
          {sidebarOptions.map((opcion) => (
            <ItemsSidebar
              key={opcion.name}
              expanded={expanded}
              handleToggle={handleToggle}
              option={opcion}
              expandedSidebar={expandedSidebar}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};
