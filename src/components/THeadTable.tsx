import { flexRender, Header } from "@tanstack/react-table";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface THeadTableProps<T> {
  column: Header<T, unknown>;
}

export const THeadTable = <T,>({ column }: THeadTableProps<T>) => {
  const sortDirection = column.column.getIsSorted();
  const sortIcon =
    sortDirection === "asc" ? (
      <MdKeyboardArrowUp className="text-xl" />
    ) : sortDirection === "desc" ? (
      <MdKeyboardArrowDown className="text-xl" />
    ) : null;

  return (
    <th
      key={column.id}
      className="px-6 py-3 border-b border-gray-200"
      onClick={column.column.getToggleSortingHandler()}
    >
      <div className="flex items-center justify-center gap-1 cursor-pointer">
        {flexRender(column.column.columnDef.header, column.getContext())}
        {sortIcon}
      </div>
    </th>
  );
};
