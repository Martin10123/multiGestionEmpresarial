export type FilterValues = {
  label: string;
  count: number;
};

export type FilterByType = {
  title: string;
  items: FilterValues[];
  classNameDrop?: string;
  isOpen: boolean;
  toggleDropdown: () => void;
};
