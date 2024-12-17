"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // Shadcn UI
import { Menu } from "lucide-react"; // Lucide icon for hamburger menu
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SignInAction from "./signIn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <span className="text-white text-xl  sr-only font-bold">
                HostCrafters
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#plans"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Plans
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/profile"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Profile
            </Link>
            <SignInAction />
          </nav>

          {/* Mobile Navigation (Sheet) */}
          <div className="md:hidden flex items-center">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="text-white hover:text-blue-400"
                >
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-gray-900 text-white">
                <SheetTitle></SheetTitle>

                <nav className="flex flex-col space-y-6 mt-10">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="#features"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    Features
                  </Link>
                  <Link
                    href="#plans"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    Plans
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    Profile
                  </Link>
                  <div>
                    <SignInAction />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
