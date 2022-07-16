import { ReactNode } from 'react';
import { Aperture } from 'tabler-icons-react';

export interface LinkProps {
  href: string;
  label: string;
  hidden: boolean;
  icon?: ReactNode;
}

export type MenuType = 'default' | 'recruitment';

export const RecruitmentMenu: LinkProps[] = [
  { href: '/pro', label: 'Overview', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/setup', label: 'Setup', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/pendaftaran', label: 'Pendaftaran', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/seleksi', label: 'Seleksi', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/interview', label: 'Wawancara', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/report', label: 'Laporan', hidden: false, icon: <Aperture size={18} /> },
  { href: '/pro/billing', label: 'Billing', hidden: false, icon: <Aperture size={18} /> },
];
