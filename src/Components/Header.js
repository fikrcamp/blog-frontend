import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
function Header() {
  return (
    <div className="flex justify-between items-center p-3 bg-white">
      <div className="flex">
        <Link to="/">
          <img src="/logo.png" className="h-10" />
        </Link>
        <div className="ml-3 border rounded-md px-2 py-1.5 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 outline-none"
          />
          <MdSearch size={28} />
        </div>
      </div>
      <div>
        {/* <Link to="/login">
          <button className="border border-blue-500 text-blue-500 px-3 py-[6px] rounded-md ">
            Login
          </button>
        </Link> */}
        <div className="flex items-center space-x-2">
          <Link to="/admin/blog/add">
            <button className="border border-blue-500 text-blue-500 px-3 py-[6px] rounded-md ">
              Create Post
            </button>
          </Link>
          <Link to="/admin/blogs">
            <FiUser size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
