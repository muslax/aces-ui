import { ReactNode } from "react";

export type ProductType =
  | "potrev"
  | "recruitment"
  | "competence"
  | "assessment";

export interface ProductDescriptor {
  type: ProductType;
  title: string;
  description: ReactNode;
}

export const AssessmentProduct: ProductDescriptor = {
  type: "assessment",
  title: "Assessment Center",
  description: (
    <>
      Paket pengukuran kompetensi yang memenuhi kaidah-kaidah{" "}
      <strong>Assessment Center</strong> internasional, terdiri dari dua modul
      utama plus dua hingga lima pilihan. Anda dapat menentukan modul pilihan
      apa saja setelah mengklik tombol Lanjut pada bagian bawah.
    </>
  ),
};

export const CompetenceProduct: ProductDescriptor = {
  type: "competence",
  title: "Competence @ Work",
  description: (
    <>
      Silakan pilih paket ini bila proyek pengukuran kompetensi yang akan
      dijalankan tidak diharuskan memenuhi kaidah-kaidah{" "}
      <strong>Assessment Center</strong>. Terdiri dari dua modul utama dan lima
      modul lain yang sifatnya opsional. Anda dapat menentukan modul pilihan apa
      saja setelah mengklik tombol Lanjut pada bagian bawah.
    </>
  ),
};

export const RecruitmentProduct: ProductDescriptor = {
  type: "recruitment",
  title: "Recruitment",
  description: (
    <>
      SILAKAN DIEDIT ... pilih paket ini bila proyek pengukuran kompetensi yang
      akan dijalankan tidak diharuskan memenuhi kaidah-kaidah{" "}
      <strong>Assessment Center</strong>. Terdiri dari dua modul utama dan lima
      modul lain yang sifatnya opsional. Anda dapat menentukan modul pilihan apa
      saja setelah mengklik tombol Lanjut pada bagian bawah.
    </>
  ),
};

export const PotrevProduct: ProductDescriptor = {
  type: "potrev",
  title: "Potential Review",
  description: (
    <>
      SILAKAN DIEDIT ... pilih paket ini bila proyek pengukuran kompetensi yang
      akan dijalankan tidak diharuskan memenuhi kaidah-kaidah{" "}
      <strong>Assessment Center</strong>. Terdiri dari dua modul utama dan lima
      modul lain yang sifatnya opsional. Anda dapat menentukan modul pilihan apa
      saja setelah mengklik tombol Lanjut pada bagian bawah.
    </>
  ),
};
