import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import galleryImages from '@/data/gallery'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

function GalleryPage() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const categories = ['all', 'events', 'meetgreet', 'conventions', 'screenings']
  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.06)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">Memories</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Photo Gallery
          </h1>
          <p className="text-stone-400 max-w-xl leading-relaxed">
            Relive the magic from past events. Moments of connection, joy, and unforgettable experiences shared between Keanu and his fans.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="sticky top-20 z-30 bg-neutral-950/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto">
          <span className="text-stone-500 text-xs tracking-widest uppercase flex-shrink-0">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                filter === cat
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat === 'all' ? 'All Photos' : cat === 'meetgreet' ? 'Meet & Greet' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl"
              onClick={() => setLightbox(img.src.replace('w=600', 'w=1200'))}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: i % 3 === 0 ? '3/4' : '4/3' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs font-medium">{img.event}</p>
                <p className="text-stone-400 text-xs">{img.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-400 text-2xl transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
