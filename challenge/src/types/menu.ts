
export interface NavLinkItem {
  href: string;
  label: string;
}

export interface MenuProps {
  links?: NavLinkItem[];
  onItemClick?: () => void;
}
