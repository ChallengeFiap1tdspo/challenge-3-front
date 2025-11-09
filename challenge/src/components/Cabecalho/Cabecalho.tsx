import Menu from "../Menu/Menu";
import type { NavLinkItem } from "../../types/menu";

export default function Cabecalho() {
  const links: NavLinkItem[] = [
    { href: "/", label: "Home" },
    { href: "/faq", label: "FAQ" },
    { href: "/contato", label: "Contato" },
    { href: "/equipe", label: "Equipe" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header>
      <Menu links={links} />
    </header>
  );
}
