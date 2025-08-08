import {
  LiaShippingFastSolid,
  LiaMoneyBillWaveSolid,
  LiaGiftSolid,
} from "react-icons/lia";

import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
    description: "Enjoy free shipping on all orders with no minimum spend.",
  },
  {
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid />,
    description: "We match the lowest price or refund the difference.",
  },
  {
    title: "Free Curbside Pickup",
    icon: <LiaGiftSolid />,
    description:
      "Order online and pick up your items without leaving your car.",
  },
  {
    title: "Support 24/7",
    icon: <FiPhoneCall />,
    description: "Our support team is ready to help you anytime, day or night.",
  },
];

const Feature = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el, index) => (
          <FeatureCard
            key={index}
            title={el.title}
            icon={el.icon}
            description={el.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
