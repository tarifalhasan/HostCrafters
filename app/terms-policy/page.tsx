import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function TermsPolicy() {
  return (
    <div className="min-h-screen">
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
      <div className="py-10 container lg:py-20 ">
        <Accordion
          className="flex flex-col gap-y-6"
          defaultValue={"item-1"}
          type="single"
          collapsible
        >
          <AccordionItem
            style={{
              boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
            }}
            className="bg-white rounded-xl py-3 px-4"
            value="item-1"
          >
            <AccordionTrigger className="text-xl  p-0 mb-1 text-[#333331] font-extrabold">
              Data Privacy Policy
            </AccordionTrigger>
            <AccordionContent className="text-base text-[#757575]">
              We value your privacy and are committed to protecting your
              personal data. Our data privacy policy outlines how we collect,
              store, and use your information to provide seamless hosting
              services. We ensure that your data is handled securely and never
              shared with third parties without your consent
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            style={{
              boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
            }}
            className="bg-white rounded-xl py-3 px-4"
            value="item-2"
          >
            <AccordionTrigger className="text-xl  p-0 mb-1 text-[#333331] font-extrabold">
              Service Level Agreement (SLA)
            </AccordionTrigger>
            <AccordionContent className="text-base text-[#757575]">
              Our Service Level Agreement defines the uptime, performance, and
              support standards we guarantee. We strive to provide 99.9% uptime
              and immediate resolution for technical issues. This policy
              reflects our dedication to reliable and high-quality hosting
              services for our clients
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            style={{
              boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
            }}
            className="bg-white rounded-xl py-3 px-4"
            value="item-3"
          >
            <AccordionTrigger className="text-xl  p-0 mb-1 text-[#333331] font-extrabold">
              Refund and Cancellation Policy
            </AccordionTrigger>
            <AccordionContent className="text-base text-[#757575]">
              We aim to provide flexible and transparent service plans. If
              you’re not satisfied with our hosting services, you can request a
              cancellation or refund based on our policy terms. For full
              details, including eligibility and timelines, please review this
              section carefully
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
