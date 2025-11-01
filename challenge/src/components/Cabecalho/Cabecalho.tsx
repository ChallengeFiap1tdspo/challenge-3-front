import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo_sem_fundo.png";

export interface NavLinkItem {
  href: string;
  label: string;
}

interface MenuProps {
  links?: NavLinkItem[];
  onItemClick?: () => void;
  orientation?: "horizontal" | "vertical";
}

export default function Menu({ links = [], onItemClick, orientation = "horizontal" }: MenuProps) {
  const [open, setOpen] = useState(false);

  const layoutClasses = {
    horizontal: "bg-white text-[#005b96] py-4 flex items-center justify-start px-4 md:px-8 shadow-md",
    vertical: "bg-white text-[#005b96] py-4 flex flex-col items-start px-4 shadow-md",
  };

  const linksContainer = {
    horizontal: `flex gap-6 items-center ${open ? "block" : "hidden"} md:flex`,
    vertical: "flex flex-col gap-2 w-full",
  };

  return (
    <nav className={layoutClasses[orientation]}>
      <div className="flex items-center gap-4 w-full">
        <img src={logo} alt="Logo" className="h-10 w-auto" />

    
        <button
          className="md:hidden ml-auto p-2 rounded-md focus:outline-none"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <div className="w-6 h-0.5 mb-1 bg-[#005b96]" />
          <div className="w-6 h-0.5 mb-1 bg-[#005b96]" />
          <div className="w-6 h-0.5 bg-[#005b96]" />
        </button>

        <div className={linksContainer[orientation]}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end
              className={({ isActive }) =>
                `relative px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive ? "text-white bg-[#005b96] shadow-md" : "text-[#005b96] hover:text-gray-400"
                }`
              }
              onClick={() => {
                onItemClick?.();
                setOpen(false); 
              }}
            >
              {({ isActive }: { isActive: boolean }) => (
                <>
                  <span className="block">{link.label}</span>
                  <span
                    aria-hidden
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 transition-all ${
                      isActive ? "w-8 bg-[#004b7a]" : "w-0 bg-transparent"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
