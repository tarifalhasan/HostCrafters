import Footer from "@/components/footer";
import Header from "@/components/header";

import Link from "next/link";
import { CheckoutForm } from "./checkout-form";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-cover lg:bg-[length:100%_100%] lg:min-h-[483.333px] flex items-center bg-[url('/images/about-bg.png')]  bg-no-repeat bg-center text-white">
        <div className="container pt-20 pb-32">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-[#1062FE] font-bold">Terms & policy</span>
          </div>
          <h1 className="text-5xl font-bold">Terms & policy</h1>
        </div>
      </div>

      <div className="container py-20">
        <div className="max-w-3xl mx-auto">
          <CheckoutForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}