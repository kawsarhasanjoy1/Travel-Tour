import ContactText from "../../componets/Contact/ContactText";
import Form from "../../componets/Contact/Form";

const Contact = () => {
  return (
    <div className=" space-y-10">
      <div className="">
        <img
          className=" w-full md:h-[500px] h-[200px] object-cover"
          src="https://i.ibb.co/JKT96y7/contact.jpg"
          alt=""
        />
      </div>
      <div className=" grid md:grid-cols-12 gap-10 bg-white shadow-2xl py-20 px-2 md:px-10 rounded-xl top-[90%]  md:max-w-7xl ">
        <div className=" col-span-5">
          <ContactText />
        </div>
        <div className=" col-span-7 space-y-8">
          <p className=" text-2xl font-semibold ">Sent Message</p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
