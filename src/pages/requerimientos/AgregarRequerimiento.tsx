import { SelectFiles } from "@/components/SelectFiles";
import { useDisableScroll } from "@/hooks/useDisabledScroll";
import { PreviewFile } from "@/interfaces/pages/FilesType";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const categories = ["Técnico", "Financiero", "Humano", "Legal", "Operativo"];

interface AgregarRequerimientoProps {
  handleOpenAddRequeriment: () => void;
}

export const AgregarRequerimiento = ({
  handleOpenAddRequeriment,
}: AgregarRequerimientoProps) => {
  useDisableScroll(true);

  const [previewFiles, setPreviewFiles] = useState<PreviewFile[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(handleOpenAddRequeriment, 50);
  };

  return (
    <div
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[99999] flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full
        ${
          isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-200 ease-in-out
      `}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 -z-50 w-full h-screen top-0 right-0 backdrop-blur-sm"></div>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-tertiary rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-white">
              Agregar requerimiento
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleClose}
            >
              <IoClose className="size-6" />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <form className="space-y-2">
              <div>
                <label
                  htmlFor="titulo"
                  className="block text-base font-medium text-black mb-2"
                >
                  Título
                </label>
                <input
                  type="text"
                  name="titulo"
                  className="w-full bg-transparent border text-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary"
                  placeholder="Título..."
                />
              </div>

              <div>
                <label
                  htmlFor="descripcion"
                  className="block text-base font-medium text-black mb-2"
                >
                  Descripción
                </label>
                <textarea
                  name="descripcion"
                  className="w-full bg-transparent border text-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary resize-none"
                  placeholder="Descripción..."
                  rows={4}
                />
              </div>

              <div>
                <label
                  htmlFor="categoria"
                  className="block text-base font-medium text-black mb-2"
                >
                  Categoría:
                </label>
                <select
                  name="categoria"
                  className="w-full bg-transparent border text-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary"
                >
                  <option value="">Seleccione una categoría</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-base font-medium text-black mb-2">
                  Prioridad:
                </label>
                <ul className="flex flex-col sm:flex-row">
                  <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg w-full">
                    <div className="relative flex items-start w-full">
                      <div className="flex items-center h-5">
                        <input
                          id="hs-horizontal-list-group-item-radio-1"
                          name="hs-horizontal-list-group-item-radio"
                          type="radio"
                          className="border-gray-200 rounded-full disabled:opacity-50"
                        />
                      </div>
                      <label
                        htmlFor="hs-horizontal-list-group-item-radio-1"
                        className="ms-3 block w-full text-sm text-black"
                      >
                        Prioridad alta
                      </label>
                    </div>
                  </li>

                  <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg w-full">
                    <div className="relative flex items-start w-full">
                      <div className="flex items-center h-5">
                        <input
                          id="hs-horizontal-list-group-item-radio-2"
                          name="hs-horizontal-list-group-item-radio"
                          type="radio"
                          className="border-gray-200 rounded-full disabled:opacity-50"
                        />
                      </div>
                      <label
                        htmlFor="hs-horizontal-list-group-item-radio-2"
                        className="ms-3 block w-full text-sm text-black"
                      >
                        Prioridad media
                      </label>
                    </div>
                  </li>

                  <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg w-full">
                    <div className="relative flex items-start w-full">
                      <div className="flex items-center h-5">
                        <input
                          id="hs-horizontal-list-group-item-radio-3"
                          name="hs-horizontal-list-group-item-radio"
                          type="radio"
                          className="border-gray-200 rounded-full disabled:opacity-50"
                        />
                      </div>
                      <label
                        htmlFor="hs-horizontal-list-group-item-radio-3"
                        className="ms-3 block w-full text-sm text-black"
                      >
                        Prioridad baja
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <label
                  htmlFor="fechaLimite"
                  className="block text-base font-medium text-black mb-2"
                >
                  Fecha límite o de cumplimiento:
                </label>

                <input
                  type="date"
                  name=""
                  id=""
                  className="w-full bg-transparent border text-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary"
                  placeholder="Fecha límite..."
                />
              </div>

              <div>
                <label
                  htmlFor="fechaLimite"
                  className="block text-base font-medium text-black mb-2"
                >
                  Responsable asignado:
                </label>
                <input
                  type="text"
                  name="responsable"
                  className="w-full bg-transparent border text-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary"
                  placeholder="Responsable..."
                />
              </div>

              <div>
                <label
                  htmlFor="recursos"
                  className="block text-base font-medium text-black mb-2"
                >
                  Recursos estimados
                </label>
                <textarea
                  name="recursos"
                  className="w-full bg-transparent border text-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary resize-none"
                  placeholder="Recursos estimados..."
                  rows={4}
                ></textarea>
              </div>

              <SelectFiles
                previewFiles={previewFiles}
                setPreviewFiles={setPreviewFiles}
              />

              <button
                type="submit"
                className="w-full text-white bg-primary hover:opacity-50 duration-150 focus:outline-none font-medium rounded-lg text-sm px-5 py-3.5 text-center"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
