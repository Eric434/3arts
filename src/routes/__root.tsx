import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: '3 Arts Entertainment – Keanu Reeves Official Fan Events' },
      { name: 'description', content: '3 Arts Entertainment presents official meet and greet events, fan experiences, and exclusive evenings with Keanu Reeves.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium tracking-widest uppercase text-stone-300 hover:text-amber-400 transition-colors duration-300"
      activeProps={{ className: 'text-sm font-medium tracking-widest uppercase text-amber-400' }}
      activeOptions={{ exact: to === '/' }}
    >
      {children}
    </Link>
  )
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="text-xs tracking-[0.3em] uppercase text-amber-400/80 font-light">Presents</span>
          <span className="text-xl font-bold tracking-[0.15em] uppercase text-white group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Cinzel, serif' }}>
            3 Arts Entertainment
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/fan-messages">Fan Wall</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/events"
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold tracking-widest uppercase rounded transition-colors duration-300"
          >
            Book Tickets
          </Link>
          <Link
            to="/admin"
            className="px-4 py-2 border border-white/20 hover:border-amber-400/50 text-white/60 hover:text-amber-400 text-xs font-medium tracking-widest uppercase rounded transition-all duration-300"
          >
            Admin
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`h-px bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/fan-messages">Fan Wall</NavLink>
          <Link to="/events" className="mt-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold tracking-widest uppercase rounded text-center transition-colors">
            Book Tickets
          </Link>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-xs tracking-[0.3em] uppercase text-amber-400/80 font-light block">Presents</span>
              <span className="text-2xl font-bold tracking-[0.15em] uppercase text-white" style={{ fontFamily: 'Cinzel, serif' }}>
                3 Arts Entertainment
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Official 3 Arts Entertainment platform for Keanu Reeves fan events, meet and greet experiences, and exclusive entertainment gatherings worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-semibold mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/events', 'Events'], ['/gallery', 'Gallery'], ['/fan-messages', 'Fan Wall']].map(([to, label]) => (
                <Link key={to} to={to} className="text-stone-400 hover:text-amber-400 text-sm transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-stone-400 text-sm">
              <span>Press Inquiries</span>
              <span>press@keanuevents.com</span>
              <span className="mt-2">Fan Support</span>
              <span>support@keanuevents.com</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs">&copy; 2026 3 Arts Entertainment. All rights reserved.</p>
          <p className="text-stone-600 text-xs">Designed with love for fans worldwide.</p>
        </div>
      </div>
    </footer>
  )
}

function SmartsuppChat() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const w = window as any
    w._smartsupp = w._smartsupp || {}
    w._smartsupp.key = 'd3d0bffbd5849b95389635b5a54f897b2ee31492'
    if (!w.smartsupp) {
      const o: any = (w.smartsupp = function () {
        o._.push(arguments)
      })
      o._ = []
      const s = document.getElementsByTagName('script')[0]
      const c = document.createElement('script')
      c.type = 'text/javascript'
      c.charset = 'utf-8'
      c.async = true
      c.src = 'https://www.smartsuppchat.com/loader.js?'
      s?.parentNode?.insertBefore(c, s)
    }
  }, [])
  return null
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-neutral-950 text-white min-h-screen">
        <Header />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
        <SmartsuppChat />
        <Scripts />
      </body>
    </html>
  )
}
