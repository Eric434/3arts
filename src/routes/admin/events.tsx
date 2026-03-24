import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import events, { type Event } from '@/data/events'

export const Route = createFileRoute('/admin/events')({
  component: AdminEventsPage,
})

function AdminEventsPage() {
  const [search, setSearch] = useState('')

  const filtered = events.filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.city.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Events</h1>
          <p className="text-stone-500 mt-1 text-sm">Manage all fan events</p>
        </div>
        <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-widest uppercase rounded-xl transition-colors">
          + Add Event
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors"
        />
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filtered.map((event) => {
          const sold = event.capacity - event.availableTickets
          const pct = Math.round((sold / event.capacity) * 100)
          return (
            <div key={event.id} className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/20 transition-colors">
              <div className="relative h-40 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80" />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    event.availableTickets < 50
                      ? 'bg-red-500/90 text-white'
                      : 'bg-green-500/90 text-white'
                  }`}>
                    {event.availableTickets < 50 ? '⚠ Low Stock' : '● Active'}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-amber-400/70 text-xs tracking-widest uppercase mb-1">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {event.city}
                </div>
                <h3 className="text-white font-semibold mb-3 line-clamp-1">{event.title}</h3>

                <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                  <div className="bg-neutral-800 rounded-lg p-2">
                    <div className="text-white text-sm font-bold">{event.capacity}</div>
                    <div className="text-stone-600 text-xs">Capacity</div>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-2">
                    <div className="text-amber-400 text-sm font-bold">{sold}</div>
                    <div className="text-stone-600 text-xs">Sold</div>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-2">
                    <div className="text-white text-sm font-bold">{event.availableTickets}</div>
                    <div className="text-stone-600 text-xs">Remaining</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs text-stone-500 mb-1">
                    <span>Sales progress</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex gap-3">
                    <span className="text-stone-400 text-xs">GA: <strong className="text-white">${event.price}</strong></span>
                    <span className="text-stone-400 text-xs">VIP: <strong className="text-amber-400">${event.vipPrice}</strong></span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white text-xs rounded-lg transition-colors border border-white/10">
                      Edit
                    </button>
                    <Link
                      to="/events/$eventId"
                      params={{ eventId: event.id }}
                      className="px-3 py-1.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 text-xs rounded-lg transition-colors border border-amber-400/20"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
