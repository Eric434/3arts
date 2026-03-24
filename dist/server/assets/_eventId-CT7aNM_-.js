import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { e as events } from "./events-BXg54lv2.js";
import { R as Route } from "./router-D1E8rb0l.js";
function encode(data) {
  return Object.entries(data).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
}
function EventDetailPage() {
  const {
    eventId
  } = Route.useParams();
  const event = events.find((e) => e.id === eventId);
  const [ticketType, setTicketType] = useState("general");
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  if (!event) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-950 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-white mb-4", children: "Event Not Found" }),
      /* @__PURE__ */ jsx(Link, { to: "/events", className: "text-amber-400 hover:text-amber-300", children: "← Back to Events" })
    ] }) });
  }
  const price = ticketType === "vip" ? event.vipPrice : event.price;
  const total = price * quantity;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/ticket-booking.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({
          "form-name": "ticket-booking",
          ...formData,
          event: event.title,
          eventId: event.id,
          ticketType,
          quantity: quantity.toString(),
          total: total.toString()
        })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };
  const date = new Date(event.date);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-neutral-950", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[50vh] overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: event.image, alt: event.title, className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-neutral-950" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 px-6 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsx(Link, { to: "/events", className: "inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 text-xs tracking-widest uppercase mb-6 transition-colors", children: "← All Events" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: event.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs rounded-full", children: tag }, tag)) }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-bold text-white", style: {
          fontFamily: "Cinzel, serif"
        }, children: event.title })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [{
          label: "Date",
          value: date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
          })
        }, {
          label: "Time",
          value: event.time
        }, {
          label: "Venue",
          value: event.venue
        }, {
          label: "Location",
          value: `${event.city}${event.state ? `, ${event.state}` : ""}, ${event.country}`
        }].map(({
          label,
          value
        }) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-amber-400/70 text-xs tracking-widest uppercase mb-1", children: label }),
          /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-medium", children: value })
        ] }, label)) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", style: {
            fontFamily: "Cinzel, serif"
          }, children: "About This Event" }),
          /* @__PURE__ */ jsx("div", { className: "text-stone-300 leading-relaxed space-y-4", children: event.longDescription.split("\n\n").map((para, i) => /* @__PURE__ */ jsx("p", { children: para }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", style: {
            fontFamily: "Cinzel, serif"
          }, children: "Ticket Options" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-xl p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "text-stone-300 text-xs tracking-widest uppercase mb-3", children: "General Admission" }),
              /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-white mb-4", children: [
                "$",
                event.price
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "text-stone-400 text-sm space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "✓" }),
                  " Full Q&A session access"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "✓" }),
                  " Fan lounge access"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "✓" }),
                  " Event commemorative program"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-stone-600", children: "✗" }),
                  " Personal photo opportunity"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-stone-600", children: "✗" }),
                  " VIP reception"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-amber-500/10 border border-amber-400/30 rounded-xl p-6 relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 px-2 py-1 bg-amber-500 text-black text-xs font-bold rounded", children: "VIP" }),
              /* @__PURE__ */ jsx("div", { className: "text-amber-400 text-xs tracking-widest uppercase mb-3", children: "VIP Experience" }),
              /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-white mb-4", children: [
                "$",
                event.vipPrice
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "text-stone-400 text-sm space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "✓" }),
                  " Everything in General"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "✓" }),
                  " Personal photo with Keanu"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "✓" }),
                  " Autographed collectible"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "✓" }),
                  " Early entry & VIP reception"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "✓" }),
                  " Priority front-row seating"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsx("div", { className: "sticky top-28", children: /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-white/10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", style: {
            fontFamily: "Cinzel, serif"
          }, children: "Book Tickets" }),
          /* @__PURE__ */ jsxs("p", { className: "text-stone-500 text-xs mt-1", children: [
            event.availableTickets,
            " seats remaining"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 h-1 bg-neutral-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-amber-500 rounded-full", style: {
            width: `${Math.max(5, event.availableTickets / event.capacity * 100)}%`
          } }) })
        ] }),
        submitted ? /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-2xl mx-auto mb-4", children: "✓" }),
          /* @__PURE__ */ jsx("h4", { className: "text-white font-bold text-lg mb-2", children: "Booking Confirmed!" }),
          /* @__PURE__ */ jsxs("p", { className: "text-stone-400 text-sm mb-6", children: [
            "Your tickets for ",
            /* @__PURE__ */ jsx("strong", { className: "text-white", children: event.title }),
            " have been reserved. A confirmation will be sent to ",
            formData.email,
            "."
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/events", className: "text-amber-400 hover:text-amber-300 text-sm tracking-wider uppercase transition-colors", children: "← Browse More Events" })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-stone-400 text-xs tracking-widest uppercase block mb-3", children: "Ticket Type" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: ["general", "vip"].map((type) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setTicketType(type), className: `py-3 px-4 rounded-xl text-sm font-medium tracking-wider uppercase border transition-all ${ticketType === type ? type === "vip" ? "bg-amber-500 border-amber-500 text-black" : "bg-white/10 border-white/30 text-white" : "bg-transparent border-white/10 text-stone-500 hover:border-white/20"}`, children: [
              type === "general" ? "General" : "VIP",
              /* @__PURE__ */ jsxs("div", { className: "text-xs mt-0.5 font-normal", children: [
                "$",
                type === "general" ? event.price : event.vipPrice
              ] })
            ] }, type)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-stone-400 text-xs tracking-widest uppercase block mb-3", children: "Quantity" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "w-10 h-10 rounded-xl border border-white/10 text-white hover:border-amber-400/50 transition-colors flex items-center justify-center", children: "−" }),
              /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg w-8 text-center", children: quantity }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQuantity(Math.min(10, quantity + 1)), className: "w-10 h-10 rounded-xl border border-white/10 text-white hover:border-amber-400/50 transition-colors flex items-center justify-center", children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-stone-400 text-xs tracking-widest uppercase block mb-2", children: "Full Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", required: true, value: formData.name, onChange: (e) => setFormData({
              ...formData,
              name: e.target.value
            }), placeholder: "Your full name", className: "w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-stone-400 text-xs tracking-widest uppercase block mb-2", children: "Email" }),
            /* @__PURE__ */ jsx("input", { type: "email", required: true, value: formData.email, onChange: (e) => setFormData({
              ...formData,
              email: e.target.value
            }), placeholder: "your@email.com", className: "w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-stone-400 text-xs tracking-widest uppercase block mb-2", children: "Phone (optional)" }),
            /* @__PURE__ */ jsx("input", { type: "tel", value: formData.phone, onChange: (e) => setFormData({
              ...formData,
              phone: e.target.value
            }), placeholder: "+1 (555) 000-0000", className: "w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-white/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-stone-400 text-sm", children: [
                quantity,
                "x ",
                ticketType === "vip" ? "VIP" : "General",
                " Ticket"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-white font-bold", children: [
                "$",
                total
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs", children: "Service fee" }),
              /* @__PURE__ */ jsx("span", { className: "text-stone-400 text-xs", children: "Included" })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold tracking-widest uppercase text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]", children: loading ? "Processing..." : `Reserve for $${total}` }),
            /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-xs text-center mt-3", children: "Secure booking · Instant confirmation" })
          ] })
        ] })
      ] }) }) })
    ] }) })
  ] });
}
export {
  EventDetailPage as component
};
