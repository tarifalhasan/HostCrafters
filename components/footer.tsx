import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#02407D] text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex border-b border-[#EBEBEB33]/20  pb-6 justify-between gap-6 flex-col md:flex-row">
          <Image src={"/images/logo.svg"} alt="logo" width={254} height={34} />
          <div className="max-w-[396.62px]">
            <h4 className="text-2xl lg:text-4xl font-extrabold">
              Take Action and Grow Your Business
            </h4>
          </div>
        </div>
        <div className="flex pt-10 flex-wrap lg:flex-nowrap gap-12 mb-12">
          <div className="basis-full text-sm font-normal lg:basis-[30%]">
            <p className="">
              Forget about us. This is about you. It’s only natural to wonder
              how you can possibly hope to stand out in all the noise. How do
              you get noticed when hundreds of thousands of companies are
              pouring billions of dollars into making sure they’re on top?
            </p>
          </div>
          <div className="lg:basis-[30%]">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 flex flex-col text-sm">
              <Link href="/">SEO</Link>
              <Link href={"/"}>Web Design & Development</Link>
              <Link href={"/"}>Paid Search & Email Promotions</Link>
              <Link href={"/"}>Content Marketing</Link>
              <Link href={"/"}>Email Marketing</Link>
            </ul>
          </div>
          <div className="basis-[30%]">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 flex flex-col text-sm">
              <Link href="/">Home</Link>
              <Link href={"/"}>About </Link>
              <Link href={"/"}>Terms & Condition</Link>
            </ul>
            <h4 className="text-lg font-semibold my-4">Follow us Now</h4>
            <ul className="flex gap-2 items-center">
              <li className=" w-10 h-10 bg-[#1062FE] grid place-items-center rounded-full">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-xl" />
                </a>
              </li>
              <li className=" w-10 h-10 bg-[#1062FE] grid place-items-center rounded-full">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-xl" />
                </a>
              </li>
              <li className=" w-10 h-10 bg-[#1062FE] grid place-items-center rounded-full">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #1062FE 0%, #1062FE 100%), linear-gradient(149deg, #A259FC 13.3%, #F24E1E 49.23%, #FFD02F 85.59%), linear-gradient(149deg, #A259FC 13.3%, #F24E1E 49.23%, #FFD02F 85.59%)",
            }}
            className="lg:max-w-[381.365px] f p-5 rounded-[10.896px]"
          >
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-white text-sm mb-4">
              The Best Digital Marksmen: SEO, Google Ads, Social Media, Web
              Design, Content Marketing and more.
            </p>
            <form className="flex gap-2 py-2 w-full rounded-md relative bg-white px-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 text-[#485E6D] text-sm rounded-lg bg-transparent  focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-[#1062FE] px-3 rounded-[4.358px] text-white py-2  hover:bg-blue-700 transition-colors"
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
