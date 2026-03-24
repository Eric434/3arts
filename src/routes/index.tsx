import { Link, createFileRoute } from '@tanstack/react-router'
import events from '@/data/events'
import fanMessages from '@/data/fanMessages'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const featuredEvents = events.filter((e) => e.featured)
  const recentMessages = fanMessages.slice(0, 3)

  return (
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-950 z-10" />
          <img
            src="/keanu-casual.jpg"
            alt="Keanu Reeves"
            className="w-full h-full object-cover object-top opacity-40"
          />
        </div>

        {/* Decorative lines */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        </div>

        <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 px-6 max-w-7xl mx-auto w-full">
          {/* Hero photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-400/30 shadow-[0_0_60px_rgba(245,158,11,0.15)]">
              <img
                src="/keanu-hero.jpg"
                alt="Keanu Reeves portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero text */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="text-xs tracking-[0.5em] uppercase text-amber-400 font-medium border border-amber-400/30 px-4 py-2 rounded-full">
                3 Arts Entertainment Presents
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}
            >
              Keanu
              <br />
              <span className="text-amber-400">Reeves</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl leading-relaxed font-light">
              An extraordinary journey into the world of one of Hollywood's most beloved icons. Experience intimate evenings, exclusive meet and greets, and unforgettable fan moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/events"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                View All Events
              </Link>
              <Link
                to="/fan-messages"
                className="px-8 py-4 border border-white/30 hover:border-amber-400/60 text-white hover:text-amber-400 font-medium tracking-widest uppercase text-sm rounded transition-all duration-300"
              >
                Fan Wall
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-stone-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-stone-500 to-transparent" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-neutral-900 border-y border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Events Worldwide' },
              { number: '100K+', label: 'Fans Attended' },
              { number: '6', label: 'Countries' },
              { number: '15+', label: 'Years of Events' },
            ].map(({ number, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-amber-400 mb-1" style={{ fontFamily: 'Cinzel, serif' }}>{number}</div>
                <div className="text-stone-400 text-xs tracking-widest uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">Don't Miss Out</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Cinzel, serif' }}>
                Featured Events
              </h2>
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm tracking-wider uppercase transition-colors group">
              All Events
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event, i) => (
              <Link
                key={event.id}
                to="/events/$eventId"
                params={{ eventId: event.id }}
                className={`group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)] ${i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {event.availableTickets < 100 && (
                      <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-bold tracking-wider uppercase rounded-full">
                        Limited
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-amber-400/80 text-xs tracking-widest uppercase mb-2">
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{event.city}, {event.country}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'Cinzel, serif' }}>
                    {event.title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-stone-500 text-xs">From </span>
                      <span className="text-white font-bold text-lg">${event.price}</span>
                    </div>
                    <span className="text-amber-400 text-xs tracking-widest uppercase group-hover:translate-x-1 transition-transform inline-block">
                      Book Now →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/events" className="inline-flex items-center gap-2 text-amber-400 text-sm tracking-wider uppercase">
              View All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* About / Quote section */}
      <section className="py-24 px-6 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(245,158,11,0.08)]">
                <img
                  src="/keanu-smile.jpg"
                  alt="Keanu Reeves smiling"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-px bg-amber-400/50 mx-auto md:mx-0 mb-10" />
              <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
                "The simple act of paying attention can take you a long way."
              </blockquote>
              <cite className="text-amber-400/80 text-sm tracking-widest uppercase not-italic">— Keanu Reeves</cite>
              <div className="w-16 h-px bg-amber-400/50 mx-auto md:mx-0 mt-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: '◆',
                title: 'Intimate Experiences',
                desc: 'Small group settings ensure every fan gets a genuine, personal moment with Keanu.',
              },
              {
                icon: '◆',
                title: 'Exclusive Access',
                desc: 'VIP packages unlock behind-the-scenes content, priority seating, and private receptions.',
              },
              {
                icon: '◆',
                title: 'Global Community',
                desc: 'Connect with fellow fans from around the world who share your passion and admiration.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <span className="text-amber-400 text-xs">{icon}</span>
                <h4 className="text-white font-semibold tracking-wide">{title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keanu Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">Behind the Scenes</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Cinzel, serif' }}>
              Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)]">
              <img src="/keanu-hero.jpg" alt="Keanu Reeves close-up portrait" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)]">
              <img src="/keanu-event.png" alt="Keanu Reeves at an event" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)]">
              <img src="/keanu-casual.jpg" alt="Keanu Reeves casual" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Fan Messages Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-medium">From the Community</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Cinzel, serif' }}>
                Fan Voices
              </h2>
            </div>
            <Link to="/fan-messages" className="hidden md:flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm tracking-wider uppercase transition-colors group">
              View All <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-sm font-bold">
                    {msg.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{msg.name}</div>
                    <div className="text-stone-500 text-xs">{msg.location}</div>
                  </div>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed line-clamp-4">"{msg.message}"</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/fan-messages"
              className="inline-flex items-center gap-2 px-8 py-3 border border-amber-400/30 hover:border-amber-400 text-amber-400 hover:text-amber-300 text-xs tracking-widest uppercase rounded transition-all duration-300"
            >
              Share Your Message →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Reserve Your Spot
          </h2>
          <p className="text-stone-400 mb-10 leading-relaxed">
            Tickets sell out fast. Secure your place at the most exclusive fan events of the year before they're gone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm rounded transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]"
            >
              Browse Events
            </Link>
            <Link
              to="/fan-messages"
              className="px-10 py-4 border border-white/20 hover:border-white/40 text-white text-sm font-medium tracking-widest uppercase rounded transition-all duration-300"
            >
              Join the Fan Wall
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
