import React from "react";
import CustomInput from "./CustomInput";

const Form = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <div>
        <CustomInput
          label={"Name"}
          name="name"
          onChange={(e) => handleChange(e)}
        />

        <CustomInput
          label={"Email Address"}
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <CustomInput
          label={"Phone Number"}
          name="phone_no"
          onChange={(e) => handleChange(e)}
        />

        <CustomInput
          label={"Company Name"}
          name="company_name"
          onChange={(e) => handleChange(e)}
        />

        <CustomInput
          label={"Message"}
          name="message"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button
        onClick={(e) => handleSubmit(e)}
        className="py-[10px] font-semibold text-xl w-full  mt-10 bg-white text-[#009999]"
      >
        REQUEST FREE TRIAL
      </button>
    </div>
  );
};

export default Form;
