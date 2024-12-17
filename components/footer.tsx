import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/placeholder.svg"
                alt="HostCrafters"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">HostCrafters</span>
            </Link>
            <p className="text-gray-400">
              Forget about us. This is about you. It&apos;s only natural to
              wonder how you can possibly hope to stand out in all the noise.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>SEO</li>
              <li>Web Design & Development</li>
              <li>Paid Search & Email Promotions</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              The Best Digital Marketing: SEO, Google Ads, Social Media, Web
              Design, Content Marketing and more
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 rounded-lg bg-navy-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © Copyright HostCrafters - 2023. All Rights Reserved. Terms &
            Conditions and Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
