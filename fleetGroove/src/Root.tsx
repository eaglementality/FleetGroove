import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Nav, Footer } from "./shared.tsx";

export default function Root() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return (
    <div className="min-h-screen bg-background flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      <Nav />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}
