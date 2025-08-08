import { useState } from "react";
import ProductCard from "./ProductCard";

const data = [
  // Snacks
  {
    id: 0,
    img: "/assets/Snack_1.png",
    name: "Granola Bar",
    price: "$2",
    rating: 3,
    category: "Snacks",
  },
  {
    id: 1,
    img: "/assets/Snack_2.png",
    name: "Potato Chips",
    price: "$2.5",
    rating: 4,
    category: "Snacks",
  },
  {
    id: 2,
    img: "/assets/Snack_3.png",
    name: "Trail Mix",
    price: "$3",
    rating: 5,
    category: "Snacks",
  },
  {
    id: 3,
    img: "/assets/Snack_4.png",
    name: "Rice Crackers",
    price: "$1.5",
    rating: 3,
    category: "Snacks",
  },

  // Instant Foods
  {
    id: 4,
    img: "/assets/Instant_1.png",
    name: "Instant Ramen",
    price: "$1",
    rating: 4,
    category: "Instant",
  },
  {
    id: 5,
    img: "/assets/Instant_2.png",
    name: "Oatmeal Cup",
    price: "$1.8",
    rating: 4,
    category: "Instant",
  },
  {
    id: 6,
    img: "/assets/Instant_3.png",
    name: "Ready Rice",
    price: "$2.2",
    rating: 3,
    category: "Instant",
  },
  {
    id: 7,
    img: "/assets/Instant_4.png",
    name: "Mac & Cheese Bowl",
    price: "$2.5",
    rating: 5,
    category: "Instant",
  },

  // Beverages
  {
    id: 8,
    img: "/assets/Beverage_1.png",
    name: "Orange Juice",
    price: "$3",
    rating: 4,
    category: "Beverages",
  },
  {
    id: 9,
    img: "/assets/Beverage_2.png",
    name: "Iced Coffee",
    price: "$2.5",
    rating: 5,
    category: "Beverages",
  },
  {
    id: 10,
    img: "/assets/Beverage_3.png",
    name: "Green Tea Bottle",
    price: "$2",
    rating: 3,
    category: "Beverages",
  },
  {
    id: 11,
    img: "/assets/Beverage_4.png",
    name: "Energy Drink",
    price: "$2.8",
    rating: 4,
    category: "Beverages",
  },
];

const FeatureSectionSnacks = () => {
  const [selectedCategory, setSelectedCategory] = useState("Snacks");

  const filteredData = data.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Snacks & Essentials</h3>
          <p className="text-gray-600 mt-2">
            Shop tasty snacks and daily essentials to keep your pantry stocked.
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button
            onClick={() => setSelectedCategory("Snacks")}
            className={`${
              selectedCategory === "Snacks"
                ? "feature_btn"
                : "text-gray-600 hover:text-accent"
            }`}
          >
            Snacks
          </button>
          <button
            onClick={() => setSelectedCategory("Instant")}
            className={`${
              selectedCategory === "Instant"
                ? "feature_btn"
                : "text-gray-600 hover:text-accent"
            }`}
          >
            Instant Foods
          </button>
          <button
            onClick={() => setSelectedCategory("Beverages")}
            className={`${
              selectedCategory === "Beverages"
                ? "feature_btn"
                : "text-gray-600 hover:text-accent"
            }`}
          >
            Beverages
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            src="/assets/Feature_2.png"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        {filteredData.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
            rating={el.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionSnacks;
