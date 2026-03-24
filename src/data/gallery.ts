export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  event?: string
  year?: string
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
    alt: 'Event at The Wiltern Theater',
    category: 'events',
    event: 'Los Angeles 2025',
    year: '2025',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80',
    alt: 'Fan meet and greet moment',
    category: 'meetgreet',
    event: 'New York 2025',
    year: '2025',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1493225255506-52b79da1b08e?w=600&q=80',
    alt: 'Charity Gala Evening',
    category: 'events',
    event: 'Chicago Gala 2025',
    year: '2025',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
    alt: 'Film screening event',
    category: 'screenings',
    event: 'Matrix Retrospective',
    year: '2025',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    alt: 'Fan convention crowd',
    category: 'conventions',
    event: 'Austin Convention 2025',
    year: '2025',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80',
    alt: 'Arena event',
    category: 'events',
    event: 'London 2025',
    year: '2025',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80',
    alt: 'Intimate Q&A session',
    category: 'meetgreet',
    event: 'SF Q&A 2024',
    year: '2024',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    alt: 'Concert venue atmosphere',
    category: 'events',
    event: 'Miami 2024',
    year: '2024',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80',
    alt: 'Exclusive fan signing',
    category: 'meetgreet',
    event: 'Dallas 2024',
    year: '2024',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80',
    alt: 'Music and entertainment night',
    category: 'events',
    event: 'Nashville 2024',
    year: '2024',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
    alt: 'Fan celebration event',
    category: 'conventions',
    event: 'Vegas 2024',
    year: '2024',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=600&q=80',
    alt: 'Gala night highlights',
    category: 'events',
    event: 'Seattle Gala 2024',
    year: '2024',
  },
]

export default galleryImages
