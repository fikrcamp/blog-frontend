import { Link } from "react-router-dom";
function BlogForm() {
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-white mt-10 p-4">
        <div className="text-center py-3">
          <h2 className="font-bold">Blog</h2>
          <h2 className="text-sm text-gray-400">
            Share you thoughts and knowledge!
          </h2>
        </div>
        <div className="w-4/5 m-auto space-y-2">
          <input
            type="text"
            className="p-3 bg-gray-100 rounded-md text-sm w-full"
            placeholder="Blog Title"
          />
          <input
            type="text"
            className="p-3 bg-gray-100 rounded-md text-sm w-full"
            placeholder="Blog Hashtags seperate by ,"
          />
          <textarea
            className="p-3 bg-gray-100 rounded-md text-sm w-full"
            placeholder="Blog Content"
          ></textarea>
          <input type="file" className="w-full" />
          <div className="py-2">
            <button className="bg-black w-full p-2 rounded-md text-white ">
              Post Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
