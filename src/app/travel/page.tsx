const hotels = [
  { name: "Hotel 1", description: "Details coming soon.", bookUrl: "#" },
  { name: "Hotel 2", description: "Details coming soon.", bookUrl: "#" },
  { name: "Airbnbs", description: "Details coming soon.", bookUrl: "#" },
];

const transport = [
  {
    title: "Wedding Day Shuttle",
    description: "Details coming soon.",
  },
  {
    title: "Rideshare",
    description:
      "Uber and Lyft are available in the area. We recommend booking your return trip in advance.",
  },
  {
    title: "Parking",
    description: "Complimentary parking is available at the venue.",
  },
];

export default function Travel() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-olive-700 text-5xl mb-12 text-center">
          Travel
        </h1>

        <h2 className="font-heading text-olive-700 text-3xl mb-8">
          Accommodations
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="bg-sage-100 p-8">
              <h3 className="font-heading text-olive-700 text-xl mb-3">
                {hotel.name}
              </h3>
              <p className="font-body text-teal-700 mb-6">
                {hotel.description}
              </p>
              <a
                href={hotel.bookUrl}
                className="font-heading text-sm tracking-[0.05em] uppercase text-sage-400 underline hover:text-olive-800 transition-colors"
              >
                Book Room
              </a>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-olive-700 text-3xl mb-8">
          Getting Around
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {transport.map((item) => (
            <div key={item.title} className="bg-sage-100 p-8">
              <h3 className="font-heading text-olive-700 text-xl mb-3">
                {item.title}
              </h3>
              <p className="font-body text-teal-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
