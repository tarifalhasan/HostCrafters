import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "$2.75/M",
      features: [
        "Single",
        "FREE 1 year domain registration",
        "One-click WordPress installs",
        "FREE HostGator Website Builder",
        "FREE website & domain transfers",
        "Unlimited",
      ],
    },
    {
      name: "Medium Plan",
      price: "$92.75/M",
      features: [
        "Single",
        "FREE 1 year domain registration",
        "One-click WordPress installs",
        "FREE HostGator Website Builder",
        "FREE website & domain transfers",
        "Unlimited",
      ],
    },
    {
      name: "Business Plan",
      price: "$2.75/M",
      features: [
        "Single",
        "FREE 1 year domain registration",
        "One-click WordPress installs",
        "FREE HostGator Website Builder",
        "FREE website & domain transfers",
        "Unlimited",
      ],
    },
  ];

  return (
    <section className="bg-navy-900 py-24" id="plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-3xl font-bold text-white mb-8">
              What&apos;s included?
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>No Of Websites</li>
              <li>FREE 1 year domain registration</li>
              <li>One-click WordPress installs</li>
              <li>FREE HostGator Website Builder</li>
              <li>FREE website & domain transfers</li>
              <li>Bandwidth & disk space</li>
            </ul>
          </div>
          <div className="grid col-span-12 lg:col-span-8 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-navy-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <p className="text-blue-400 text-2xl font-bold mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-300 flex items-center"
                    >
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#buy-now"
                  className="block text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Buy Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
