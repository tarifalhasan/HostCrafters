"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Update current slide index
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // Set the initial index
  }, [emblaApi]);

  // Check for mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-white py-24" id="plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Features List */}
          <div className="col-span-12 ">
            <h2 className="text-3xl text-center font-bold text-[#333331] mb-8">
              What&apos;s included?
            </h2>
            <ul className="space-y-4 hidden text-[#757575] text-base lg:text-lg">
              <li>No Of Websites</li>
              <li>FREE 1 year domain registration</li>
              <li>One-click WordPress installs</li>
              <li>FREE HostGator Website Builder</li>
              <li>FREE website & domain transfers</li>
              <li>Bandwidth & disk space</li>
            </ul>
          </div>

          {/* Plans Section */}
          <div className="col-span-12 ">
            {/* Mobile Carousel */}
            {isMobile ? (
              <>
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {plans.map((plan, index) => (
                      <PricingCard
                        title={plan.name}
                        price={plan.price}
                        features={plan.features}
                        icon="/icons/medium.svg"
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                {/* Dots */}
                <div className="flex justify-center mt-4">
                  {plans.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi && emblaApi.scrollTo(index)}
                      className={`w-3 h-3 rounded-full mx-1 ${
                        selectedIndex === index ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></button>
                  ))}
                </div>
              </>
            ) : (
              // Desktop Grid
              <div className="grid md:grid-cols-3 gap-4">
                {plans.map((plan, index) => (
                  <PricingCard
                    title={plan.name}
                    price={plan.price}
                    features={plan.features}
                    icon="/icons/medium.svg"
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
