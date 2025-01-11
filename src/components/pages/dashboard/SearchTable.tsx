export const SearchTable = () => {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <div className="flex flex-col gap-2 md1:flex-row md1:items-center md1:gap-4">
        <h2 className="text-xl border-b border-tertiary font-semibold text-black md1:text-2xl md1:border-b-0 md1:border-r md1:pr-4">
          Tareas actuales
        </h2>

        <p className="text-sm text-center md1:font-semibold ">
          hechas <span>20%</span>
        </p>
      </div>

      <select
        className="border border-tertiary rounded-xl p-2 bg-transparent"
        name="filtro"
        id="filtro"
      >
        <option value="">Todas</option>
        <option value="">Actuales</option>
        <option value="">Finalizadas</option>
        <option value="">Pendientes</option>
      </select>
    </div>
  );
};
