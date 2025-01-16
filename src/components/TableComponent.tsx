import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
  SortingState,
} from "@tanstack/react-table";
import { useState, useMemo } from "react";
import { THeadTable } from "./THeadTable";
import { PaginationButtons } from "./PaginationButtons";

interface SimpleTableProps<T> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
  filtering?: string;
  setFiltering?: (value: string) => void;
}

export const TableComponent = <T,>({
  data,
  columns,
  filtering,
  setFiltering,
}: SimpleTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const memorizedColumns = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data,
    columns: memorizedColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="w-full mt-4 rounded-lg shadow-md">
      <div className="relative overflow-x-auto rounded-lg border-tertiary">
        <table className="border-spacing-0 w-full border overflow-x-auto border-collapse border-tertiary">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-tertiary">
                {headerGroup.headers.map((header) => (
                  <THeadTable key={header.id} column={header} />
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-tertiary">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-6 text-center text-gray-700"
                >
                  No encontramos resultados
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-quaternary transition-colors duration-200"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="p-6 border-b border-tertiary text-center"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <PaginationButtons table={table} />
    </div>
  );
};
