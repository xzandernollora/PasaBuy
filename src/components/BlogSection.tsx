import BlogCard from "./BlogCard";

const data = [
  {
    img: "/assets/Blog_1.JPG",
    title: "Top 10 Healthy Snacks in 2025",
    date: "Aug 02, 2025",
    comment: 12,
  },
  {
    img: "/assets/Blog_2.png",
    title: "New Superfoods You Must Try",
    date: "Aug 05, 2025",
    comment: 9,
  },
  {
    img: "/assets/Blog_3.png",
    title: "How to Meal Prep for Busy Weeks",
    date: "Aug 06, 2025",
    comment: 15,
  },
  {
    img: "/assets/Blog_4.png",
    title: "5 Easy Plant-Based Recipes",
    date: "Aug 07, 2025",
    comment: 4,
  },
  {
    img: "/assets/Blog_5.png",
    title: "Quick and Healthy Breakfast Ideas",
    date: "Aug 08, 2025",
    comment: 6,
  },
  {
    img: "/assets/Blog_6.png",
    title: "How to Store Fruits & Veggies Properly",
    date: "Aug 09, 2025",
    comment: 3,
  },
];

const BlogSection = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <BlogCard
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
};
export default BlogSection;
