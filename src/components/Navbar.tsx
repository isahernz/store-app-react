import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-white shadow h-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-full">
        <div className="flex items-center  gap-x-12">
          <a href="/">
            <span className="text-xl font-black text-orange-600">Rinban</span>
          </a>

          <ul className="flex items-center gap-x-4">
            {navLinks.map(({ name, href }) => (
              <li>
                <a
                  href={href}
                  className="text-sm text-[#373A40] font-quicksand"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-4 text-sm">
          <button>My Cart</button>
        </div>
      </div>
    </nav>
  );
};
