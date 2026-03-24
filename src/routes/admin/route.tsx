import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})

function AdminLayout() {
  const navItems = [
    { to: '/admin', label: 'Dashboard', exact: true },
    { to: '/admin/events', label: 'Events' },
    { to: '/admin/bookings', label: 'Bookings' },
    { to: '/admin/messages', label: 'Fan Messages' },
    { to: '/admin/gallery', label: 'Gallery' },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 border-r border-white/10 flex flex-col hidden lg:flex">
        <div className="p-6 border-b border-white/10">
          <div className="text-xs tracking-[0.3em] uppercase text-amber-400/80 font-light">Admin Panel</div>
          <div className="text-lg font-bold tracking-wide text-white mt-0.5" style={{ fontFamily: 'Cinzel, serif' }}>
            Keanu Events
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ to, label, exact }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-stone-400 hover:text-white hover:bg-white/5 text-sm transition-all"
              activeProps={{ className: 'flex items-center gap-3 px-4 py-2.5 rounded-xl bg-amber-500/15 text-amber-400 text-sm border border-amber-400/20' }}
              activeOptions={{ exact }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link to="/" className="flex items-center gap-2 px-4 py-2.5 text-stone-500 hover:text-stone-300 text-xs tracking-widest uppercase transition-colors">
            ← Back to Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile header */}
        <div className="lg:hidden border-b border-white/10 px-6 py-4 flex items-center justify-between bg-neutral-900">
          <span className="text-white font-bold text-sm" style={{ fontFamily: 'Cinzel, serif' }}>Admin Panel</span>
          <Link to="/" className="text-stone-500 hover:text-white text-xs tracking-widest uppercase">← Site</Link>
        </div>
        <div className="lg:hidden px-6 py-3 bg-neutral-900/50 border-b border-white/10 flex gap-3 overflow-x-auto">
          {navItems.map(({ to, label, exact }) => (
            <Link
              key={to}
              to={to}
              className="flex-shrink-0 px-3 py-1.5 rounded-lg text-stone-400 text-xs tracking-wider uppercase"
              activeProps={{ className: 'flex-shrink-0 px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-400 text-xs tracking-wider uppercase' }}
              activeOptions={{ exact }}
            >
              {label}
            </Link>
          ))}
        </div>

        <Outlet />
      </div>
    </div>
  )
}
