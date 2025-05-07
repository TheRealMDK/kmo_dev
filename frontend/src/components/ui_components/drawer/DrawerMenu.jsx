import SearchInput from "../../ui_components/SearchInput";

const DrawerMenu = ({
  categories,
  categoryFilters,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <>
      <ul className="flex flex-col p-4 bg-base-200 gap-4 text-base-content min-h-full w-80">
        <div className="hidden lg:block lg:my-2">
          <SearchInput value={searchQuery} onChange={onSearchChange} />
        </div>
        <div className="hidden lg:flex divider p-0 m-0"></div>
        {categories.map((category) => (
          <li key={category} className="flex flex-row justify-between">
            <div className="list-col-grow flex items-center">{category}</div>
            <input
              type="checkbox"
              checked={categoryFilters[category]}
              onChange={() => onCategoryChange(category)}
              className="checkbox checkbox-primary rounded-sm checkbox-sm"
            />
          </li>
        ))}
        <div className="divider p-0 m-0"></div>
      </ul>
    </>
  );
};

export default DrawerMenu;
