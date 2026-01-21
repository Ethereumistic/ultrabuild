import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Строителна Механизация",
  description:
    "Модерен флот строителна техника на УЛТРА БИЛД: снегорини за зимно поддържане, тежкотоварни самосвали, багери, товарачи и мини-товарачи. Професионално оборудване за всеки проект.",
  path: "/inventory",
});

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
