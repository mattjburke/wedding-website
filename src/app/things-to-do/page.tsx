const recommendations = [
  {
    category: "Casual",
    items: [
      { name: "Bonfire Burritos", detail: "Breakfast" },
      { name: "Golden Mill", detail: "Lunch, dinner & drinks" },
    ],
  },
  {
    category: "Nice",
    items: [],
  },
  {
    category: "Fancy",
    items: [],
  },
  {
    category: "Sightseeing",
    items: [{ name: "Golden Creek Walk & Tubing", detail: "Outdoor recreation" }],
  },
];

export default function ThingsToDo() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-olive-700 text-5xl mb-6 text-center">
          Things to Do
        </h1>
        <p className="font-body text-teal-700 text-center mb-16 max-w-2xl mx-auto">
          While you&apos;re in town, we hope you take some time to explore and
          enjoy everything the area has to offer! Whether you&apos;re in the
          mood for a great meal, a relaxing coffee, or a little adventure,
          there&apos;s something for everyone.
        </p>

        <h2 className="font-heading text-olive-700 text-3xl mb-8">
          Denver &amp; Golden Recommendations
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {recommendations.map((section) => (
            <div key={section.category} className="bg-sage-100 p-8">
              <h3 className="font-heading text-sage-400 text-sm tracking-widest uppercase mb-4">
                {section.category}
              </h3>
              {section.items.length > 0 ? (
                <ul className="flex flex-col gap-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-heading text-olive-700 text-lg">
                        {item.name}
                      </p>
                      <p className="font-body text-sm text-teal-700">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-body text-sm text-teal-700 italic">
                  More recommendations coming soon!
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="font-body text-teal-700 text-center italic">
          Most importantly, we hope you make it a fun and memorable weekend.
          We&apos;re so grateful you&apos;re here celebrating with us!
        </p>
      </div>
    </section>
  );
}
