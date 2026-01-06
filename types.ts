export interface NavItem {
  label: string;
  href: string;
  page?: Page;
  isButton?: boolean;
}

export type SectionType = 'top' | 'bottom' | null;

export type Page = 'home' | 'inglewood' | 'downtown' | 'about' | 'contact';