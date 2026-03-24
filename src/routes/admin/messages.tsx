import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import fanMessages from '@/data/fanMessages'

export const Route = createFileRoute('/admin/messages')({
  component: AdminMessagesPage,
})

function AdminMessagesPage() {
  const [messages, setMessages] = useState(fanMessages.map((m) => ({ ...m, approved: true })))
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all')

  const filtered = filter === 'all' ? messages : messages.filter((m) => m.approved === (filter === 'approved'))

  const toggle = (id: string) => {
    setMessages((prev) => prev.map((m) => m.id === id ? { ...m, approved: !m.approved } : m))
  }

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Fan Messages</h1>
        <p className="text-stone-500 mt-1 text-sm">Review and moderate fan wall submissions</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        {(['all', 'approved', 'pending'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
              filter === f ? 'bg-amber-500 text-black' : 'bg-white/5 text-stone-400 hover:text-white border border-white/10'
            }`}
          >
            {f}
          </button>
        ))}
        <span className="text-stone-600 text-xs ml-2">{filtered.length} messages</span>
      </div>

      <div className="space-y-3">
        {filtered.map((msg) => (
          <div key={msg.id} className={`bg-neutral-900 border rounded-xl p-5 transition-colors ${msg.approved ? 'border-white/10' : 'border-orange-500/30'}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-sm font-bold flex-shrink-0">
                  {msg.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-white text-sm font-semibold">{msg.name}</span>
                    <span className="text-stone-500 text-xs">·</span>
                    <span className="text-stone-500 text-xs">{msg.location}</span>
                    <span className="text-stone-600 text-xs">·</span>
                    <span className="text-stone-600 text-xs">{new Date(msg.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">"{msg.message}"</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  msg.approved
                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                    : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                }`}>
                  {msg.approved ? 'Approved' : 'Pending'}
                </span>
                <button
                  onClick={() => toggle(msg.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    msg.approved
                      ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20'
                      : 'bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20'
                  }`}
                >
                  {msg.approved ? 'Reject' : 'Approve'}
                </button>
                <button className="px-3 py-1 bg-white/5 hover:bg-red-500/10 text-stone-500 hover:text-red-400 text-xs rounded-lg border border-white/10 hover:border-red-500/20 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
