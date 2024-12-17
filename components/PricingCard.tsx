import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  price: string;
  features: string[];
  icon: string;
}

const PricingCard: FC<Props> = ({ title, price, features, icon }) => {
  return (
    <>
      <div className="border flex flex-col items-center border-[#02407D] p-6 rounded-[12px] ">
        <div>
          <Image src={icon} alt={title} width={48} height={48} />
        </div>
        <h3 className="text-xl font-semibold text-[#333331] mb-4">{title}</h3>
        <p className="text-blue-400 text-2xl font-bold mb-6">{price}</p>
        <ul className=" mb-6">
          {features.map((feature) => (
            <li
              key={feature}
              className="text-[#333331] py-4 border-[#E9E9E9] text-base  flex items-center border-t"
            >
              <span className=" text-blue-600 mr-2">
                <CheckCheck size={20} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="#buy-now"
          className="gap-1 text-center inline-flex items-center justify-center bg-[#1062FE] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Buy Now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
          >
            <path
              d="M1.55371 6.34348L14.0246 6.34348M14.0246 6.34348L8.82839 11.5397M14.0246 6.34348L8.82839 1.14728"
              stroke="#F7F7F7"
              strokeWidth="1.35882"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default PricingCard;
