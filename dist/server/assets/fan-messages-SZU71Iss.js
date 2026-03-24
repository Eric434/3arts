import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { f as fanMessages } from "./fanMessages-bs79tVbn.js";
function encode(data) {
  return Object.entries(data).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
}
function FanMessagesPage() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/fan-message-form.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({
          "form-name": "fan-message",
          ...formData
        })
      });
    } catch {
    }
    setLoading(false);
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-neutral-950", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative py-24 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.06)_0%,transparent_60%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsx("span", { className: "text-amber-400 text-xs tracking-[0.4em] uppercase font-medium", children: "Community" }),
        /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-bold text-white mt-2 mb-4", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Fan Wall" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-400 max-w-xl leading-relaxed", children: "Share your message, your story, or your moment with Keanu. This is a space for fans to connect and celebrate." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Fan Voices" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: fanMessages.map((msg) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-amber-400/20 transition-colors", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-sm font-bold flex-shrink-0 mt-0.5", children: msg.avatar }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-semibold", children: msg.name }),
              /* @__PURE__ */ jsx("div", { className: "text-stone-500 text-xs", children: msg.location }),
              /* @__PURE__ */ jsx("div", { className: "text-stone-600 text-xs mt-0.5", children: new Date(msg.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-stone-300 text-sm leading-relaxed", children: [
            '"',
            msg.message,
            '"'
          ] })
        ] }, msg.id)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsx("div", { className: "sticky top-28", children: /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-white/10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", style: {
            fontFamily: "Cinzel, serif"
          }, children: "Leave Your Message" }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-xs mt-1", children: "Share your story with the community" })
        ] }),
        submitted ? /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-2xl mx-auto mb-4", children: "♥" }),
          /* @__PURE__ */ jsx("h4", { className: "text-white font-bold text-lg mb-2", children: "Message Received!" }),
          /* @__PURE__ */ jsxs("p", { className: "text-stone-400 text-sm", children: [
            "Thank you, ",
            formData.name,
            "! Your message will be reviewed and added to the fan wall shortly."
          ] })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-stone-400 text-xs tracking-widest uppercase block mb-2", children: "Your Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", required: true, value: formData.name, onChange: (e) => setFormData({
              ...formData,
              name: e.target.value
            }), placeholder: "First name & last initial", className: "w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-stone-400 text-xs tracking-widest uppercase block mb-2", children: "Location" }),
            /* @__PURE__ */ jsx("input", { type: "text", required: true, value: formData.location, onChange: (e) => setFormData({
              ...formData,
              location: e.target.value
            }), placeholder: "City, Country", className: "w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-stone-400 text-xs tracking-widest uppercase block mb-2", children: "Your Message" }),
            /* @__PURE__ */ jsx("textarea", { required: true, value: formData.message, onChange: (e) => setFormData({
              ...formData,
              message: e.target.value
            }), placeholder: "Share what Keanu means to you, a favorite memory, or a message for him and the community...", rows: 5, className: "w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors resize-none" })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold tracking-widest uppercase text-sm rounded-xl transition-all duration-300", children: loading ? "Submitting..." : "Share Message" }),
          /* @__PURE__ */ jsx("p", { className: "text-stone-600 text-xs text-center", children: "Messages are reviewed before appearing on the fan wall." })
        ] })
      ] }) }) })
    ] }) })
  ] });
}
export {
  FanMessagesPage as component
};
