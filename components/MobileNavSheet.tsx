"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function MobileNavSheet({ session }: { session: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <button className="text-white hover:text-blue-400">
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

          {/* Conditional Sign-In/Sign-Out */}
          <div>
            {session ? (
              <form action="/api/auth/signout" method="post">
                <Button
                  type="submit"
                  className="bg-red-600 text-white h-12 px-6 text-base font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Sign Out
                </Button>
              </form>
            ) : (
              <Link href="/sign-in">
                <Button className="bg-blue-600 text-white h-12 px-6 text-base font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
