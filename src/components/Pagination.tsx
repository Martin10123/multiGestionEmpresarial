import {
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PaginationProps<T> {
  data: T[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (value: number) => void;
}

export const Pagination = <T,>({
  data,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps<T>) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const visiblePages = Array.from(
    { length: Math.min(totalPages, 5) },
    (_, i) => i + 1 + Math.max(currentPage - 3, 0)
  ).filter((page) => page >= 1 && page <= totalPages);

  return (
    <nav className="flex flex-col gap-2 justify-between mt-4 w-full overflow-hidden md1:flex-row md1:items-center md1:justify-between">
      <div className="flex items-center justify-between w-full gap-2 md1:justify-start">
        <span className="text-sm text-white text-center">
          {currentPage} de {totalPages} pag. | {data.length} resultados
        </span>

        <select
          className="text-sm p-1 px-2 bg-transparent border border-tertiary rounded-lg focus:outline-none focus:ring-0"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <ul className="flex w-full justify-between">
        <li className="flex-1">
          <button
            className="w-full px-3 py-2 border border-tertiary rounded text-sm h-full flex items-center justify-center"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
        </li>
        {visiblePages.map((page) => (
          <li key={page} className="flex-1">
            <button
              className={`w-full px-3 py-2 border border-tertiary rounded text-sm ${
                page === currentPage ? "bg-tertiary text-white" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="flex-1">
          <button
            className="w-full px-3 py-2 border border-tertiary rounded text-sm h-full flex items-center justify-center"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};
