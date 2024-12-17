import Footer from "@/components/footer";
import Header from "@/components/header";
import Pricing from "@/components/pricing";
import Link from "next/link";

export default function HostingPlans() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-cover lg:bg-[length:100%_100%] lg:min-h-[483.333px] flex items-center bg-[url('/images/about-bg.png')]  bg-no-repeat bg-center text-white">
        <div className="container pt-20 pb-32">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-[#1062FE] font-bold">Hosting plans</span>
          </div>
          <h1 className="text-5xl font-bold">Hosting plans</h1>
        </div>
      </div>
      <Pricing />
      <Footer />
    </div>
  );
}
