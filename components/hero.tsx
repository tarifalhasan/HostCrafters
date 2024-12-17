import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      style={{ backgroundSize: "100% 100%" }}
      className="bg-[url('/images/home-hero-bg.png')] bg-no-repeat  pt-24 pb-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block">
              <span className="bg-blue-900/50 text-blue-400 px-4 py-2 rounded-full text-sm">
                🔥 Don&apos;t miss limited-time savings: Savings 15%
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Web Hosting Solutions
            </h1>
            <p className="text-gray-300 text-xl">
              99.9% Uptime | Free SSL | 24/7 Support
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
              src="/placeholder.svg"
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
