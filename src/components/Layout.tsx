import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import GlobalOrderButtons, { GlobalOrderStickyBar } from "./GlobalOrderButtons";

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col">
      <NavBar />

      {/* TOP buttons on all pages */}
<div className="mx-auto w-full max-w-6xl px-4 pt-6">
  <GlobalOrderButtons />

  {/* Global note under Clover/DoorDash */}
  <div className="mx-auto mt-3 max-w-4xl text-center text-xs sm:text-sm font-bold text-zinc-600">

    <p>Browse here, then order pickup via Clover or delivery via DoorDash.</p>
    <p className="mt-1">
      Pickup prices shown. DoorDash prices typically match—delivery fees apply. Uber Eats/Grubhub prices may vary.
    </p>
  </div>
</div>


      <main className="w-full flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* BOTTOM sticky buttons on all pages */}
      <GlobalOrderStickyBar />
    </div>
  );
}
