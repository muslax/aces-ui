import { ReactNode } from "react";

export type ProjectType =
  | "potrev"
  | "recruitment"
  | "competence"
  | "assessment";

export interface AcesModule {
  id: string;
  group: ProjectType;
  name: string;
  description: string | ReactNode;
  tools: string[];
  optional: boolean;
  conflictWith: string | null;
}

export const potrevModules: AcesModule[] = [
  {
    id: "EMG",
    group: "potrev",
    name: "Emotional Management",
    description:
      "Terdiri dari dua jenis tes yaitu AIME (Emotional Management) dan CSI (Coping Management).",
    optional: true,
    conflictWith: null,
    tools: ["AIME", "CSI"],
  },
  {
    id: "PLD",
    group: "potrev",
    name: "Professional Leadership",
    description: `(TODO: fix) Terdiri dari lima jenis tes leadership yaitu:
      Leadership, Management Action, Decision Making, Empowerment, dan 360.`,
    optional: true,
    conflictWith: null,
    tools: ["LDR", "MGA", "DCM", "EMP", "360"],
  },
  {
    id: "PAW",
    group: "potrev",
    name: "Personality @Work",
    description: `(TODO: fix) Boleh ditulis sbg GPQ saja atau tetap
    Personality @Work mengingat GPQ juga ada di tempat lain?`,
    optional: true,
    conflictWith: null,
    tools: ["GPQ"],
  },
];

export const recruitmentModules: AcesModule[] = [
  {
    id: "GGATE",
    group: "recruitment",
    name: "G-Gate (Gaia ...)",
    description: `Lorem ipsum keterangan untuk tes G-Gate`,
    optional: false,
    conflictWith: null,
    tools: ["G-GATE"],
  },
  {
    id: "GPQ",
    group: "recruitment",
    name: "GPG (Gaia ...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes GPQ`,
    optional: false,
    conflictWith: null,
    tools: ["GPQ"],
  },
  {
    id: "BEI",
    group: "recruitment",
    name: "Wawancara (atau BEI?)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes Wawancara`,
    optional: true,
    conflictWith: null,
    tools: ["GPQ"],
  },
  {
    id: "LGD",
    group: "recruitment",
    name: "LGD (Leaderless Group Discussion)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes LGD`,
    optional: true,
    conflictWith: null,
    tools: ["GPQ"],
  },
];

export const competenceModules: AcesModule[] = [
  {
    id: "GMATE",
    group: "competence",
    name: "G-Mate (Gaia ...)",
    description: `Lorem ipsum keterangan untuk tes G-Mate`,
    optional: false,
    conflictWith: null,
    tools: ["G-GATE"],
  },
  {
    id: "GPQ",
    group: "competence",
    name: "GPG (Gaia ...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes GPQ`,
    optional: false,
    conflictWith: null,
    tools: ["GPQ"],
  },
  {
    id: "BEI",
    group: "competence",
    name: "Wawancara (atau BEI?)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes Wawancara`,
    optional: true,
    conflictWith: null,
    tools: ["BEI"],
  },
  {
    id: "LGD",
    group: "competence",
    name: "LGD (Leaderless Group Discussion)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes LGD`,
    optional: true,
    conflictWith: null,
    tools: ["LGD"],
  },
  {
    id: "ROLEPLAY",
    group: "competence",
    name: "Roleplay (...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes Rolepaly`,
    optional: true,
    conflictWith: null,
    tools: ["Roleplay"],
  },
  {
    id: "PRESENTATION",
    group: "competence",
    name: "Presentation (...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes Presentation`,
    optional: true,
    conflictWith: null,
    tools: ["Presentation"],
  },
  {
    id: "INT",
    group: "competence",
    name: "INT (Intray ...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes INT`,
    optional: true,
    conflictWith: "CAN",
    tools: ["INT"],
  },
  {
    id: "CAN",
    group: "competence",
    name: "CAN (Case Analysis ...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes CAN`,
    optional: true,
    conflictWith: "INT",
    tools: ["CAN"],
  },
];

export const assessmentModules: AcesModule[] = [
  {
    id: "GRATE",
    group: "assessment",
    name: "G-Rate (Gaia ...)",
    description: `Lorem ipsum keterangan untuk tes G-Rate`,
    optional: false,
    conflictWith: null,
    tools: ["G-RATE"],
  },
  {
    id: "GPQ",
    group: "assessment",
    name: "GPG (Gaia ...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes GPQ`,
    optional: false,
    conflictWith: null,
    tools: ["GPQ"],
  },
  {
    id: "BEI",
    group: "assessment",
    name: "Wawancara (atau BEI?)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes Wawancara`,
    optional: true,
    conflictWith: null,
    tools: ["BEI"],
  },
  {
    id: "LGD",
    group: "assessment",
    name: "LGD (Leaderless Group Discussion)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes LGD`,
    optional: true,
    conflictWith: null,
    tools: ["LGD"],
  },
  {
    id: "ROLEPLAY",
    group: "assessment",
    name: "Roleplay (...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes Rolepaly`,
    optional: true,
    conflictWith: null,
    tools: ["Roleplay"],
  },
  {
    id: "PRESENTATION",
    group: "assessment",
    name: "Presentation (...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes Presentation`,
    optional: true,
    conflictWith: null,
    tools: ["Presentation"],
  },
  {
    id: "INT",
    group: "assessment",
    name: "INT (Intray ...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes INT`,
    optional: true,
    conflictWith: "CAN",
    tools: ["INT"],
  },
  {
    id: "CAN",
    group: "assessment",
    name: "CAN (Case Analysis ...)",
    description: `(TODO: fix) Lorem ipsum keterangan untuk tes CAN`,
    optional: true,
    conflictWith: "INT",
    tools: ["CAN"],
  },
];
