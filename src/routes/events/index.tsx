import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import events, { type Event } from '@/data/events'

export const Route = createFileRoute('/events/')({
  component: EventsPage,
})

function EventCard({ event }: { event: Event }) {
  const date = new Date(event.date)
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const day = date.getDate()

  return (
    <Link
      to="/events/$eventId"
      params={{ eventId: event.id }}
      className="group flex flex-col md:flex-row gap-0 bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_4px_30px_rgba(245,158,11,0.08)]"
    >
      <div className="relative md:w-64 aspect-video md:aspect-auto overflow-hidden flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/50 hidden md:block" />
        {event.availableTickets < 100 && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-bold tracking-wider uppercase rounded-full">
              Limited Seats
            </span>
          </div>
        )}
        {event.status === 'soldout' && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold tracking-widest uppercase text-lg">Sold Out</span>
          </div>
        )}
      </div>

      <div className="flex-1 p-6 flex flex-col md:flex-row gap-6">
        {/* Date badge */}
        <div className="hidden md:flex flex-col items-center justify-center w-16 flex-shrink-0 text-center">
          <span className="text-amber-400 text-xs font-bold tracking-widest">{month}</span>
          <span className="text-white text-3xl font-bold leading-none">{day}</span>
          <span className="text-stone-500 text-xs">{date.getFullYear()}</span>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-amber-400/80 text-xs tracking-widest uppercase">
              {event.city}{event.state ? `, ${event.state}` : ''} · {event.country}
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-500 text-xs">{event.time}</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Cinzel, serif' }}>
            {event.title}
          </h3>
          <p className="text-stone-400 text-sm leading-relaxed mb-4 line-clamp-2">{event.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-stone-400 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-stone-500 text-xs">General </span>
                <span className="text-white font-bold">${event.price}</span>
              </div>
              <div>
                <span className="text-stone-500 text-xs">VIP </span>
                <span className="text-amber-400 font-bold">${event.vipPrice}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-500 text-xs">{event.availableTickets} seats left</span>
              <span className="text-amber-400 text-sm group-hover:translate-x-1 transition-transform inline-block">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function EventsPage() {
  const [filter, setFilter] = useState<string>('all')

  const cities = ['all', ...Array.from(new Set(events.map((e) => e.city)))]
  const filtered = filter === 'all' ? events : events.filter((e) => e.city === filter)

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Page Header */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.06)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">2026 World Tour</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            All Events
          </h1>
          <p className="text-stone-400 max-w-xl leading-relaxed">
            Browse all upcoming Keanu Reeves fan events, meet and greets, and exclusive experiences around the world. Secure your tickets before they sell out.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-20 z-30 bg-neutral-950/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <span className="text-stone-500 text-xs tracking-widest uppercase flex-shrink-0">Filter:</span>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setFilter(city)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                filter === city
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {city === 'all' ? 'All Cities' : city}
            </button>
          ))}
        </div>
      </div>

      {/* Events list */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-stone-500">No events found for this filter.</div>
        ) : (
          <div className="flex flex-col gap-6">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
