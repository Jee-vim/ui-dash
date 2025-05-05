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
          <Layout.Sidebar className="bg-background" />
          <Layout.Content className="!h-[98vh] mt-[1vh] mr-[1vh] !bg-dark-300 rounded-[12px]">
            {children}
          </Layout.Content>
        </Layout.Root>
      </body>
    </html>
  );
}
