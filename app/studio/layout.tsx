import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studio | Ultrabuild",
    description: "Sanity Studio - Content Management",
    robots: {
        index: false,
        follow: false,
    },
};

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Studio layout without NavBar and Footer
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}
