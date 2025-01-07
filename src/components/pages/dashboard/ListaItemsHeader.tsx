import { ItemHeaderTasks } from "./ItemHeaderTasks";

export const ListaItemsHeader = () => {
  return (
    <div className="mt-5 py-6 grid grid-cols-2 border-t border-b border-gray-200 gap-4 lg:grid-cols-4 lg:mt-10">
      <ItemHeaderTasks path="/assets/tarea.svg" title="Tareas" total="50" />

      <ItemHeaderTasks
        path="/assets/finalizados.svg"
        title="Finalizados"
        total="40"
      />

      <ItemHeaderTasks path="/assets/tiempo.svg" title="Tiempo" total="20h" />

      <ItemHeaderTasks
        path="/assets/eficiencia.svg"
        title="Eficiencia"
        total="80%"
      />
    </div>
  );
};
