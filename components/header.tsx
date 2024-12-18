import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import AuthButtons from "./auth-button";
import MobileNavSheet from "./MobileNavSheet";

export default async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="fixed top-0 left-0 bg-[#080f2c]/90 right-0 z-50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.svg"
                alt="HostCrafters"
                width={250}
                height={32}
              />
              <span className="text-white text-xl sr-only font-bold">
                HostCrafters
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400">
              Home
            </Link>
            <Link href="#features" className="text-white hover:text-blue-400">
              Features
            </Link>
            <Link href="#plans" className="text-white hover:text-blue-400">
              Plans
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-400">
              Contact Us
            </Link>
            <Link href="/profile" className="text-white hover:text-blue-400">
              Profile
            </Link>
            <AuthButtons />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <MobileNavSheet session={!!session} />
          </div>
        </div>
      </div>
    </header>
  );
}
