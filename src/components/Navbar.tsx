import { IconShoppingCart } from "@tabler/icons-react";

export const Navbar = () => {
  interface NavLinkType {
    name: string;
    path: string;
  }

  const navLinks: NavLinkType[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Contact",
      path: "/contact",
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
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  className="text-sm text-[#373A40] font-quicksand font-medium"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-6 text-sm">
          <a href="/" className="text-orange-600 font-medium font-quicksand">
            Sign in
          </a>
          <button>
            <IconShoppingCart stroke={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};
