import { Link, createFileRoute } from '@tanstack/react-router'
import events from '@/data/events'
import fanMessages from '@/data/fanMessages'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function StatCard({ label, value, sub, accent }: { label: string; value: string | number; sub?: string; accent?: boolean }) {
  return (
    <div className={`bg-neutral-900 border rounded-2xl p-6 ${accent ? 'border-amber-400/30' : 'border-white/10'}`}>
      <div className="text-stone-500 text-xs tracking-widest uppercase mb-2">{label}</div>
      <div className={`text-3xl font-bold mb-1 ${accent ? 'text-amber-400' : 'text-white'}`} style={{ fontFamily: 'Cinzel, serif' }}>
        {value}
      </div>
      {sub && <div className="text-stone-500 text-xs">{sub}</div>}
    </div>
  )
}

function AdminDashboard() {
  const upcomingEvents = events.filter((e) => e.status === 'upcoming')
  const totalCapacity = events.reduce((acc, e) => acc + e.capacity, 0)
  const totalAvailable = events.reduce((acc, e) => acc + e.availableTickets, 0)
  const totalSold = totalCapacity - totalAvailable

  return (
    <div className="p-6 lg:p-10 max-w-6xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Dashboard</h1>
        <p className="text-stone-500 mt-1 text-sm">Overview of Keanu Reeves fan events</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard label="Upcoming Events" value={upcomingEvents.length} accent />
        <StatCard label="Total Tickets Sold" value={totalSold.toLocaleString()} sub={`of ${totalCapacity.toLocaleString()} capacity`} />
        <StatCard label="Fan Messages" value={fanMessages.length} sub="Pending review: 0" />
        <StatCard label="Countries" value={6} sub="Global events" />
      </div>

      {/* Events table */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Upcoming Events</h2>
          <Link to="/admin/events" className="text-amber-400 hover:text-amber-300 text-xs tracking-widest uppercase transition-colors">
            Manage All →
          </Link>
        </div>
        <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase">Event</th>
                  <th className="text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase">Date</th>
                  <th className="text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase">Location</th>
                  <th className="text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase">Tickets</th>
                  <th className="text-left px-6 py-4 text-stone-500 text-xs tracking-widest uppercase">Status</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody>
                {upcomingEvents.map((event) => {
                  const sold = event.capacity - event.availableTickets
                  const pct = Math.round((sold / event.capacity) * 100)
                  return (
                    <tr key={event.id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-white text-sm font-medium">{event.title}</div>
                        <div className="text-stone-500 text-xs">{event.venue}</div>
                      </td>
                      <td className="px-6 py-4 text-stone-400 text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4 text-stone-400 text-sm">{event.city}, {event.country}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-stone-400 text-xs">{pct}%</span>
                        </div>
                        <div className="text-stone-600 text-xs mt-0.5">{event.availableTickets} left</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.availableTickets < 50
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {event.availableTickets < 50 ? 'Low Stock' : 'Available'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          to="/events/$eventId"
                          params={{ eventId: event.id }}
                          className="text-amber-400 hover:text-amber-300 text-xs tracking-wider uppercase transition-colors"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent fan messages */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Recent Fan Messages</h2>
          <Link to="/admin/messages" className="text-amber-400 hover:text-amber-300 text-xs tracking-widest uppercase transition-colors">
            Manage All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fanMessages.slice(0, 4).map((msg) => (
            <div key={msg.id} className="bg-neutral-900 border border-white/10 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-xs font-bold flex-shrink-0">
                {msg.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-white text-sm font-medium">{msg.name}</span>
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 flex-shrink-0">
                    Approved
                  </span>
                </div>
                <div className="text-stone-500 text-xs mb-1">{msg.location}</div>
                <p className="text-stone-400 text-xs leading-relaxed line-clamp-2">"{msg.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
