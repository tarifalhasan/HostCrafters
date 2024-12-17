export default function Features() {
  const features = [
    {
      title: "Uptime",
      description:
        "Enjoy seamless website performance with 99.99% guaranteed uptime",
      icon: "🔄",
    },
    {
      title: "Free SSL",
      description:
        "Protect your visitors with encrypted connections at no extra cost",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance to keep your website running smoothly",
      icon: "💬",
    },
  ];

  return (
    <section className="py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our key features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
