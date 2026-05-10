import Button from "@/components/Button";

const MAPS_URL =
  "https://maps.google.com/?q=Arrowhead+Golf+Club+10850+W+Sundown+Trail+Littleton+CO+80127";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row min-h-[88vh]">
        <div className="md:w-1/2 h-72 md:h-auto">
          <img
            src="/images/matt_spinning_beca.avif"
            alt="Rebeca and Matthew"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 bg-sage-200 flex flex-col justify-center px-12 md:px-20 py-16">
          <p className="font-body text-sm tracking-widest uppercase text-olive-700 mb-6">
            May 15, 2027 &nbsp;&bull;&nbsp; Littleton, Colorado
          </p>
          <h1 className="font-script text-olive-700 text-6xl md:text-8xl leading-tight mb-10">
            Rebeca &amp; Matthew
          </h1>
          <div>
            <Button href="/events">RSVP Now</Button>
          </div>
        </div>
      </section>

      <section className="bg-sage-100 py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-sage-50 p-10">
            <p className="font-heading text-olive-700 text-sm tracking-widest uppercase mb-2">
              (1)
            </p>
            <h2 className="font-script text-olive-700 text-5xl mb-6">
              Ceremony
            </h2>
            <div className="flex justify-center my-8">
              <img
                src="/images/ceremony_couple.svg"
                alt=""
                className="w-48 h-auto"
              />
            </div>
            <p className="font-body text-teal-700 mb-2">
              Arrowhead Golf Club &bull; 4:30 PM
            </p>
            <p className="font-body text-sm text-teal-700 italic mb-6">
              More details to come!
            </p>
            <Button href={MAPS_URL} variant="tertiary" external>
              View on Map
            </Button>
          </div>

          <div className="bg-sage-50 p-10">
            <p className="font-heading text-olive-700 text-sm tracking-widest uppercase mb-2">
              (2)
            </p>
            <h2 className="font-script text-olive-700 text-5xl mb-6">
              Reception
            </h2>
            <div className="flex justify-center my-8">
              <img
                src="/images/reception_cake.svg"
                alt=""
                className="w-48 h-auto"
              />
            </div>
            <p className="font-body text-teal-700 mb-2">
              Arrowhead Golf Club &bull; 6:00 PM
            </p>
            <p className="font-body text-sm text-teal-700 italic mb-6">
              More details to come!
            </p>
            <Button href={MAPS_URL} variant="tertiary" external>
              View on Map
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
