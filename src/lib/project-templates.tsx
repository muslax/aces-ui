import { ReactNode } from "react";
import { ProductType } from "./product-types";
import {
  AcesModule,
  potrevModules,
  assessmentModules,
  competenceModules,
  recruitmentModules,
} from "./project-modules";

export interface ProjectTemplate {
  title: string;
  description: ReactNode;
  defaultTitle: string;
  defaultDescription: ReactNode;
  optionalTitle: string;
  optionalDescription: ReactNode;
  modules: AcesModule[];
  minimum: number;
}

export function getProjectTemplate(
  productType: ProductType | ""
): ProjectTemplate {
  switch (productType) {
    case "potrev":
      return potrevTemplate;
    case "recruitment":
      return recruitmentTemplate;
    case "competence":
      return competenceTemplate;
    case "assessment":
      return assessmentTemplate;
    default:
      return {
        title: "Untitled",
        description: "No description",
        defaultTitle: "Untitled",
        defaultDescription: "No description",
        optionalTitle: "Untitled",
        optionalDescription: "No description",
        modules: [],
        minimum: 0,
      };
  }
}

const potrevTemplate: ProjectTemplate = {
  title: "Potential Review",
  description: (
    <div>
      Paket <strong>Potential Review</strong> terdiri 2 modul utama dan 5 modul
      pilihan. Modul pilihan dalam paket ini bersifat opsional, dapat tidak
      dipilih, dapat dipilih sebagian, atau dipilih seluruhnya.
    </div>
  ),
  defaultTitle: "Modul Utama",
  defaultDescription: "Petunjuk/keterangan tentant modul utama",
  optionalTitle: "Modul Pilihan",
  optionalDescription: "Petunjuk/keterangan tentant modul pilihan",
  modules: potrevModules,
  minimum: 1,
};

const recruitmentTemplate: ProjectTemplate = {
  title: "Recuitment",
  description: (
    <div>
      Paket <strong>Recruitment</strong> terdiri 2 modul utama dan 5 modul
      pilihan. Modul pilihan dalam paket ini bersifat opsional, dapat tidak
      dipilih, dapat dipilih sebagian, atau dipilih seluruhnya.
    </div>
  ),
  defaultTitle: "Modul Utama",
  defaultDescription: "Petunjuk/keterangan tentant modul utama",
  optionalTitle: "Modul Pilihan",
  optionalDescription: "Petunjuk/keterangan tentant modul pilihan",
  modules: recruitmentModules,
  minimum: 2,
};

const competenceTemplate: ProjectTemplate = {
  title: "Competence @ Work",
  description: (
    <div>
      Paket <strong>Competence @Work</strong> terdiri 2 modul utama dan 5 modul
      pilihan. Modul pilihan dalam paket ini bersifat opsional, dapat tidak
      dipilih, dapat dipilih sebagian, atau dipilih seluruhnya.
    </div>
  ),
  defaultTitle: "Modul Utama",
  defaultDescription: (
    <>
      Petunjuk/keterangan <strong>tentang</strong> modul utama
    </>
  ),
  optionalTitle: "Modul Pilihan",
  optionalDescription: "Petunjuk/keterangan tentant modul pilihan",
  modules: competenceModules,
  minimum: 2,
};

const assessmentTemplate: ProjectTemplate = {
  title: "Assessment Center",
  description: (
    <div>
      Paket <strong>Assessment Center</strong> terdiri 2 modul utama dan 5 modul
      pilihan. Modul pilihan dalam paket ini bersifat opsional, dapat tidak
      dipilih, dapat dipilih sebagian, atau dipilih seluruhnya.
    </div>
  ),
  defaultTitle: "Modul Utama",
  defaultDescription: "Petunjuk/keterangan tentant modul utama",
  optionalTitle: "Modul Pilihan",
  optionalDescription: "Petunjuk/keterangan tentant modul pilihan",
  modules: assessmentModules,
  minimum: 4,
};
