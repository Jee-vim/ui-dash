"use client"
import { Layout } from "@/components/shared/layout/main";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout.Root isNavbar>
          <Layout.Sidebar></Layout.Sidebar>
          <Layout.Content>
            <Layout.Navbar></Layout.Navbar>
            <Layout.ContentWithNavbar>{children}</Layout.ContentWithNavbar>
          </Layout.Content>
        </Layout.Root>
      </body>
    </html>
  );
}
