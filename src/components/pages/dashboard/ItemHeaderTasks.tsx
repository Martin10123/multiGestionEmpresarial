interface ItemHeaderTasksProps {
  path: string;
  title: string;
  total: string;
}

export const ItemHeaderTasks = ({
  path,
  title,
  total,
}: ItemHeaderTasksProps) => {
  return (
    <div className="flex gap-4">
      <figure className="size-11 p-3 flex justify-center items-center rounded-full bg-tertiary lg:size-12">
        <img className="size-full" src={path} alt={title} />
      </figure>
      <div>
        <p className="text-base font-semibold text-quinary">{title}</p>
        <p className="text-sm font-bold text-black">{total}</p>
      </div>
    </div>
  );
};
