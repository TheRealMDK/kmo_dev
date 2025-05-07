import { NavLink } from "react-router";
import ThemeSwitch from "../../components/ui_components/ThemeSwitch";

const NavBar = ({ content }) => {
  return (
    <div id="top" className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <a href="/contact" className="btn btn-ghost text-xl">
              KMO Quick Cash
            </a>
          </div>
          <div className="navbar-center">
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal gap-2">
                {/* Navbar menu content here */}
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive ? "menu-active rounded-sm" : "rounded-sm"
                    }
                  >
                    Buy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sell"
                    className={({ isActive }) =>
                      isActive ? "menu-active rounded-sm" : "rounded-sm"
                    }
                  >
                    Sell
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "menu-active rounded-sm" : "rounded-sm"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "menu-active rounded-sm" : "rounded-sm"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end pr-2">
            <ThemeSwitch />
          </div>
        </div>
        {/* Page content goes here */}
        {content}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Mobile Drawer Menu */}
        <ul className="menu bg-base-200 min-h-full w-80 p-4 gap-2">
          {/* Navbar menu content here */}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "menu-active rounded-sm" : "rounded-sm"
              }
            >
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sell"
              className={({ isActive }) =>
                isActive ? "menu-active rounded-sm" : "rounded-sm"
              }
            >
              Sell
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "menu-active rounded-sm" : "rounded-sm"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "menu-active rounded-sm" : "rounded-sm"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
