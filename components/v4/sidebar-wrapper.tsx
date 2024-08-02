"use client";
import { useState } from "react";

import Sidebar from "./sidebar";
import Navbar from "@/components/shared/Navbar";
import CloseOpen from "./close-open";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="main-wrapper">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full pr-2">
        <Navbar>
          <CloseOpen isOpen={isOpen} setIsOpen={setIsOpen} />
        </Navbar>

        <div className="main-content-with-navbar">{children}</div>
      </div>
    </main>
  );
}
