const CategoryChip = ({ category }: { category: string }) => {
  return (
    <div className="text-sm bg-lime-700/30 rounded-full px-2 py-1 font-semibold w-min">
      {category}
    </div>
  );
};

export default CategoryChip;
