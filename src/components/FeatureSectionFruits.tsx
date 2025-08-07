import ProductCard from "./ProductCard";

const data = [
  {
    id: 0,
    img: "/assets/Product_1.png",
    name: "Dried Mango",
    price: "$20",
    rating: 4,
  },
  {
    id: 1,
    img: "/assets/Product_2.png",
    name: "Crunchy Crisps",
    price: "$30",
    rating: 5,
  },
  {
    id: 2,
    img: "/assets/Product_3.png",
    name: "Jewel Cranberries",
    price: "$21",
    rating: 3,
  },
  {
    id: 3,
    img: "/assets/Product_4.png",
    name: "Almond Organic",
    price: "$30",
    rating: 2,
  },
];

const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh Fruits and Vegetables online at the best prices
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">
            Bread and Bakery{" "}
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
        {data.map((el) => (
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

export default FeatureSectionFruits;
