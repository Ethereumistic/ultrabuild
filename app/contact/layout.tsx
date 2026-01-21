import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Контакти",
  description:
    "Свържете се с УЛТРА БИЛД ООД за вашия строителен проект. Централен офис в Ямбол, ул. Димитър Благоев №19. Телефон: +359 893 277 266. Работим в Ямболска и Хасковска област.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
