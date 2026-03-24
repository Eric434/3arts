import { createFileRoute } from '@tanstack/react-router'
import events from '@/data/events'

export const Route = createFileRoute('/admin/bookings')({
  component: AdminBookingsPage,
})

// Mock booking data
const mockBookings = [
  { id: 'BK001', name: 'Jennifer L.', email: 'j***@gmail.com', event: events[0]?.title, type: 'VIP', qty: 2, total: 900, date: '2026-03-20', status: 'confirmed' },
  { id: 'BK002', name: 'Michael T.', email: 'm***@yahoo.com', event: events[1]?.title, type: 'General', qty: 1, total: 175, date: '2026-03-21', status: 'confirmed' },
  { id: 'BK003', name: 'Sophia K.', email: 's***@outlook.com', event: events[2]?.title, type: 'VIP', qty: 2, total: 2400, date: '2026-03-21', status: 'confirmed' },
  { id: 'BK004', name: 'David R.', email: 'd***@gmail.com', event: events[0]?.title, type: 'General', qty: 4, total: 600, date: '2026-03-22', status: 'confirmed' },
  { id: 'BK005', name: 'Aisha M.', email: 'a***@icloud.com', event: events[3]?.title, type: 'VIP', qty: 1, total: 550, date: '2026-03-22', status: 'pending' },
  { id: 'BK006', name: 'Carlos B.', email: 'c***@gmail.com', event: events[4]?.title, type: 'General', qty: 2, total: 250, date: '2026-03-23', status: 'confirmed' },
  { id: 'BK007', name: 'Emma W.', email: 'e***@hotmail.com', event: events[5]?.title, type: 'VIP', qty: 2, total: 1500, date: '2026-03-23', status: 'confirmed' },
  { id: 'BK008', name: 'James N.', email: 'j***@gmail.com', event: events[1]?.title, type: 'General', qty: 3, total: 525, date: '2026-03-24', status: 'pending' },
]

function AdminBookingsPage() {
  const totalRevenue = mockBookings.filter(b => b.status === 'confirmed').reduce((acc, b) => acc + b.total, 0)

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Bookings</h1>
        <p className="text-stone-500 mt-1 text-sm">All ticket reservations</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-5">
          <div className="text-stone-500 text-xs tracking-widest uppercase mb-2">Total Bookings</div>
          <div className="text-3xl font-bold text-white">{mockBookings.length}</div>
        </div>
        <div className="bg-neutral-900 border border-amber-400/20 rounded-2xl p-5">
          <div className="text-stone-500 text-xs tracking-widest uppercase mb-2">Revenue</div>
          <div className="text-3xl font-bold text-amber-400">${totalRevenue.toLocaleString()}</div>
        </div>
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-5">
          <div className="text-stone-500 text-xs tracking-widest uppercase mb-2">Confirmed</div>
          <div className="text-3xl font-bold text-green-400">{mockBookings.filter(b => b.status === 'confirmed').length}</div>
        </div>
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-5">
          <div className="text-stone-500 text-xs tracking-widest uppercase mb-2">Pending</div>
          <div className="text-3xl font-bold text-orange-400">{mockBookings.filter(b => b.status === 'pending').length}</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                {['Booking ID', 'Name', 'Event', 'Type', 'Qty', 'Total', 'Date', 'Status'].map((h) => (
                  <th key={h} className="text-left px-5 py-4 text-stone-500 text-xs tracking-widest uppercase whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                  <td className="px-5 py-4 text-amber-400 text-xs font-mono">{booking.id}</td>
                  <td className="px-5 py-4">
                    <div className="text-white text-sm font-medium">{booking.name}</div>
                    <div className="text-stone-600 text-xs">{booking.email}</div>
                  </td>
                  <td className="px-5 py-4 text-stone-400 text-sm max-w-[200px]">
                    <div className="line-clamp-1">{booking.event}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.type === 'VIP'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30'
                        : 'bg-white/5 text-stone-400 border border-white/10'
                    }`}>
                      {booking.type}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-stone-400 text-sm">{booking.qty}</td>
                  <td className="px-5 py-4 text-white font-bold text-sm">${booking.total.toLocaleString()}</td>
                  <td className="px-5 py-4 text-stone-400 text-xs whitespace-nowrap">{booking.date}</td>
                  <td className="px-5 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      booking.status === 'confirmed'
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
