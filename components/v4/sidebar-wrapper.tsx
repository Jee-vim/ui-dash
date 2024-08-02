"use client";
import { useState } from "react";

import Sidebar from "./sidebar";
import Navbar from "@/components/shared/Navbar";
import CloseOpen from "./close-open";
import styles from "@/styles/component/layout.module.css";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className={styles.main_wrapper}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full pr-2">
        <Navbar>
          <CloseOpen isOpen={isOpen} setIsOpen={setIsOpen} />
        </Navbar>

        <div className={styles.main_content_with_navbar}>{children}</div>
      </div>
    </main>
  );
}
