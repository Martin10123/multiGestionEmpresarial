import { FiltrarPor } from "@/components/pages/requerimientos/FiltrarPor";
import { TableRequeriment } from "@/components/pages/requerimientos/TableRequeriment";
import { Pagination } from "@/components/Pagination";
import { dataFake } from "@/data/dataFakeTable";
import {
  listaCategorias,
  listaGrupos,
  listaPrioridades,
} from "@/data/filtrarPor";
import { InicioTemplate } from "@/templates/InicioTemplate";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdAddchart } from "react-icons/md";

export const VerRequerimientos = () => {
  const [dataFakeOption] = useState(dataFake);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginatedData = dataFake.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <InicioTemplate>
      <section className="w-full p-4 md1:p-10 md1:pl-16">
        <div>
          <div className="w-full lg:grid lg:grid-cols-2 lg:gap-4 lg:mb-4">
            <div className="flex items-center mb-4">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoSearchSharp className="size-5 fill-white" />
                </div>
                <input
                  type="text"
                  className="bg-transparent border border-quaternary text-white text-sm rounded-lg block w-full pl-10 p-3 focus:outline-none focus:ring-0 focus:border-white"
                  placeholder="Buscar..."
                />
              </div>
            </div>

            <div className="mb-4 lg:flex lg:items-center lg:justify-end lg:m-0">
              <button
                type="button"
                className="w-full text-white bg-tertiary hover:opacity-50 duration-150 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center justify-center gap-2 lg:w-max"
              >
                <MdAddchart />
                Requerimiento
              </button>

              <div className="flex items-center justify-end gap-2 mt-4 lg:m-0">
                <FiltrarPor
                  title="Elegir grupo"
                  items={listaGrupos}
                  isOpen={openDropdown === "grupo"}
                  toggleDropdown={() => toggleDropdown("grupo")}
                />
                <FiltrarPor
                  title="Prioridad"
                  items={listaPrioridades}
                  isOpen={openDropdown === "prioridad"}
                  toggleDropdown={() => toggleDropdown("prioridad")}
                />
                <FiltrarPor
                  classNameDrop="right-0"
                  title="Categoria"
                  items={listaCategorias}
                  isOpen={openDropdown === "categoria"}
                  toggleDropdown={() => toggleDropdown("categoria")}
                />
              </div>
            </div>
          </div>

          <TableRequeriment data={paginatedData} />

          <Pagination
            data={dataFakeOption}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={onItemsPerPageChange}
          />
        </div>
      </section>
    </InicioTemplate>
  );
};
