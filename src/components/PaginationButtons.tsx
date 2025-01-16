import { Table } from "@tanstack/react-table";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PaginationButtonsProps<T> {
  table: Table<T>;
}

export const PaginationButtons = <T,>({ table }: PaginationButtonsProps<T>) => {
  const isCanPreviousPage = table.getCanPreviousPage()
    ? "pointer-events-auto opacity-100"
    : "pointer-events-none opacity-50";
  const isCanNextPage = table.getCanNextPage()
    ? "pointer-events-auto opacity-100"
    : "pointer-events-none opacity-50";

  return (
    <div className="p-4 flex flex-col justify-center items-center gap-4 md1:flex-row">
      <div className="w-full flex justify-center items-center gap-4">
        <button
          className={`text-2xl ${isCanPreviousPage}`}
          onClick={() => table.setPageIndex(0)}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button
          className={`text-2xl ${isCanPreviousPage}`}
          onClick={() => table.previousPage()}
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          className={`text-2xl ${isCanNextPage}`}
          onClick={() => table.nextPage()}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          className={`text-2xl ${isCanNextPage}`}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>

      <div className="w-full flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-white text-sm">Ir a la página:</p>
          <input
            className="w-16 p-1 border rounded bg-quaternary border-quaternary"
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </div>

        <select
          className="p-1 border rounded bg-quaternary border-quaternary"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
