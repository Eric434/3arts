import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import fanMessages from '@/data/fanMessages'

export const Route = createFileRoute('/fan-messages')({
  component: FanMessagesPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function FanMessagesPage() {
  const [formData, setFormData] = useState({ name: '', location: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/fan-message-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'fan-message', ...formData }),
      })
    } catch {}
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.06)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">Community</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Fan Wall
          </h1>
          <p className="text-stone-400 max-w-xl leading-relaxed">
            Share your message, your story, or your moment with Keanu. This is a space for fans to connect and celebrate.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Fan messages */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
              Fan Voices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {fanMessages.map((msg) => (
                <div key={msg.id} className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-amber-400/20 transition-colors">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-sm font-bold flex-shrink-0 mt-0.5">
                      {msg.avatar}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{msg.name}</div>
                      <div className="text-stone-500 text-xs">{msg.location}</div>
                      <div className="text-stone-600 text-xs mt-0.5">
                        {new Date(msg.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">"{msg.message}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Submission form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>
                    Leave Your Message
                  </h3>
                  <p className="text-stone-500 text-xs mt-1">Share your story with the community</p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-2xl mx-auto mb-4">
                      ♥
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Message Received!</h4>
                    <p className="text-stone-400 text-sm">
                      Thank you, {formData.name}! Your message will be reviewed and added to the fan wall shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                      <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="First name & last initial"
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">Location</label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="City, Country"
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-stone-400 text-xs tracking-widest uppercase block mb-2">Your Message</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share what Keanu means to you, a favorite memory, or a message for him and the community..."
                        rows={5}
                        className="w-full bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold tracking-widest uppercase text-sm rounded-xl transition-all duration-300"
                    >
                      {loading ? 'Submitting...' : 'Share Message'}
                    </button>
                    <p className="text-stone-600 text-xs text-center">Messages are reviewed before appearing on the fan wall.</p>
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
