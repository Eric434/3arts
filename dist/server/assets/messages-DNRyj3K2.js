import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { f as fanMessages } from "./fanMessages-bs79tVbn.js";
function AdminMessagesPage() {
  const [messages, setMessages] = useState(fanMessages.map((m) => ({
    ...m,
    approved: true
  })));
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? messages : messages.filter((m) => m.approved === (filter === "approved"));
  const toggle = (id) => {
    setMessages((prev) => prev.map((m) => m.id === id ? {
      ...m,
      approved: !m.approved
    } : m));
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 lg:p-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white", style: {
        fontFamily: "Cinzel, serif"
      }, children: "Fan Messages" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 mt-1 text-sm", children: "Review and moderate fan wall submissions" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      ["all", "approved", "pending"].map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(f), className: `px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${filter === f ? "bg-amber-500 text-black" : "bg-white/5 text-stone-400 hover:text-white border border-white/10"}`, children: f }, f)),
      /* @__PURE__ */ jsxs("span", { className: "text-stone-600 text-xs ml-2", children: [
        filtered.length,
        " messages"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: filtered.map((msg) => /* @__PURE__ */ jsx("div", { className: `bg-neutral-900 border rounded-xl p-5 transition-colors ${msg.approved ? "border-white/10" : "border-orange-500/30"}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-sm font-bold flex-shrink-0", children: msg.avatar }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-semibold", children: msg.name }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs", children: "·" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs", children: msg.location }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-600 text-xs", children: "·" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-600 text-xs", children: new Date(msg.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            }) })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-stone-300 text-sm leading-relaxed", children: [
            '"',
            msg.message,
            '"'
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
        /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium border ${msg.approved ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-orange-500/20 text-orange-400 border-orange-500/30"}`, children: msg.approved ? "Approved" : "Pending" }),
        /* @__PURE__ */ jsx("button", { onClick: () => toggle(msg.id), className: `px-3 py-1 rounded-lg text-xs font-medium transition-colors ${msg.approved ? "bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20" : "bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20"}`, children: msg.approved ? "Reject" : "Approve" }),
        /* @__PURE__ */ jsx("button", { className: "px-3 py-1 bg-white/5 hover:bg-red-500/10 text-stone-500 hover:text-red-400 text-xs rounded-lg border border-white/10 hover:border-red-500/20 transition-colors", children: "Delete" })
      ] })
    ] }) }, msg.id)) })
  ] });
}
export {
  AdminMessagesPage as component
};
