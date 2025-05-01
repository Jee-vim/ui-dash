"use client";
import { Layout } from "@/components/shared/layout/main";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout.Root>
          <Layout.Sidebar></Layout.Sidebar>
          <Layout.Content>{children}</Layout.Content>
          <Layout.Sidebar></Layout.Sidebar>
        </Layout.Root>
      </body>
    </html>
  );
}
