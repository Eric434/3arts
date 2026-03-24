const events = [
  {
    id: "1",
    title: "An Evening with Keanu Reeves – Los Angeles",
    date: "2026-04-15",
    time: "7:00 PM",
    venue: "The Wiltern Theater",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    description: "An intimate evening with Keanu Reeves featuring Q&A, photo opportunities, and exclusive memorabilia signing.",
    longDescription: `Step into an unforgettable evening with one of Hollywood's most beloved icons. This exclusive meet and greet event offers fans a rare chance to connect with Keanu Reeves in an intimate setting at the iconic Wiltern Theater.

The evening includes a 45-minute moderated Q&A session where Keanu will discuss his career, philosophy, and upcoming projects. VIP ticket holders receive a personal photo opportunity, an autographed collectible, and early venue access with a complimentary reception.

General admission includes the full Q&A session and access to the fan lounge where select signed merchandise will be available for purchase.`,
    price: 150,
    vipPrice: 450,
    capacity: 500,
    availableTickets: 87,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    tags: ["Q&A", "Photo Op", "Signing", "VIP"],
    featured: true,
    status: "upcoming"
  },
  {
    id: "2",
    title: "Keanu Reeves Fan Experience – New York",
    date: "2026-05-02",
    time: "6:30 PM",
    venue: "Brooklyn Steel",
    city: "New York",
    state: "NY",
    country: "USA",
    description: "A full fan experience in NYC with live discussions, behind-the-scenes stories, and VIP meet & greet packages.",
    longDescription: `New York City fans, your moment has arrived. Join us at Brooklyn Steel for an incredible fan experience celebrating the career and legacy of Keanu Reeves.

This event features an extended two-hour program including never-before-heard stories from the set, a live audience Q&A, and a special screening of fan-favorite clips. VIP guests enjoy a private cocktail reception beforehand with a guaranteed personal photo and autograph.

All attendees receive an exclusive event program and the chance to win a signed collector's edition poster through our fan lottery.`,
    price: 175,
    vipPrice: 500,
    capacity: 800,
    availableTickets: 234,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    tags: ["Fan Experience", "Q&A", "Screening", "VIP"],
    featured: true,
    status: "upcoming"
  },
  {
    id: "3",
    title: "Keanu Reeves Charity Gala – Chicago",
    date: "2026-05-20",
    time: "8:00 PM",
    venue: "Lyric Opera House",
    city: "Chicago",
    state: "IL",
    country: "USA",
    description: "A black-tie charity gala benefiting arts education programs, featuring Keanu Reeves as the honorary host.",
    longDescription: `Join us for a magnificent black-tie charity gala at the breathtaking Lyric Opera House in Chicago. Keanu Reeves serves as honorary host for this extraordinary evening benefiting arts education programs for underserved youth.

Guests will enjoy a gourmet dinner, live musical performances, a silent auction featuring one-of-a-kind memorabilia, and a special address from Keanu himself. The evening concludes with an exclusive reception where all attendees can meet Keanu and receive a commemorative gift.

All net proceeds go directly to the Keanu Reeves Arts Foundation, supporting creative education in schools nationwide.`,
    price: 350,
    vipPrice: 1200,
    capacity: 300,
    availableTickets: 42,
    image: "https://images.unsplash.com/photo-1493225255506-52b79da1b08e?w=800&q=80",
    tags: ["Gala", "Charity", "Black Tie", "VIP"],
    featured: true,
    status: "upcoming"
  },
  {
    id: "4",
    title: "Matrix Retrospective – San Francisco",
    date: "2026-06-10",
    time: "7:30 PM",
    venue: "Castro Theatre",
    city: "San Francisco",
    state: "CA",
    country: "USA",
    description: "A special Matrix retrospective screening followed by an intimate conversation with Keanu about the iconic franchise.",
    longDescription: `Celebrate 25+ years of The Matrix with a very special retrospective evening at the historic Castro Theatre. This unique event features a curated screening of iconic scenes from across the Matrix franchise, followed by an in-depth conversation with Keanu Reeves about the making of these groundbreaking films.

Keanu will share behind-the-scenes anecdotes, discuss the philosophical themes that shaped the films, and talk about what Neo means to him today. The evening wraps with a book signing and photo opportunity for VIP ticket holders.

This is a once-in-a-lifetime event for fans of the franchise and cinema history alike.`,
    price: 200,
    vipPrice: 550,
    capacity: 400,
    availableTickets: 156,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    tags: ["Matrix", "Screening", "Q&A", "Retrospective"],
    featured: false,
    status: "upcoming"
  },
  {
    id: "5",
    title: "Keanu Reeves Fan Convention – Austin",
    date: "2026-07-04",
    time: "12:00 PM",
    venue: "Austin Convention Center",
    city: "Austin",
    state: "TX",
    country: "USA",
    description: "A full day fan convention featuring panels, photo sessions, autograph signings, and more with Keanu Reeves.",
    longDescription: `Austin's biggest fan event of the year! A full-day convention experience dedicated to the extraordinary career of Keanu Reeves. Set across multiple stages and rooms at the Austin Convention Center, this convention offers something for every fan.

The day features three main panels exploring different eras of Keanu's career, a dedicated photo studio with personalized photo sessions, an autograph signing stage, and an immersive exhibit featuring props and memorabilia from his most iconic films.

VIP Fast Pass holders enjoy priority access to all activities, a special early morning breakfast with Keanu, and an exclusive collectible set available only at this event.`,
    price: 125,
    vipPrice: 600,
    capacity: 2e3,
    availableTickets: 789,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    tags: ["Convention", "All Day", "Panels", "Signing"],
    featured: false,
    status: "upcoming"
  },
  {
    id: "6",
    title: "An Evening with Keanu – London",
    date: "2026-08-15",
    time: "7:00 PM",
    venue: "The O2 Arena",
    city: "London",
    state: "",
    country: "UK",
    description: "Keanu Reeves comes to London for an exclusive evening of storytelling, fan interaction, and special surprises.",
    longDescription: `London, the wait is over! Keanu Reeves is bringing his acclaimed fan experience to The O2 Arena for one spectacular night. This landmark event will be the largest fan gathering outside North America and promises to be truly unforgettable.

The evening features Keanu in conversation with a special celebrity host, an extended Q&A with audience participation, exclusive world premiere footage from upcoming projects, and a grand finale that will leave every attendee speechless.

VIP packages include a pre-show dinner at a private venue, guaranteed front-row seating, a signed limited edition art print, and a post-show backstage experience with Keanu.`,
    price: 180,
    vipPrice: 750,
    capacity: 5e3,
    availableTickets: 1200,
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
    tags: ["International", "Arena", "VIP", "World Tour"],
    featured: false,
    status: "upcoming"
  }
];
export {
  events as e
};
