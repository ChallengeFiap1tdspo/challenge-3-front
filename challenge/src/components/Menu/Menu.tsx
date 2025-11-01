import { NavLink } from "react-router-dom";
import logo from "../../img/logo_sem_fundo.png";

export interface NavLinkItem {
  href: string;
  label: string;
}

interface MenuProps {
  links: NavLinkItem[];
  onItemClick?: () => void;
  orientation?: "horizontal" | "vertical";
}

export default function Menu({ links, onItemClick, orientation = "horizontal" }: MenuProps) {
  const layoutClasses = {
    horizontal: "bg-white text-[#005b96] py-4 flex items-center justify-start px-8 shadow-md",
    vertical: "bg-white text-[#005b96] py-4 flex flex-col items-start px-4 shadow-md",
  };

  const linksContainer = {
    horizontal: "flex gap-6 items-center",
    vertical: "flex flex-col gap-2 w-full",
  };

  return (
    <nav className={layoutClasses[orientation]}>
      <div className="flex items-center gap-8 w-full">
        <img src={logo} alt="Logo" className="h-10 w-auto" />

        <div className={linksContainer[orientation]}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end
              onClick={onItemClick}
              className={({ isActive }) =>
                // Tailwind classes inline; active gets background + white text
                `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-white bg-[#005b96] shadow-md"
                    : "text-[#005b96] hover:text-gray-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
