import { ReactNode } from "react";

export interface IModuleType {
  type:
    | "AIME"
    | "CSI"
    | "LEADERSHIP"
    | "MANAGEMENT_ACTION"
    | "DECISION_MAKING"
    | "EMPOWERMENT"
    | "I360"
    | "GPQ"
    | "G_GATE"
    | "G_MATE"
    | "C_RATE"
    | "INTRAY"
    | "CAN"
    | "BEI"
    | "LGD"
    | "ROLEPLAY"
    | "PRESENTATION";
}

export interface IModule {
  id: IModuleType;
  name: string;
  description: string;
  conflictWith: string | null;
}

export interface IModuleGroup {
  title: string;
  description: string;
  required: boolean;
  modules: string[];
}

export interface IProduct {
  type: "assessment" | "competence" | "recruitment" | "potrev";
  title: string;
  description: string;
  selectionGuide: string;
  minimumModules: number;
  groups: IModuleGroup[];
}
