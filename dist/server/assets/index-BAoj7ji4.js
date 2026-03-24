import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { e as events } from "./events-BXg54lv2.js";
import { f as fanMessages } from "./fanMessages-bs79tVbn.js";
function StatCard({
  label,
  value,
  sub,
  accent
}) {
  return /* @__PURE__ */ jsxs("div", { className: `bg-neutral-900 border rounded-2xl p-6 ${accent ? "border-amber-400/30" : "border-white/10"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs tracking-widest uppercase mb-2", children: label }),
    /* @__PURE__ */ jsx("div", { className: `text-3xl font-bold mb-1 ${accent ? "text-amber-400" : "text-white"}`, style: {
      fontFamily: "Cinzel, serif"
    }, children: value }),
    sub && /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs", children: sub })
  ] });
}
function AdminDashboard() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const totalCapacity = events.reduce((acc, e) => acc + e.capacity, 0);
  const totalAvailable = events.reduce((acc, e) => acc + e.availableTickets, 0);
  const totalSold = totalCapacity - totalAvailable;
  return /* @__PURE__ */ jsxs("div", { className: "p-6 lg:p-10 max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white", style: {
        fontFamily: "Cinzel, serif"
      }, children: "Dashboard" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 mt-1 text-sm", children: "Overview of Keanu Reeves fan events" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10", children: [
      /* @__PURE__ */ jsx(StatCard, { label: "Upcoming Events", value: upcomingEvents.length, accent: true }),
      /* @__PURE__ */ jsx(StatCard, { label: "Total Tickets Sold", value: totalSold.toLocaleString(), sub: `of ${totalCapacity.toLocaleString()} capacity` }),
      /* @__PURE__ */ jsx(StatCard, { label: "Fan Messages", value: fanMessages.length, sub: "Pending review: 0" }),
      /* @__PURE__ */ jsx(StatCard, { label: "Countries", value: 6, sub: "Global events" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Upcoming Events" }),
        /* @__PURE__ */ jsx(Link, { to: "/admin/events", className: "text-amber-400 hover:text-amber-300 text-xs tracking-widest uppercase transition-colors", children: "Manage All →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase", children: "Event" }),
          /* @__PURE__ */ jsx("th", { className: "text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase", children: "Date" }),
          /* @__PURE__ */ jsx("th", { className: "text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase", children: "Location" }),
          /* @__PURE__ */ jsx("th", { className: "text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase", children: "Tickets" }),
          /* @__PURE__ */ jsx("th", { className: "text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-4" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: upcomingEvents.map((event) => {
          const sold = event.capacity - event.availableTickets;
          const pct = Math.round(sold / event.capacity * 100);
          return /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/5 hover:bg-white/3 transition-colors", children: [
            /* @__PURE__ */ jsxs("td", { className: "px-6 py-4", children: [
              /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-medium", children: event.title }),
              /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs", children: event.venue })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-stone-400 text-sm", children: new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            }) }),
            /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 text-stone-400 text-sm", children: [
              event.city,
              ", ",
              event.country
            ] }),
            /* @__PURE__ */ jsxs("td", { className: "px-6 py-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-20 h-1.5 bg-neutral-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-amber-500 rounded-full", style: {
                  width: `${pct}%`
                } }) }),
                /* @__PURE__ */ jsxs("span", { className: "text-stone-400 text-xs", children: [
                  pct,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-stone-600 text-xs mt-0.5", children: [
                event.availableTickets,
                " left"
              ] })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${event.availableTickets < 50 ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-green-500/20 text-green-400 border border-green-500/30"}`, children: event.availableTickets < 50 ? "Low Stock" : "Available" }) }),
            /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-right", children: /* @__PURE__ */ jsx(Link, { to: "/events/$eventId", params: {
              eventId: event.id
            }, className: "text-amber-400 hover:text-amber-300 text-xs tracking-wider uppercase transition-colors", children: "View →" }) })
          ] }, event.id);
        }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Recent Fan Messages" }),
        /* @__PURE__ */ jsx(Link, { to: "/admin/messages", className: "text-amber-400 hover:text-amber-300 text-xs tracking-widest uppercase transition-colors", children: "Manage All →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: fanMessages.slice(0, 4).map((msg) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-xl p-4 flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-xs font-bold flex-shrink-0", children: msg.avatar }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-medium", children: msg.name }),
            /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 flex-shrink-0", children: "Approved" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs mb-1", children: msg.location }),
          /* @__PURE__ */ jsxs("p", { className: "text-stone-400 text-xs leading-relaxed line-clamp-2", children: [
            '"',
            msg.message,
            '"'
          ] })
        ] })
      ] }, msg.id)) })
    ] })
  ] });
}
export {
  AdminDashboard as component
};
