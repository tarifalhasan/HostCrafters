import Link from "next/link";

import Footer from "@/components/footer";
import { CartContent } from "./cart-content";

export default function CartPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover lg:bg-[length:100%_100%] lg:min-h-[483.333px] flex items-center bg-[url('/images/about-bg.png')] bg-no-repeat bg-center text-white">
        <div className="container pt-20 pb-32">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-[#1062FE] font-bold">Cart</span>
          </div>
          <h1 className="text-5xl font-bold">Cart</h1>
        </div>
      </div>

      <div className="container py-20">
        <CartContent />
      </div>

      <Footer />
    </div>
  );
}
