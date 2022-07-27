import BlogCard from "../Components/BlogCard";
function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 mt-10 ">
        <h3 className="font-bold text-xl">Read the latest tech articles</h3>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default Home;
