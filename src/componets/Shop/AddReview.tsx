const AddReview = () => {
  return (
    <div>
      <p className=" text-3xl font-semibold text-gray-500 flex justify-center ">
        Add Review
      </p>
      <form className=" space-y-4">
        <div>
          <label className=" font-semibold text-gray-500" htmlFor="Title">
            Title
          </label>
          <input
            type="text"
            className=" w-full h-10 outline-none border-2 px-2 md:px-4"
            name="Title"
            placeholder="Enter your title"
            id=""
          />
        </div>
        <div>
          <label className=" text-gray-500 font-semibold" htmlFor="Description">
            Description
          </label>
          <textarea
            name=""
            id=""
            className=" w-full outline-none border-2 px-2 md:px-4"
            placeholder="Enter your description"
            rows={5}
          ></textarea>
        </div>
        <button className=" bg-yellow-400 hover:bg-yellow-500 md:px-16 px-8 py-2 rounded-sm font-semibold text-[Roboto] ">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
