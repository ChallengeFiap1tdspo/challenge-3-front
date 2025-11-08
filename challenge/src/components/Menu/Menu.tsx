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
}

export default function Menu({ links = [], onItemClick }: MenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-[#005b96] shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex md:items-center md:gap-6">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end
              onClick={() => onItemClick?.()}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive ? "text-white bg-[#1e4ed8] shadow-md" : "text-[#005b96] hover:text-gray-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005b96]"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6L18 18" stroke="#005b96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 18L18 6" stroke="#005b96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6h18" stroke="#005b96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12h18" stroke="#005b96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18h18" stroke="#005b96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 px-4 pb-4">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                end
                onClick={() => {
                  setOpen(false);
                  onItemClick?.();
                }}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? "text-white bg-[#1e4ed8]" : "text-[#005b96] hover:text-gray-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
