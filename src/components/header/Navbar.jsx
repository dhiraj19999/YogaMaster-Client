import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructors", route: "/instructors" },
  { name: "Classes", route: "/classes" },
];

const Navbar = () => {
  const [navBG, setNavBG] = useState("bg-[#15151580");
  return (
    <>
      <nav>
        <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
          <div className="px-4 py-4 flex items-center justify-center">
            {/* logo */}
            <div>
              <h1 className="text-2xl inline-flex gap-3 items-center font-bold">
                YogaMaster{" "}
                <img src={"../yoga-logo.png"} className="w-12 h-12" />
              </h1>
              <p className="font-bold text-[13px] tracking-[8px]">
                Quick Explore
              </p>
            </div>
            {/* Moboile menu icons  */}

            {/* Navigational Links */}
            <div className="hidden md:block text-black dark:text-white">
              <div className="flex">
                <ul className="ml-10 flex items-center space-x-4 pr-4">
                  {navLinks.map((Link) => (
                    <li key={Link.route}>
                      <NavLink
                        to={Link.route}
                        className={({ isActive }) =>
                          `font-bold ${
                            isActive
                              ? "text-secondary"
                              : `${
                                  navBG.includes("bg-transparent")
                                    ? "text-white"
                                    : "text-black  dark:text-white"
                                }`
                          }hover:text-secondary duration-300`
                        }
                      >
                        {Link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
