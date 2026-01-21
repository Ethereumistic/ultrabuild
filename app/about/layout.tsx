import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "За нас",
  description:
    "УЛТРА БИЛД ООД е българска строителна компания с над 7 години опит в пътно строителство, саниране на сгради и благоустройство. 150+ завършени проекта, 500+ км изградени пътища, 50+ квалифицирани специалисти.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
