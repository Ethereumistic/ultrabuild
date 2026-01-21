import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Услуги",
  description:
    "Професионални строителни услуги от УЛТРА БИЛД: пътна инфраструктура и зимно поддържане, саниране и обновяване на сгради, градско и парково благоустройство. Качество и надеждност.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
