import { jsxs, jsx } from "react/jsx-runtime";
import { e as events } from "./events-BXg54lv2.js";
const mockBookings = [{
  id: "BK001",
  name: "Jennifer L.",
  email: "j***@gmail.com",
  event: events[0]?.title,
  type: "VIP",
  qty: 2,
  total: 900,
  date: "2026-03-20",
  status: "confirmed"
}, {
  id: "BK002",
  name: "Michael T.",
  email: "m***@yahoo.com",
  event: events[1]?.title,
  type: "General",
  qty: 1,
  total: 175,
  date: "2026-03-21",
  status: "confirmed"
}, {
  id: "BK003",
  name: "Sophia K.",
  email: "s***@outlook.com",
  event: events[2]?.title,
  type: "VIP",
  qty: 2,
  total: 2400,
  date: "2026-03-21",
  status: "confirmed"
}, {
  id: "BK004",
  name: "David R.",
  email: "d***@gmail.com",
  event: events[0]?.title,
  type: "General",
  qty: 4,
  total: 600,
  date: "2026-03-22",
  status: "confirmed"
}, {
  id: "BK005",
  name: "Aisha M.",
  email: "a***@icloud.com",
  event: events[3]?.title,
  type: "VIP",
  qty: 1,
  total: 550,
  date: "2026-03-22",
  status: "pending"
}, {
  id: "BK006",
  name: "Carlos B.",
  email: "c***@gmail.com",
  event: events[4]?.title,
  type: "General",
  qty: 2,
  total: 250,
  date: "2026-03-23",
  status: "confirmed"
}, {
  id: "BK007",
  name: "Emma W.",
  email: "e***@hotmail.com",
  event: events[5]?.title,
  type: "VIP",
  qty: 2,
  total: 1500,
  date: "2026-03-23",
  status: "confirmed"
}, {
  id: "BK008",
  name: "James N.",
  email: "j***@gmail.com",
  event: events[1]?.title,
  type: "General",
  qty: 3,
  total: 525,
  date: "2026-03-24",
  status: "pending"
}];
function AdminBookingsPage() {
  const totalRevenue = mockBookings.filter((b) => b.status === "confirmed").reduce((acc, b) => acc + b.total, 0);
  return /* @__PURE__ */ jsxs("div", { className: "p-6 lg:p-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white", style: {
        fontFamily: "Cinzel, serif"
      }, children: "Bookings" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 mt-1 text-sm", children: "All ticket reservations" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs tracking-widest uppercase mb-2", children: "Total Bookings" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white", children: mockBookings.length })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-amber-400/20 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs tracking-widest uppercase mb-2", children: "Revenue" }),
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-amber-400", children: [
          "$",
          totalRevenue.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs tracking-widest uppercase mb-2", children: "Confirmed" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-green-400", children: mockBookings.filter((b) => b.status === "confirmed").length })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs tracking-widest uppercase mb-2", children: "Pending" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-orange-400", children: mockBookings.filter((b) => b.status === "pending").length })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-white/10", children: ["Booking ID", "Name", "Event", "Type", "Qty", "Total", "Date", "Status"].map((h) => /* @__PURE__ */ jsx("th", { className: "text-left px-5 py-4 text-stone-500 text-xs tracking-widest uppercase whitespace-nowrap", children: h }, h)) }) }),
      /* @__PURE__ */ jsx("tbody", { children: mockBookings.map((booking) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/5 hover:bg-white/3 transition-colors", children: [
        /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-amber-400 text-xs font-mono", children: booking.id }),
        /* @__PURE__ */ jsxs("td", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-medium", children: booking.name }),
          /* @__PURE__ */ jsx("div", { className: "text-stone-600 text-xs", children: booking.email })
        ] }),
        /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-stone-400 text-sm max-w-[200px]", children: /* @__PURE__ */ jsx("div", { className: "line-clamp-1", children: booking.event }) }),
        /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${booking.type === "VIP" ? "bg-amber-500/20 text-amber-400 border border-amber-400/30" : "bg-white/5 text-stone-400 border border-white/10"}`, children: booking.type }) }),
        /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-stone-400 text-sm", children: booking.qty }),
        /* @__PURE__ */ jsxs("td", { className: "px-5 py-4 text-white font-bold text-sm", children: [
          "$",
          booking.total.toLocaleString()
        ] }),
        /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-stone-400 text-xs whitespace-nowrap", children: booking.date }),
        /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium border ${booking.status === "confirmed" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-orange-500/20 text-orange-400 border-orange-500/30"}`, children: booking.status }) })
      ] }, booking.id)) })
    ] }) }) })
  ] });
}
export {
  AdminBookingsPage as component
};
