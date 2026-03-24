import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { e as events } from "./events-BXg54lv2.js";
import { f as fanMessages } from "./fanMessages-bs79tVbn.js";
function HomePage() {
  const featuredEvents = events.filter((e) => e.featured);
  const recentMessages = fanMessages.slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { className: "bg-neutral-950", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-950 z-10" }),
        /* @__PURE__ */ jsx("img", { src: "/keanu-casual.jpg", alt: "Keanu Reeves", className: "w-full h-full object-cover object-top opacity-40" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-20 flex flex-col lg:flex-row items-center gap-12 px-6 max-w-7xl mx-auto w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-400/30 shadow-[0_0_60px_rgba(245,158,11,0.15)]", children: /* @__PURE__ */ jsx("img", { src: "/keanu-hero.jpg", alt: "Keanu Reeves portrait", className: "w-full h-full object-cover" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.5em] uppercase text-amber-400 font-medium border border-amber-400/30 px-4 py-2 rounded-full", children: "3 Arts Entertainment Presents" }) }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none", style: {
            fontFamily: "Cinzel, serif",
            letterSpacing: "0.05em"
          }, children: [
            "Keanu",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-amber-400", children: "Reeves" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-stone-300 mb-10 max-w-2xl leading-relaxed font-light", children: "An extraordinary journey into the world of one of Hollywood's most beloved icons. Experience intimate evenings, exclusive meet and greets, and unforgettable fan moments." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start", children: [
            /* @__PURE__ */ jsx(Link, { to: "/events", className: "px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]", children: "View All Events" }),
            /* @__PURE__ */ jsx(Link, { to: "/fan-messages", className: "px-8 py-4 border border-white/30 hover:border-amber-400/60 text-white hover:text-amber-400 font-medium tracking-widest uppercase text-sm rounded transition-all duration-300", children: "Fan Wall" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-stone-500", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs tracking-widest uppercase", children: "Scroll" }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-gradient-to-b from-stone-500 to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-neutral-900 border-y border-white/10 py-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [{
      number: "50+",
      label: "Events Worldwide"
    }, {
      number: "100K+",
      label: "Fans Attended"
    }, {
      number: "6",
      label: "Countries"
    }, {
      number: "15+",
      label: "Years of Events"
    }].map(({
      number,
      label
    }) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-amber-400 mb-1", style: {
        fontFamily: "Cinzel, serif"
      }, children: number }),
      /* @__PURE__ */ jsx("div", { className: "text-stone-400 text-xs tracking-widest uppercase", children: label })
    ] }, label)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-14", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-xs tracking-[0.4em] uppercase font-medium", children: "Don't Miss Out" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mt-2", style: {
            fontFamily: "Cinzel, serif"
          }, children: "Featured Events" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/events", className: "hidden md:flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm tracking-wider uppercase transition-colors group", children: [
          "All Events",
          /* @__PURE__ */ jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: featuredEvents.map((event, i) => /* @__PURE__ */ jsxs(Link, { to: "/events/$eventId", params: {
        eventId: event.id
      }, className: `group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)] ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`, children: [
        /* @__PURE__ */ jsxs("div", { className: `relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`, children: [
          /* @__PURE__ */ jsx("img", { src: event.image, alt: event.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 flex gap-2", children: event.availableTickets < 100 && /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-red-500/90 text-white text-xs font-bold tracking-wider uppercase rounded-full", children: "Limited" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-400/80 text-xs tracking-widest uppercase mb-2", children: [
            /* @__PURE__ */ jsx("span", { children: new Date(event.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            }) }),
            /* @__PURE__ */ jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxs("span", { children: [
              event.city,
              ", ",
              event.country
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors", style: {
            fontFamily: "Cinzel, serif"
          }, children: event.title }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm leading-relaxed mb-4 line-clamp-2", children: event.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-stone-500 text-xs", children: "From " }),
              /* @__PURE__ */ jsxs("span", { className: "text-white font-bold text-lg", children: [
                "$",
                event.price
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-xs tracking-widest uppercase group-hover:translate-x-1 transition-transform inline-block", children: "Book Now →" })
          ] })
        ] })
      ] }, event.id)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 text-center md:hidden", children: /* @__PURE__ */ jsx(Link, { to: "/events", className: "inline-flex items-center gap-2 text-amber-400 text-sm tracking-wider uppercase", children: "View All Events →" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6 bg-neutral-900/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(245,158,11,0.08)]", children: /* @__PURE__ */ jsx("img", { src: "/keanu-smile.jpg", alt: "Keanu Reeves smiling", className: "w-full h-auto object-cover" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-px bg-amber-400/50 mx-auto md:mx-0 mb-10" }),
          /* @__PURE__ */ jsx("blockquote", { className: "text-2xl md:text-3xl text-white font-light leading-relaxed mb-8", style: {
            fontFamily: "Cinzel, serif"
          }, children: '"The simple act of paying attention can take you a long way."' }),
          /* @__PURE__ */ jsx("cite", { className: "text-amber-400/80 text-sm tracking-widest uppercase not-italic", children: "— Keanu Reeves" }),
          /* @__PURE__ */ jsx("div", { className: "w-16 h-px bg-amber-400/50 mx-auto md:mx-0 mt-10" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-left", children: [{
        icon: "◆",
        title: "Intimate Experiences",
        desc: "Small group settings ensure every fan gets a genuine, personal moment with Keanu."
      }, {
        icon: "◆",
        title: "Exclusive Access",
        desc: "VIP packages unlock behind-the-scenes content, priority seating, and private receptions."
      }, {
        icon: "◆",
        title: "Global Community",
        desc: "Connect with fellow fans from around the world who share your passion and admiration."
      }].map(({
        icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-xs", children: icon }),
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold tracking-wide", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 text-sm leading-relaxed", children: desc })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
        /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-xs tracking-[0.4em] uppercase font-medium", children: "Behind the Scenes" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mt-2", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Gallery" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)]", children: /* @__PURE__ */ jsx("img", { src: "/keanu-hero.jpg", alt: "Keanu Reeves close-up portrait", className: "w-full h-80 object-cover hover:scale-105 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)]", children: /* @__PURE__ */ jsx("img", { src: "/keanu-event.png", alt: "Keanu Reeves at an event", className: "w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)]", children: /* @__PURE__ */ jsx("img", { src: "/keanu-casual.jpg", alt: "Keanu Reeves casual", className: "w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-700" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-14", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-xs tracking-[0.4em] uppercase font-medium", children: "From the Community" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mt-2", style: {
            fontFamily: "Cinzel, serif"
          }, children: "Fan Voices" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/fan-messages", className: "hidden md:flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm tracking-wider uppercase transition-colors group", children: [
          "View All ",
          /* @__PURE__ */ jsx("span", { className: "group-hover:translate-x-1 transition-transform", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: recentMessages.map((msg) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-sm font-bold", children: msg.avatar }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-medium", children: msg.name }),
            /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs", children: msg.location })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-stone-300 text-sm leading-relaxed line-clamp-4", children: [
          '"',
          msg.message,
          '"'
        ] })
      ] }, msg.id)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/fan-messages", className: "inline-flex items-center gap-2 px-8 py-3 border border-amber-400/30 hover:border-amber-400 text-amber-400 hover:text-amber-300 text-xs tracking-widest uppercase rounded transition-all duration-300", children: "Share Your Message →" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Reserve Your Spot" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 mb-10 leading-relaxed", children: "Tickets sell out fast. Secure your place at the most exclusive fan events of the year before they're gone." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/events", className: "px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm rounded transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]", children: "Browse Events" }),
          /* @__PURE__ */ jsx(Link, { to: "/fan-messages", className: "px-10 py-4 border border-white/20 hover:border-white/40 text-white text-sm font-medium tracking-widest uppercase rounded transition-all duration-300", children: "Join the Fan Wall" })
        ] })
      ] })
    ] })
  ] });
}
export {
  HomePage as component
};
