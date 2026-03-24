import { createFileRoute } from '@tanstack/react-router'
import galleryImages from '@/data/gallery'

export const Route = createFileRoute('/admin/gallery')({
  component: AdminGalleryPage,
})

function AdminGalleryPage() {
  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Gallery</h1>
          <p className="text-stone-500 mt-1 text-sm">Manage event photos</p>
        </div>
        <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-widest uppercase rounded-xl transition-colors">
          + Upload Photos
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img) => (
          <div key={img.id} className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-white/10 hover:border-amber-400/30 transition-all">
            <div className="aspect-square overflow-hidden">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-3">
              <p className="text-white text-xs font-medium line-clamp-1">{img.event}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-stone-600 text-xs">{img.year}</span>
                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/20">Published</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg border border-white/20 transition-colors">Edit</button>
              <button className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs rounded-lg border border-red-500/30 transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
