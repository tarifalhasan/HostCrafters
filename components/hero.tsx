import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[url('/images/home-hero-bg.png')] bg-center min-h-[90vh] w-full bg-ful bg-no-repeat  bg-cover lg:bg-[100%_100%] pt-24 pb-32 relative overflow-hidden flex items-center">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block">
              <span className="text-white py-2 rounded-full text-sm lg:text-base">
                🔥 Don&apos;t miss limited-time savings:{" "}
                <span className="text-highlightOrange font-bold">
                  Savings 15%
                </span>
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Web Hosting Solutions
            </h1>
            <p className="  text-white font-semibold text-xl">
              99.9% Uptime <span className="text-highlightOrange">|</span> Free
              SSL <span className="text-highlightOrange">|</span> 24/7 Support
            </p>
            <div className="flex space-x-4">
              <Link
                href="#plans"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View plans
              </Link>
              <Link
                href="#get-started"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src="/images/hero.png"
              alt="Server Illustration"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
