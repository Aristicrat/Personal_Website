import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Roger Aristizabal | Data Analytics & Risk Modeling",
    description:
        "Portfolio of Roger Aristizabal, a data analytics and risk modeling professional based in New York City.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
