// import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import LogoutActive from "./logout";
import SignInAction from "./signIn";

export default async function Header() {
  const session = await { user: "dfdfd" };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg"
                alt="HostCrafters"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white text-xl font-bold">HostCrafters</span>
            </Link>
          </div>
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
          </nav>
          <div>{!session?.user ? <SignInAction /> : <LogoutActive />}</div>
        </div>
      </div>
    </header>
  );
}
