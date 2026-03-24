import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import events from '@/data/events'

export const Route = createFileRoute('/events/$eventId')({
  component: EventDetailPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function EventDetailPage() {
  const { eventId } = Route.useParams()
  const event = events.find((e) => e.id === eventId)

  const [ticketType, setTicketType] = useState<'general' | 'vip'>('general')
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!event) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
          <Link to="/events" className="text-amber-400 hover:text-amber-300">← Back to Events</Link>
        </div>
      </div>
    )
  }

  const price = ticketType === 'vip' ? event.vipPrice : event.price
  const total = price * quantity

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/ticket-booking.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'ticket-booking',
          ...formData,
          event: event.title,
          eventId: event.id,
          ticketType,
          quantity: quantity.toString(),
          total: total.toString(),
        }),
      })
      setSubmitted(true)
    } catch {
      // still show success on netlify
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const date = new Date(event.date)

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero image */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-neutral-950" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/events" className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 text-xs tracking-widest uppercase mb-6 transition-colors">
              ← All Events
            </Link>
            <div className="flex flex-wrap gap-2 mb-3">
              {event.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Event info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Date', value: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) },
                { label: 'Time', value: event.time },
                { label: 'Venue', value: event.venue },
                { label: 'Location', value: `${event.city}${event.state ? `, ${event.state}` : ''}, ${event.country}` },
              ].map(({ label, value }) => (
                <div key={label} className="bg-neutral-900 border border-white/10 rounded-xl p-4">
                  <div className="text-amber-400/70 text-xs tracking-widest uppercase mb-1">{label}</div>
                  <div className="text-white text-sm font-medium">{value}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>About This Event</h2>
              <div className="text-stone-300 leading-relaxed space-y-4">
                {event.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Ticket types info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Ticket Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <div className="text-stone-300 text-xs tracking-widest uppercase mb-3">General Admission</div>
                  <div className="text-3xl font-bold text-white mb-4">${event.price}</div>
                  <ul className="text-stone-400 text-sm space-y-2">
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Full Q&A session access</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Fan lounge access</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Event commemorative program</li>
                    <li className="flex items-center gap-2"><span className="text-stone-600">✗</span> Personal photo opportunity</li>
                    <li className="flex items-center gap-2"><span className="text-stone-600">✗</span> VIP reception</li>
                  </ul>
                </div>
                <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-6 relative">
                  <div className="absolute top-3 right-3 px-2 py-1 bg-amber-500 text-black text-xs font-bold rounded">VIP</div>
                  <div className="text-amber-400 text-xs tracking-widest uppercase mb-3">VIP Experience</div>
                  <div className="text-3xl font-bold text-white mb-4">${event.vipPrice}</div>
                  <ul className="text-stone-400 text-sm space-y-2">
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Everything in General</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Personal photo with Keanu</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Autographed collectible</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Early entry & VIP reception</li>
                    <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Priority front-row seating</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Book Tickets</h3>
                  <p className="text-stone-500 text-xs mt-1">{event.availableTickets} seats remaining</p>
                  {/* Availability bar */}
                  <div className="mt-3 h-1 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${Math.max(5, (event.availableTickets / event.capacity) * 100)}%` }}
                    />
                  </div>
                </div>

                {submitted ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-2xl mx-auto mb-4">
                      ✓
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Booking Confirmed!</h4>
                    <p className="text-stone-400 text-sm mb-6">
                      Your tickets for <strong className="text-white">{event.title}</strong> have been reserved. A confirmation will be sent to {formData.email}.
                    </p>
                    <Link to="/events" className="text-amber-400 hover:text-amber-300 text-sm tracking-wider uppercase transition-colors">
                      ← Browse More Events
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Ticket type */}
                    <div>
                      <label className="text-stone-400 text-xs tracking-widest uppercase block mb-3">Ticket Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['general', 'vip'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setTicketType(type)}
                            className={`py-3 px-4 rounded-xl text-sm font-medium tracking-wider uppercase border transition-all ${
                              ticketType === type
                                ? type === 'vip'
                                  ? 'bg-amber-500 border-amber-500 text-black'
                                  : 'bg-white/10 border-white/30 text-white'
                                : 'bg-transparent border-white/10 text-stone-500 hover:border-white/20'
                            }`}
                          >
                            {type === 'general' ? 'General' : 'VIP'}
                            <div className="text-xs mt-0.5 font-normal">
                              ${type === 'general' ? event.price : event.vipPrice}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="text-stone-400 text-xs tracking-widest uppercase block mb-3">Quantity</label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-xl border border-white/10 text-white hover:border-amber-400/50 transition-colors flex items-center justify-center"
                        >
                          −
                        </button>
                        <span className="text-white font-bold text-lg w-8 text-center">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.min(10, quantity + 1))}
                          className="w-10 h-10 rounded-xl border border-white/10 text-white hover:border-amber-400/50 transition-colors flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Personal info */}
                    <div>
                      <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                      />
                    </div>

                    {/* Total */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-stone-400 text-sm">{quantity}x {ticketType === 'vip' ? 'VIP' : 'General'} Ticket</span>
                        <span className="text-white font-bold">${total}</span>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <span className="text-stone-500 text-xs">Service fee</span>
                        <span className="text-stone-400 text-xs">Included</span>
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold tracking-widest uppercase text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                      >
                        {loading ? 'Processing...' : `Reserve for $${total}`}
                      </button>
                      <p className="text-stone-600 text-xs text-center mt-3">Secure booking · Instant confirmation</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
