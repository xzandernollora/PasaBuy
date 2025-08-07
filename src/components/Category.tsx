import CategoryCard from "./CategoryCard";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "/assets/Category_0.png",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    count: "8 Products",
    img: "/assets/Category_1.png",
  },
  {
    id: 2,
    name: "Canned Goods",
    count: "10 Products",
    img: "/assets/Category_2.png",
  },
  {
    id: 3,
    name: "Bakery",
    count: "12 Products",
    img: "/assets/Category_3.png",
  },
  {
    id: 4,
    name: "Dairy",
    count: "7 Products",
    img: "/assets/Category_4.png",
  },
  {
    id: 5,
    name: "Frozen Foods",
    count: "15 Products",
    img: "/assets/Category_5.png",
  },
  {
    id: 6,
    name: "Snacks",
    count: "11 Products",
    img: "/assets/Category_6.png",
  },
  {
    id: 7,
    name: "Beverages",
    count: "13 Products",
    img: "/assets/Category_7.png",
  },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
