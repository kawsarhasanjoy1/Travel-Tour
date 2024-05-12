import Input from "../Input/Input";

const Form = () => {
  return (
    <form>
      {" "}
      <div className=" md:grid grid-cols-2 gap-6">
        <Input type="text" name="FirstName" place="Enter your first name" />
        <Input type="text" name="LastName" place="Enter your first name" />
        <Input type="email" name="Email" place="Enter your first name" />
        <Input type="text" name="Contact" place="Enter your first name" />
      </div>
      <div className="mt-6">
        <label className=" font-semibold text-gray-500" htmlFor="Message">
          Description
        </label>
        <textarea
          className=" w-full outline-none border-2 border-gray-200  rounded-md"
          name="Message"
          placeholder="Type here..."
          id=""
          rows={7}
        ></textarea>
      </div>
      <button className=" bg-yellow-400 px-10 py-2 rounded-sm hover:bg-yellow-500 transition-all mt-3">
        Submit
      </button>
    </form>
  );
};

export default Form;
