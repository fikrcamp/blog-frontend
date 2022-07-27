function Blog() {
  return (
    <div className="p-10 flex space-x-5">
      <div className="w-4/5 bg-white ">
        <div>
          <img
            src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
            alt="banner"
            className="h-72 w-full rounded-t-md "
          />
        </div>
        <div className="px-10 pt-5">
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
            <h2 className="font-bold text-3xl">This is ganna be some title</h2>
            <p className="text-gray-400 font-bold text-sm">
              #nice #programming #somthing
            </p>
          </div>
          <div className="py-2">
            <p>
              somethinsomethinsomethinsomethinsomethin
              somethinsomethinsomethinsomethinsomethin somethin somethinsomethin
              somethinsomethinsomethin somethinsomethin somethinsomethinsomethin
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/5 ">
        <div className="bg-white p-5 rounded-md">
          <div className="flex items-center">
            <img
              src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
              alt="banner"
              className="h-10 w-10  rounded-full "
            />
            <div className=" ml-2 ">
              <h2 className="font-bold">Mohamed Amiin</h2>
            </div>
          </div>
          <div className=" py-2 text-sm">
            <h2 className="font-bold">Location:</h2>
            <h2 className="font-bold text-gray-400">Mohamed Amiin</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
