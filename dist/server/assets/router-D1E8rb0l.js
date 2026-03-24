import { createRootRoute, HeadContent, Outlet, Scripts, Link, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const Route$b = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "3 Arts Entertainment – Keanu Reeves Official Fan Events" },
      { name: "description", content: "3 Arts Entertainment presents official meet and greet events, fan experiences, and exclusive evenings with Keanu Reeves." }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootDocument
});
function NavLink({ to, children }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to,
      className: "text-sm font-medium tracking-widest uppercase text-stone-300 hover:text-amber-400 transition-colors duration-300",
      activeProps: { className: "text-sm font-medium tracking-widest uppercase text-amber-400" },
      activeOptions: { exact: to === "/" },
      children
    }
  );
}
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex flex-col leading-none group", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-amber-400/80 font-light", children: "Presents" }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold tracking-[0.15em] uppercase text-white group-hover:text-amber-400 transition-colors", style: { fontFamily: "Cinzel, serif" }, children: "3 Arts Entertainment" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/events", children: "Events" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/gallery", children: "Gallery" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/fan-messages", children: "Fan Wall" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/events",
            className: "px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold tracking-widest uppercase rounded transition-colors duration-300",
            children: "Book Tickets"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/admin",
            className: "px-4 py-2 border border-white/20 hover:border-amber-400/50 text-white/60 hover:text-amber-400 text-xs font-medium tracking-widest uppercase rounded transition-all duration-300",
            children: "Admin"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden text-white p-2",
          onClick: () => setMobileOpen(!mobileOpen),
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ jsxs("div", { className: "w-6 flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: `h-px bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}` }),
            /* @__PURE__ */ jsx("span", { className: `h-px bg-current transition-all ${mobileOpen ? "opacity-0" : ""}` }),
            /* @__PURE__ */ jsx("span", { className: `h-px bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}` })
          ] })
        }
      )
    ] }),
    mobileOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/events", children: "Events" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/gallery", children: "Gallery" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/fan-messages", children: "Fan Wall" }),
      /* @__PURE__ */ jsx(Link, { to: "/events", className: "mt-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold tracking-widest uppercase rounded text-center transition-colors", children: "Book Tickets" })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-black border-t border-white/10 py-16 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-amber-400/80 font-light block", children: "Presents" }),
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold tracking-[0.15em] uppercase text-white", style: { fontFamily: "Cinzel, serif" }, children: "3 Arts Entertainment" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm leading-relaxed max-w-xs", children: "Official 3 Arts Entertainment platform for Keanu Reeves fan events, meet and greet experiences, and exclusive entertainment gatherings worldwide." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white text-xs tracking-widest uppercase font-semibold mb-4", children: "Navigate" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: [["/", "Home"], ["/events", "Events"], ["/gallery", "Gallery"], ["/fan-messages", "Fan Wall"]].map(([to, label]) => /* @__PURE__ */ jsx(Link, { to, className: "text-stone-400 hover:text-amber-400 text-sm transition-colors", children: label }, to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white text-xs tracking-widest uppercase font-semibold mb-4", children: "Connect" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-stone-400 text-sm", children: [
          /* @__PURE__ */ jsx("span", { children: "Press Inquiries" }),
          /* @__PURE__ */ jsx("span", { children: "press@keanuevents.com" }),
          /* @__PURE__ */ jsx("span", { className: "mt-2", children: "Fan Support" }),
          /* @__PURE__ */ jsx("span", { children: "support@keanuevents.com" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-xs", children: "© 2026 3 Arts Entertainment. All rights reserved." }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-xs", children: "Designed with love for fans worldwide." })
    ] })
  ] }) });
}
function SmartsuppChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window;
    w._smartsupp = w._smartsupp || {};
    w._smartsupp.key = "d3d0bffbd5849b95389635b5a54f897b2ee31492";
    if (!w.smartsupp) {
      const o = w.smartsupp = function() {
        o._.push(arguments);
      };
      o._ = [];
      const s = document.getElementsByTagName("script")[0];
      const c = document.createElement("script");
      c.type = "text/javascript";
      c.charset = "utf-8";
      c.async = true;
      c.src = "https://www.smartsuppchat.com/loader.js?";
      s?.parentNode?.insertBefore(c, s);
    }
  }, []);
  return null;
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-neutral-950 text-white min-h-screen", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(SmartsuppChat, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$a = () => import("./gallery-CHgnTOvK.js");
const Route$a = createFileRoute("/gallery")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./fan-messages-SZU71Iss.js");
const Route$9 = createFileRoute("/fan-messages")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./route-CnJi1dT9.js");
const Route$8 = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-B-4X1f6-.js");
const Route$7 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-DOhViCHG.js");
const Route$6 = createFileRoute("/events/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-BAoj7ji4.js");
const Route$5 = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./_eventId-CT7aNM_-.js");
const Route$4 = createFileRoute("/events/$eventId")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./messages-DNRyj3K2.js");
const Route$3 = createFileRoute("/admin/messages")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./gallery-Cw-JeH9a.js");
const Route$2 = createFileRoute("/admin/gallery")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./events-DXkTv9ni.js");
const Route$1 = createFileRoute("/admin/events")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./bookings-BAqBO9zt.js");
const Route = createFileRoute("/admin/bookings")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const GalleryRoute = Route$a.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$b
});
const FanMessagesRoute = Route$9.update({
  id: "/fan-messages",
  path: "/fan-messages",
  getParentRoute: () => Route$b
});
const AdminRouteRoute = Route$8.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const EventsIndexRoute = Route$6.update({
  id: "/events/",
  path: "/events/",
  getParentRoute: () => Route$b
});
const AdminIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRouteRoute
});
const EventsEventIdRoute = Route$4.update({
  id: "/events/$eventId",
  path: "/events/$eventId",
  getParentRoute: () => Route$b
});
const AdminMessagesRoute = Route$3.update({
  id: "/messages",
  path: "/messages",
  getParentRoute: () => AdminRouteRoute
});
const AdminGalleryRoute = Route$2.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => AdminRouteRoute
});
const AdminEventsRoute = Route$1.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => AdminRouteRoute
});
const AdminBookingsRoute = Route.update({
  id: "/bookings",
  path: "/bookings",
  getParentRoute: () => AdminRouteRoute
});
const AdminRouteRouteChildren = {
  AdminBookingsRoute,
  AdminEventsRoute,
  AdminGalleryRoute,
  AdminMessagesRoute,
  AdminIndexRoute
};
const AdminRouteRouteWithChildren = AdminRouteRoute._addFileChildren(
  AdminRouteRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AdminRouteRoute: AdminRouteRouteWithChildren,
  FanMessagesRoute,
  GalleryRoute,
  EventsEventIdRoute,
  EventsIndexRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$4 as R,
  router as r
};
