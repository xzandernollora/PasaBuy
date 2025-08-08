import { useState } from "react";
import ProductCard from "./ProductCard";

const data = [
  {
    id: 0,
    img: "/assets/Product_Fruit1.png",
    name: "Hazel Nuts",
    price: "$20",
    rating: 4,
    category: "Fruits",
  },
  {
    id: 1,
    img: "/assets/Product_Fruit2.png",
    name: "Dried Mango",
    price: "$30",
    rating: 5,
    category: "Fruits",
  },
  {
    id: 2,
    img: "/assets/Product_Fruit3.png",
    name: "Jewel Cranberries",
    price: "$21",
    rating: 3,
    category: "Fruits",
  },
  {
    id: 3,
    img: "/assets/Product_Fruit4.png",
    name: "Almond Organic",
    price: "$30",
    rating: 2,
    category: "Fruits",
  },
  {
    id: 4,
    img: "/assets/Product_Veg1.png",
    name: "Broccoli",
    price: "$10",
    rating: 4,
    category: "Vegetables",
  },
  {
    id: 5,
    img: "/assets/Product_Veg2.png",
    name: "Carrots",
    price: "$9",
    rating: 5,
    category: "Vegetables",
  },
  {
    id: 6,
    img: "/assets/Product_Veg3.png",
    name: "Spinach",
    price: "$7",
    rating: 4,
    category: "Vegetables",
  },
  {
    id: 7,
    img: "/assets/Product_Veg4.png",
    name: "Tomatoes",
    price: "$6",
    rating: 3,
    category: "Vegetables",
  },
  {
    id: 8,
    img: "/assets/Bread_1.png",
    name: "Sourdough Bread",
    price: "$15",
    rating: 5,
    category: "Bread",
  },
  {
    id: 9,
    img: "/assets/Bread_2.png",
    name: "Croissant",
    price: "$8",
    rating: 4,
    category: "Bread",
  },
  {
    id: 10,
    img: "/assets/Bread_3.png",
    name: "Chocolate Muffin",
    price: "$10",
    rating: 5,
    category: "Bread",
  },
  {
    id: 11,
    img: "/assets/Bread_4.png",
    name: "Garlic Baguette",
    price: "$12",
    rating: 4,
    category: "Bread",
  },
];

const FeatureSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fruits");

  const filteredData = data.filter((el) => el.category === selectedCategory);

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits, Vegetables & Bakery</h3>
          <p className="text-gray-600 mt-2">
            Buy fresh and quality groceries at the best prices
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button
            onClick={() => setSelectedCategory("Fruits")}
            className={`${
              selectedCategory === "Fruits"
                ? "feature_btn"
                : "text-gray-600 hover:text-accent"
            }`}
          >
            Fruits
          </button>
          <button
            onClick={() => setSelectedCategory("Vegetables")}
            className={`${
              selectedCategory === "Vegetables"
                ? "feature_btn"
                : "text-gray-600 hover:text-accent"
            }`}
          >
            Vegetables
          </button>
          <button
            onClick={() => setSelectedCategory("Bread")}
            className={`${
              selectedCategory === "Bread"
                ? "feature_btn"
                : "text-gray-600 hover:text-accent"
            }`}
          >
            Bread and Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            src="/assets/Feature_1.png"
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

export default FeatureSection;
