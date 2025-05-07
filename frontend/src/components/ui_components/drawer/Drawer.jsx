import SearchInput from "../../ui_components/SearchInput";
import DrawerMenu from "../drawer/DrawerMenu";

const Drawer = ({ content, filterProps }) => {
  return (
    <div className="drawer drawer-end lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <div className="flex flex-row flex-nowrap lg:hidden p-4 gap-4 sticky top-0 z-10 bg-base-100 w-full justify-between">
          <div className="flex flex-row flex-nowrap gap-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button grow-0"
            >
              <svg
                className="fill-primary-content"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
              </svg>
            </label>
            <SearchInput
              value={filterProps.searchQuery}
              onChange={filterProps.onSearchChange}
            />
          </div>
          <a href="#top" className="btn btn-circle btn-outline btn-primary">
            <svg
              className="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
            </svg>
          </a>
        </div>
        {/* Page content goes here */}
        {content}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <DrawerMenu
          categories={filterProps.categories}
          categoryFilters={filterProps.categoryFilters}
          onCategoryChange={filterProps.onCategoryChange}
          searchQuery={filterProps.searchQuery}
          onSearchChange={filterProps.onSearchChange}
        />
      </div>
    </div>
  );
};

export default Drawer;
