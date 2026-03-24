import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { e as events } from "./events-BXg54lv2.js";
function AdminEventsPage() {
  const [search, setSearch] = useState("");
  const filtered = events.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()) || e.city.toLowerCase().includes(search.toLowerCase()));
  return /* @__PURE__ */ jsxs("div", { className: "p-6 lg:p-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Events" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 mt-1 text-sm", children: "Manage all fan events" })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-widest uppercase rounded-xl transition-colors", children: "+ Add Event" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search events...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full max-w-md bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-5", children: filtered.map((event) => {
      const sold = event.capacity - event.availableTickets;
      const pct = Math.round(sold / event.capacity * 100);
      return /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/20 transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-40 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: event.image, alt: event.title, className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-xs font-bold ${event.availableTickets < 50 ? "bg-red-500/90 text-white" : "bg-green-500/90 text-white"}`, children: event.availableTickets < 50 ? "⚠ Low Stock" : "● Active" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-amber-400/70 text-xs tracking-widest uppercase mb-1", children: [
            new Date(event.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            }),
            " · ",
            event.city
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-3 line-clamp-1", children: event.title }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 mb-4 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800 rounded-lg p-2", children: [
              /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-bold", children: event.capacity }),
              /* @__PURE__ */ jsx("div", { className: "text-stone-600 text-xs", children: "Capacity" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800 rounded-lg p-2", children: [
              /* @__PURE__ */ jsx("div", { className: "text-amber-400 text-sm font-bold", children: sold }),
              /* @__PURE__ */ jsx("div", { className: "text-stone-600 text-xs", children: "Sold" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800 rounded-lg p-2", children: [
              /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-bold", children: event.availableTickets }),
              /* @__PURE__ */ jsx("div", { className: "text-stone-600 text-xs", children: "Remaining" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-stone-500 mb-1", children: [
              /* @__PURE__ */ jsx("span", { children: "Sales progress" }),
              /* @__PURE__ */ jsxs("span", { children: [
                pct,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-neutral-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-amber-500 rounded-full transition-all", style: {
              width: `${pct}%`
            } }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-white/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-stone-400 text-xs", children: [
                "GA: ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  event.price
                ] })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-stone-400 text-xs", children: [
                "VIP: ",
                /* @__PURE__ */ jsxs("strong", { className: "text-amber-400", children: [
                  "$",
                  event.vipPrice
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("button", { className: "px-3 py-1.5 bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white text-xs rounded-lg transition-colors border border-white/10", children: "Edit" }),
              /* @__PURE__ */ jsx(Link, { to: "/events/$eventId", params: {
                eventId: event.id
              }, className: "px-3 py-1.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 text-xs rounded-lg transition-colors border border-amber-400/20", children: "View" })
            ] })
          ] })
        ] })
      ] }, event.id);
    }) })
  ] });
}
export {
  AdminEventsPage as component
};
