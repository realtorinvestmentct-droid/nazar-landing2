import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

// Layout.tsx
export default function Layout() {
  return (
<div className="min-h-screen bg-brand-bg text-zinc-900 flex flex-col">
  <NavBar />
  <main className="w-full flex-1">
    <Outlet />
  </main>
  <Footer />
</div>
  );
}
