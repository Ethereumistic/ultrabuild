import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Проекти",
  description:
    "Портфолио от завършени проекти на УЛТРА БИЛД: пътно строителство, саниране на сгради, градско благоустройство. Вижте нашите успешно изпълнени инфраструктурни проекти в България.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
