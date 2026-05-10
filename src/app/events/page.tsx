import Button from "@/components/Button";

const MAPS_URL =
  "https://maps.google.com/?q=Arrowhead+Golf+Club+10850+W+Sundown+Trail+Littleton+CO+80127";

const events = [
  {
    title: "Rehearsal Lunch",
    date: "Friday, May 14, 2027",
    time: "1:30 PM – 3:30 PM",
    location: "Location TBD",
    description: "Join us for a delightful pre-wedding lunch before the big day!",
    mapUrl: null,
  },
  {
    title: "Wedding Ceremony",
    date: "Saturday, May 15, 2027",
    time: "4:30 PM – 5:00 PM",
    location: "Arrowhead Golf Club, Littleton, CO",
    description: "The beautiful wedding ceremony of Rebeca & Matthew.",
    mapUrl: MAPS_URL,
  },
];

export default function Events() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-olive-700 text-5xl mb-12 text-center">
          Events
        </h1>
        <div className="flex flex-col gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-sage-100 p-10">
              <h2 className="font-heading text-olive-700 text-3xl mb-2">
                {event.title}
              </h2>
              <p className="font-body text-sm tracking-widest uppercase text-sage-400 mb-4">
                {event.date} &nbsp;&middot;&nbsp; {event.time}
              </p>
              <p className="font-body text-teal-700 mb-2">{event.location}</p>
              <p className="font-body text-teal-700 mb-6">
                {event.description}
              </p>
              <div className="flex gap-4 flex-wrap items-center">
                {event.mapUrl && (
                  <Button href={event.mapUrl} variant="tertiary" external>
                    View on Map
                  </Button>
                )}
                <Button href="#rsvp" variant="secondary">
                  RSVP
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div id="rsvp" className="mt-16 bg-sage-100 p-10 text-center">
          <h2 className="font-heading text-olive-700 text-3xl mb-4">RSVP</h2>
          <p className="font-body text-teal-700">
            RSVP form coming soon — check back for updates!
          </p>
        </div>
      </div>
    </section>
  );
}
