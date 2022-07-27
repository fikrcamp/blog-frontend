import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
function BlogList() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 mt-10 bg-white p-3 rounded-sm drop-shadow-sm">
        <h2 className="font-bold text-2xl text-center">Your Blog List</h2>
        <Link to="/admin/blog/add">
          <button className="bg-green-400 py-1.5 px-2 text-sm font-bold text-white ">
            Create Blog
          </button>
        </Link>

        <div>
          <table>
            <tr>
              <th>Blog Title</th>
              <th>Hash Tags</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td classNam="flex-1">Some long ass title </td>
              <td>Maria Anders</td>
              <td>
                <Link to="/admin/blog/edit">
                  <FiEdit2 className="text-blue-500 m-auto" />
                </Link>
              </td>
              <td>
                <FiTrash2 className="text-red-500 m-auto" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
