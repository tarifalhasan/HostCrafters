import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Carter",
      role: "Chief Executive Officer",
      image: "/images/team-member-1.png",
    },
    {
      name: "Sophia Martinez",
      role: "Chief Marketing Officer",
      image: "/images/team-member-1.png",
    },
    {
      name: "Ryan Patel",
      role: "Chief Technology Officer",
      image: "/images/team-member-1.png",
    },
    {
      name: "Emily Nguyen",
      role: "Head of Customer Support",
      image: "/images/team-member-1.png",
    },
  ];

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
            <span className="text-[#1062FE] font-bold">About us</span>
          </div>
          <h1 className="text-5xl font-bold">About us</h1>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Mission statement</h2>
            <p className="text-gray-600 mb-8">
              Our mission is to deliver reliable, secure, and high-performance
              hosting solutions that empower businesses and individuals to
              succeed online. We strive to provide exceptional customer support
              and innovative technologies to ensure seamless digital experiences
              for our clients.
            </p>
          </div>
          <div className="mt-8">
            <Image
              src="/images/about.png?height=400&width=800"
              alt="Hosting Services Illustration"
              width={800}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20 ">
        <div className="container">
          <h2 className="text-3xl xl:text-4xl font-extrabold text-center mb-12">
            Meet the team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white relative rounded-xl shadow-lg overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-[17.5rem] object-cover"
                />
                <div className="p-4 absolute bg-white bottom-2 left-2 rounded-lg right-2 ">
                  <h3 className="font-bold text-lg lg:text-xl text-[#333331]">
                    {member.name}
                  </h3>
                  <p className="text-[#757575] font-normal text-xs">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7]">
        <div className="container relative">
          <div className="grid relative z-20 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch with Us</h2>
              <p className="text-gray-600">
                We&apos;re here to help you with all your hosting needs. Whether
                you have questions about our services, need technical support,
                or want to discuss your hosting goals, our team is ready to
                assist. Reach out to us through email, phone, or our online
                chat, and we&apos;ll get back to you promptly. Your satisfaction
                is our priority, and we&apos;re committed to providing excellent
                customer service every step of the way.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Submit your query</h3>
              <form className="space-y-6">
                <div>
                  <Input type="text" placeholder="Name" className="w-full" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="w-full" />
                </div>
                <div>
                  <Input type="text" placeholder="Subject" className="w-full" />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-[#1062FE] h-12 hover:bg-blue-700">
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <svg
            className="absolute hidden xl:block max-w-20 -top-[7.5rem] -left-11"
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="182"
            viewBox="0 0 98 182"
            fill="none"
          >
            <path
              d="M10.5738 6.33847C8.0251 12.3184 6.27233 18.6043 5.36028 25.0355C4.69681 29.1336 4.14447 33.7087 3.70784 38.5973C3.21146 43.8281 3.07948 49.0862 3.31286 54.3338C3.44881 57.1586 3.77083 59.971 4.27683 62.7529C4.76751 65.6472 5.51831 68.4911 6.52015 71.2501C7.51405 74.0891 8.84175 76.7999 10.4755 79.3259C12.0893 81.9012 14.0471 84.2449 16.295 86.2926L16.6762 86.6214C16.7485 86.4652 16.796 86.2858 16.863 86.1154C19.428 79.6895 24.0135 74.2641 29.9298 70.6555C32.9501 68.8574 36.3045 67.6909 39.7886 67.2269C43.4377 66.7383 47.1496 67.1909 50.5699 68.5413C52.395 69.1987 54.1028 70.1422 55.6292 71.3365C57.3495 72.6622 58.7436 74.3624 59.7053 76.3078C60.5913 78.2201 61.0625 80.2982 61.0878 82.4064C61.1132 84.5145 60.6922 86.6051 59.8525 88.5415C58.3294 92.0488 55.6236 94.9151 52.2054 96.6421C49.0843 98.2417 45.6791 99.2125 42.1843 99.4992C38.7503 99.8108 35.2897 99.5919 31.9247 98.8502C27.7273 97.9151 23.7216 96.2729 20.0798 93.9943C19.917 94.9514 19.8181 95.9182 19.7838 96.8882C19.5401 102.609 20.574 108.311 22.8107 113.58C24.8628 118.507 27.6512 123.094 31.0811 127.186C34.0578 130.775 37.4631 133.987 41.2214 136.751C44.4697 139.027 47.9177 141.005 51.5233 142.662C57.1372 145.313 63.0267 147.341 69.0863 148.71C73.1435 149.661 77.2677 150.304 81.4236 150.632C84.7607 150.874 87.1863 150.934 89.0704 150.934C90.7048 150.963 91.7833 150.937 92.6174 150.953L91.5933 150.246C88.6736 148.231 86.0666 146.361 83.9057 144.73C79.598 141.463 76.9882 139.188 77.3426 138.653C77.6971 138.117 80.6871 139.442 85.3734 142.019C87.7308 143.302 90.4785 144.894 93.5081 146.722L94.6571 147.415C95.1548 147.708 95.6263 148.043 96.0662 148.417C96.3447 148.661 96.6012 148.93 96.8331 149.218C97.1287 149.585 97.3715 149.992 97.5547 150.425C97.9318 151.319 98.0131 152.31 97.7867 153.254C97.4233 154.438 96.8395 155.543 96.0661 156.512L94.4631 158.901C85.3271 171.987 77.1565 182.013 76.2024 181.232C75.2482 180.451 81.8631 169.202 90.9938 156.101L92.213 154.388C91.3415 154.594 90.4575 154.742 89.5668 154.831C86.9167 155.152 84.2464 155.272 81.579 155.189C77.1869 155.099 72.8133 154.605 68.5135 153.714C62.0668 152.435 55.795 150.403 49.8276 147.66C45.8933 145.87 42.1358 143.718 38.6038 141.231C34.4331 138.2 30.6603 134.659 27.3732 130.692C23.549 126.133 20.4492 121.014 18.1821 115.515C15.6154 109.411 14.4545 102.808 14.7847 96.1917C14.8718 94.2848 15.1523 92.3913 15.6217 90.5401C15.1022 90.1004 14.5826 89.6608 14.1007 89.1911C11.6143 86.8598 9.45441 84.2046 7.67904 81.2971C5.9464 78.4849 4.54845 75.4802 3.51344 72.3438C2.4978 69.3606 1.75609 66.2909 1.29746 63.1726C0.825919 60.2586 0.548169 57.3162 0.466027 54.3647C0.335165 48.9879 0.601971 43.608 1.26428 38.2688C1.84285 33.2955 2.54136 28.7204 3.3598 24.5435C4.52238 18.0294 6.64263 11.7204 9.65191 5.82071C10.4719 4.26744 11.4101 2.77907 12.4583 1.36875C13.2003 0.431093 13.572 -0.0137294 13.6841 0.0258584C13.7961 0.0654463 12.437 2.23471 10.5843 6.36697L10.5738 6.33847ZM21.6471 88.4293C21.4499 88.9068 21.2918 89.4023 21.1336 89.8978C24.6335 92.1411 28.5195 93.7198 32.5966 94.5548C35.5754 95.1574 38.6299 95.302 41.6543 94.9836C44.6251 94.6987 47.5115 93.8313 50.1477 92.4314C52.66 91.1145 54.635 88.9656 55.7324 86.3549C56.2866 85.0791 56.5654 83.7017 56.5506 82.3124C56.5359 80.9231 56.2279 79.5531 55.6468 78.2916C54.2248 75.8663 51.9479 74.0578 49.2594 73.2182C46.5335 72.1817 43.5856 71.8597 40.6967 72.2828C37.8324 72.7247 35.0858 73.7386 32.6214 75.2636C30.1377 76.7804 27.9195 78.693 26.0553 80.9252C24.1712 83.1517 22.6773 85.6792 21.6366 88.4008"
              fill="#1062FE"
            />
          </svg>
          <Image
            src={"/images/about-shape.svg"}
            alt="about-shape"
            className=" absolute hidden xl:block -right-[120px] z-10 -bottom-[5rem] "
            width={300}
            height={300}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
