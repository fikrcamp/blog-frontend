import { Link } from "react-router-dom";
function BlogCard() {
  return (
    <Link to="/blog">
      <div className="bg-white rounded-md border my-3 border-gray-300 hover:border-blue-600 hover:cursor-pointer">
        <div>
          <img
            src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
            alt="banner"
            className="h-56 w-full rounded-t-md "
          />
        </div>
        <div className="p-3">
          <div className="flex items-center">
            <img
              src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
              alt="banner"
              className="h-10 w-10  rounded-full "
            />
            <div className="text-xs text-gray ml-2 ">
              <h2 className="font-bold">Mohamed Amiin</h2>
              <h2 className="text-gray-400">12th feb 2022</h2>
            </div>
          </div>
          <div className="py-2">
            <h2 className="font-bold text-2xl">This is ganna be some title</h2>
            <p className="text-gray-400 font-bold text-sm">
              #nice #programming #somthing
            </p>
          </div>

          <div className="flex justify-end">
            <button className="bg-gray-300 px-3 py-2 text-sm rounded-md">
              Read
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
