import { SelectFiles } from "@/components/SelectFiles";
import { listCategories, typesRequeriments } from "@/data/dataFakeTable";
import { PreviewFile } from "@/interfaces/pages/FilesType";
import { useState } from "react";
import { ListPriorityForm } from "@/components/pages/requeriments/ListPriorityForm";
import { HomeTemplate } from "@/templates/HomeTemplate";

export const AddRequeriment = () => {
  const [previewFiles, setPreviewFiles] = useState<PreviewFile[]>([]);

  return (
    <HomeTemplate>
      <div className="relative p-4 w-full">
        <div className="relative">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-b">
            <h3 className="text-xl font-semibold text-white">
              Agregar requerimiento
            </h3>
          </div>
          <div className="py-4 md:p-5">
            <form className="">
              <div className="grid gap-3 lg:grid-cols-2 lg:gap-6">
                <div className="grid gap-3">
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
                      rows={6}
                    />
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="categoria"
                        className="block text-base font-medium text-black mb-2"
                      >
                        Tipo de requerimiento:
                      </label>
                      <select
                        name="categoria"
                        className="w-full bg-transparent border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary"
                      >
                        <option value="">Seleccione un tipo</option>
                        {typesRequeriments.map((req) => (
                          <option key={req.id} value={req.nombre}>
                            {req.nombre}
                          </option>
                        ))}
                      </select>
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
                        className="w-full bg-transparent border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary"
                      >
                        <option value="">Seleccione una categoría</option>
                        {listCategories.map((cat) => (
                          <option key={cat.id} value={cat.nombre}>
                            {cat.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <ListPriorityForm />

                  <div>
                    <label
                      htmlFor="fechaLimite"
                      className="block text-base font-medium text-black mb-2"
                    >
                      Presupuesto estimado:
                    </label>

                    <input
                      type="number"
                      name=""
                      id=""
                      className="w-full bg-transparent border text-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-quaternary"
                      placeholder="Presupuesto estimado..."
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-3 mt-3 lg:grid-cols-2 lg:gap-6">
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
              </div>

              <div className="grid gap-3 my-3 lg:grid-cols-2 lg:gap-6">
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
                    rows={6}
                  ></textarea>
                </div>

                <SelectFiles
                  previewFiles={previewFiles}
                  setPreviewFiles={setPreviewFiles}
                />
              </div>

              <button
                type="submit"
                className="w-full md1:max-w-[50%] text-white bg-primary hover:opacity-50 duration-150 focus:outline-none font-medium rounded-lg text-sm px-5 py-3.5 text-center"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
};
