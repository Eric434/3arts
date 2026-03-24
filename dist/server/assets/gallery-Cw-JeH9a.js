import { jsxs, jsx } from "react/jsx-runtime";
import { g as galleryImages } from "./gallery-BDE48dZH.js";
function AdminGalleryPage() {
  return /* @__PURE__ */ jsxs("div", { className: "p-6 lg:p-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-white", style: {
          fontFamily: "Cinzel, serif"
        }, children: "Gallery" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 mt-1 text-sm", children: "Manage event photos" })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-widest uppercase rounded-xl transition-colors", children: "+ Upload Photos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: galleryImages.map((img) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-xl bg-neutral-900 border border-white/10 hover:border-amber-400/30 transition-all", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: img.src, alt: img.alt, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-white text-xs font-medium line-clamp-1", children: img.event }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-stone-600 text-xs", children: img.year }),
          /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/20", children: "Published" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("button", { className: "px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg border border-white/20 transition-colors", children: "Edit" }),
        /* @__PURE__ */ jsx("button", { className: "px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs rounded-lg border border-red-500/30 transition-colors", children: "Delete" })
      ] })
    ] }, img.id)) })
  ] });
}
export {
  AdminGalleryPage as component
};
