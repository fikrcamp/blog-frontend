import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-white mt-10 p-4">
        <div className="text-center py-3">
          <h2 className="font-bold">Create a account with us 😊</h2>
          <h2 className="text-sm text-gray-400">So you can share you blogs!</h2>
        </div>
        <div className="w-4/5 m-auto space-y-2">
          <input
            type="text"
            className="p-3 bg-gray-100 rounded-md text-sm w-full"
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="p-3 bg-gray-100 rounded-md text-sm w-full"
            placeholder="Enter your email"
          />
          <input
            type="text"
            className="p-3 bg-gray-100 rounded-md text-sm w-full"
            placeholder="Location"
          />
          <input
            type="password"
            className="p-3 bg-gray-100 rounded-md text-sm w-full"
            placeholder="Password"
          />
          <input
            type="password"
            className="p-3 bg-gray-100 rounded-md text-sm w-full"
            placeholder="Confirm Password"
          />
          <input type="file" className="w-full" />
          <p className="text-sm text-gray-400">
            You already have an account?{" "}
            <Link to="/login" className="text-black font-bold">
              Login
            </Link>
          </p>
          <div className="py-2">
            <button className="bg-black w-full p-2 rounded-md text-white ">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
