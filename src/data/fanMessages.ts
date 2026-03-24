export interface FanMessage {
  id: string
  name: string
  location: string
  message: string
  date: string
  avatar: string
  approved: boolean
}

const fanMessages: FanMessage[] = [
  {
    id: '1',
    name: 'Sarah M.',
    location: 'Los Angeles, CA',
    message: 'Keanu has been my hero since Speed. The way he carries himself with such humility despite being one of the biggest stars in the world is just incredible. Cannot wait for the LA event!',
    date: '2026-03-10',
    avatar: 'SM',
    approved: true,
  },
  {
    id: '2',
    name: 'James T.',
    location: 'New York, NY',
    message: 'I attended the NYC event last year and it changed my life. Keanu took the time to genuinely connect with every single fan. He remembered names, asked questions — it felt real. Booking tickets for Chicago this time!',
    date: '2026-03-08',
    avatar: 'JT',
    approved: true,
  },
  {
    id: '3',
    name: 'Yuki H.',
    location: 'Tokyo, Japan',
    message: 'I flew from Japan specifically for the San Francisco Matrix retrospective event. As a huge fan of the franchise, this is truly a dream come true. Thank you for making these international connections possible.',
    date: '2026-03-12',
    avatar: 'YH',
    approved: true,
  },
  {
    id: '4',
    name: 'Maria G.',
    location: 'Chicago, IL',
    message: 'The charity gala sounds absolutely wonderful. What a beautiful way to combine celebrating such an amazing artist with giving back to arts education. This is exactly the kind of event the world needs.',
    date: '2026-03-15',
    avatar: 'MG',
    approved: true,
  },
  {
    id: '5',
    name: 'David K.',
    location: 'Austin, TX',
    message: 'Keanu Reeves is the definition of a genuine human being in Hollywood. His career speaks for itself, but his character speaks even louder. The Austin convention is going to be legendary.',
    date: '2026-03-18',
    avatar: 'DK',
    approved: true,
  },
  {
    id: '6',
    name: 'Emma W.',
    location: 'London, UK',
    message: 'SO excited for the London show! The O2 is going to be electric. I have been a fan since Bill & Ted and seeing him live in my home city is a bucket list moment. Already got my VIP tickets!',
    date: '2026-03-20',
    avatar: 'EW',
    approved: true,
  },
  {
    id: '7',
    name: 'Carlos R.',
    location: 'Miami, FL',
    message: 'Beyond excited for all these events. Keanu represents the best of Hollywood — talent, kindness, and authenticity. Every story you hear about him meeting fans on the street just confirms what a special person he is.',
    date: '2026-03-22',
    avatar: 'CR',
    approved: true,
  },
  {
    id: '8',
    name: 'Aisha B.',
    location: 'Toronto, Canada',
    message: 'I have seen every Keanu film multiple times. John Wick, The Matrix, Point Break — his range is extraordinary. Getting to meet him in person and express my gratitude would be the highlight of my year.',
    date: '2026-03-23',
    avatar: 'AB',
    approved: true,
  },
]

export default fanMessages
