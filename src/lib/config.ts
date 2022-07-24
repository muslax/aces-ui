import { ReactNode } from "react";

export type PageType =
  | "home"
  | "aces"
  | "dashboard"
  | "partner" // Clients, Settings, Billing
  | "recuitment"
  | "assessment" // Assessment Center and Competence @ Work
  | "custom"; // Non-competence(?) -> Leadership, Personality, Emotional

export interface NavProps {
  href: string;
  label: string;
  icon?: ReactNode;
}
