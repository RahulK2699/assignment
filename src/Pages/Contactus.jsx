import React, { useState } from "react";
import Navbar from "../components/Navbar";
import contact_banner from "../Assets/Images/contact-us-page-banner.webp";
import Form from "../components/Contactus/Form";
import form_img from "../Assets/Images/contact-main-img.webp";
import Validator from "validatorjs";

const Contactus = () => {
  let fields = {
    name: "",
    email: "",
    phone_no: "",
    company_name: "",
    message: "",
  };
  const [params, setParams] = useState(fields);

  const [errors, setErros] = useState(fields);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setParams({ ...params, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validation = new Validator(params, {
      name: "required|min:2|max:15",
      email: "required|email",
      phone_no: "required|numeric|digits:10",
      company_name: "required|min:3",
      message: "required",
    });

    if (validation.fails()) {
      setErros();
    }
  };
  return (
    <div>
      <Navbar />
      {/* banner */}
      <div className=" w-full relative">
        <img className=" w-full  h-48" src={contact_banner} alt="banner" />
        <div className=" flex flex-col justify-center items-center  absolute left-[500px] bottom-16 ">
          <p className=" text-blue-900 text-5xl font-bold  w-fit">
            Start the conversation today !
          </p>
          <p className=" border-b-[4px] border-b-red-600 w-20 mt-5"></p>
        </div>
      </div>

      {/* body */}
      <p className=" px-72 mt-10 text-center text-xl">
        Want to try out our software solutions? Or speak to one of our sales
        representatives who can quickly understand your requirements?{" "}
        <span className=" font-semibold">
          {" "}
          Fill out the form below to register your interest!
        </span>
      </p>

      {/* form */}
      <div className="flex mx-10">
        <img className="" src={form_img} alt="banner" />
        <form className=" p-10 bg-[#009999] w-full">
          <div>
            <p className=" text-white text-5xl font-semibold">Contact Us</p>
            <p className=" border-t-[5px] border-t-white w-16 my-4"></p>
          </div>

          <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        </form>
      </div>

      {/* Display Data */}

      <div className=" flex gap-5 flex-wrap">
        <p>{params.name}</p>
        <p>{params.phone_no}</p>
        <p>{params.email}</p>
        <p>{params.company_name}</p>
        <p>{params.message}</p>
      </div>
    </div>
  );
};

export default Contactus;
