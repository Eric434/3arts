import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { e as events } from "./events-BXg54lv2.js";
function EventCard({
  event
}) {
  const date = new Date(event.date);
  const month = date.toLocaleDateString("en-US", {
    month: "short"
  }).toUpperCase();
  const day = date.getDate();
  return /* @__PURE__ */ jsxs(Link, { to: "/events/$eventId", params: {
    eventId: event.id
  }, className: "group flex flex-col md:flex-row gap-0 bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_4px_30px_rgba(245,158,11,0.08)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative md:w-64 aspect-video md:aspect-auto overflow-hidden flex-shrink-0", children: [
      /* @__PURE__ */ jsx("img", { src: event.image, alt: event.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/50 hidden md:block" }),
      event.availableTickets < 100 && /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-red-500/90 text-white text-xs font-bold tracking-wider uppercase rounded-full", children: "Limited Seats" }) }),
      event.status === "soldout" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold tracking-widest uppercase text-lg", children: "Sold Out" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 p-6 flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-col items-center justify-center w-16 flex-shrink-0 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-xs font-bold tracking-widest", children: month }),
        /* @__PURE__ */ jsx("span", { className: "text-white text-3xl font-bold leading-none", children: day }),
        /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs", children: date.getFullYear() })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-amber-400/80 text-xs tracking-widest uppercase", children: [
            event.city,
            event.state ? `, ${event.state}` : "",
            " · ",
            event.country
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-stone-600", children: "·" }),
          /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs", children: event.time })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors", style: {
          fontFamily: "Cinzel, serif"
        }, children: event.title }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm leading-relaxed mb-4 line-clamp-2", children: event.description }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: event.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-white/5 border border-white/10 text-stone-400 text-xs rounded-full", children: tag }, tag)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs", children: "General " }),
              /* @__PURE__ */ jsxs("span", { className: "text-white font-bold", children: [
                "$",
                event.price
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs", children: "VIP " }),
              /* @__PURE__ */ jsxs("span", { className: "text-amber-400 font-bold", children: [
                "$",
                event.vipPrice
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-stone-500 text-xs", children: [
              event.availableTickets,
              " seats left"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-sm group-hover:translate-x-1 transition-transform inline-block", children: "→" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function EventsPage() {
  const [filter, setFilter] = useState("all");
  const cities = ["all", ...Array.from(new Set(events.map((e) => e.city)))];
  const filtered = filter === "all" ? events : events.filter((e) => e.city === filter);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-neutral-950", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative py-24 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.06)_0%,transparent_60%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-xs tracking-[0.4em] uppercase font-medium", children: "2026 World Tour" }),
        /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-bold text-white mt-2 mb-4", style: {
          fontFamily: "Cinzel, serif"
        }, children: "All Events" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 max-w-xl leading-relaxed", children: "Browse all upcoming Keanu Reeves fan events, meet and greets, and exclusive experiences around the world. Secure your tickets before they sell out." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-20 z-30 bg-neutral-950/90 backdrop-blur-md border-b border-white/10 px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto scrollbar-hide", children: [
      /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs tracking-widest uppercase flex-shrink-0", children: "Filter:" }),
      cities.map((city) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(city), className: `flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${filter === city ? "bg-amber-500 text-black" : "bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white border border-white/10"}`, children: city === "all" ? "All Cities" : city }, city))
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-12", children: filtered.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center py-24 text-stone-500", children: "No events found for this filter." }) : /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: filtered.map((event) => /* @__PURE__ */ jsx(EventCard, { event }, event.id)) }) })
  ] });
}
export {
  EventsPage as component
};
