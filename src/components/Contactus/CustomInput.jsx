import React from "react";

const CustomInput = ({ onChange, label, name }) => {
  return (
    <div className=" mb-1">
      <label className=" block text-white pl-2 text-xs">{label}</label>
      <input
        className=" border-b border-white w-full outline-none bg-transparent text-white p-2"
        type="text"
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
