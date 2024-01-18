import React, { Suspense } from "react";
import { Navbar } from "./_components/navbar";
import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
import { Container } from "./_components/container";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="h-full pt-[40px]">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
}

export default BrowseLayout;
