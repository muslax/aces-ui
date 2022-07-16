import { ReactNode } from "react";
import { Aperture } from "tabler-icons-react";

export interface LinkProps {
  href: string;
  label: string;
  icon?: ReactNode;
}

export type MenuType = "default" | "recruitment";

export const AcesMenu: LinkProps[] = [
  {
    href: "/projects",
    label: "Projects",
    icon: <Aperture size={18} />,
  },
  {
    href: "/clients",
    label: "Clients",
    icon: <Aperture size={18} />,
  },
  {
    href: "/billing",
    label: "Billing",
    icon: <Aperture size={18} />,
  },
  {
    href: "settings",
    label: "Settings",
    icon: <Aperture size={18} />,
  },
];

export const RecruitmentMenu: LinkProps[] = [
  {
    href: "/pro",
    label: "Overview",
    icon: <Aperture size={18} />,
  },
  {
    href: "/pro/setup",
    label: "Setup",
    icon: <Aperture size={18} />,
  },
  {
    href: "/pro/pendaftaran",
    label: "Pendaftaran",
    icon: <Aperture size={18} />,
  },
  {
    href: "/pro/seleksi",
    label: "Seleksi",
    icon: <Aperture size={18} />,
  },
  {
    href: "/pro/interview",
    label: "Wawancara",
    icon: <Aperture size={18} />,
  },
  {
    href: "/pro/report",
    label: "Laporan",
    icon: <Aperture size={18} />,
  },
  {
    href: "/pro/billing",
    label: "Billing",
    icon: <Aperture size={18} />,
  },
];
