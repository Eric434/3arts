import { jsxs, jsx } from "react/jsx-runtime";
import { Link, Outlet } from "@tanstack/react-router";
function AdminLayout() {
  const navItems = [{
    to: "/admin",
    label: "Dashboard",
    exact: true
  }, {
    to: "/admin/events",
    label: "Events"
  }, {
    to: "/admin/bookings",
    label: "Bookings"
  }, {
    to: "/admin/messages",
    label: "Fan Messages"
  }, {
    to: "/admin/gallery",
    label: "Gallery"
  }];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-neutral-950 flex", children: [
    /* @__PURE__ */ jsxs("aside", { className: "w-64 bg-neutral-900 border-r border-white/10 flex flex-col hidden lg:flex", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-white/10", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-amber-400/80 font-light", children: "Admin Panel" }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-bold tracking-wide text-white mt-0.5", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Keanu Events" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "flex-1 p-4 space-y-1", children: navItems.map(({
        to,
        label,
        exact
      }) => /* @__PURE__ */ jsx(Link, { to, className: "flex items-center gap-3 px-4 py-2.5 rounded-xl text-stone-400 hover:text-white hover:bg-white/5 text-sm transition-all", activeProps: {
        className: "flex items-center gap-3 px-4 py-2.5 rounded-xl bg-amber-500/15 text-amber-400 text-sm border border-amber-400/20"
      }, activeOptions: {
        exact
      }, children: label }, to)) }),
      /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-white/10", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-2 px-4 py-2.5 text-stone-500 hover:text-stone-300 text-xs tracking-widest uppercase transition-colors", children: "← Back to Site" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden border-b border-white/10 px-6 py-4 flex items-center justify-between bg-neutral-900", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Admin Panel" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-stone-500 hover:text-white text-xs tracking-widest uppercase", children: "← Site" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden px-6 py-3 bg-neutral-900/50 border-b border-white/10 flex gap-3 overflow-x-auto", children: navItems.map(({
        to,
        label,
        exact
      }) => /* @__PURE__ */ jsx(Link, { to, className: "flex-shrink-0 px-3 py-1.5 rounded-lg text-stone-400 text-xs tracking-wider uppercase", activeProps: {
        className: "flex-shrink-0 px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-400 text-xs tracking-wider uppercase"
      }, activeOptions: {
        exact
      }, children: label }, to)) }),
      /* @__PURE__ */ jsx(Outlet, {})
    ] })
  ] });
}
export {
  AdminLayout as component
};
