import React from "react";
import Logo from "../assets/logo.png";
const FormWaitlist = () => {
  return (
    <div className="bg-white shadow-md flex flex-col justify-center items-center h-7/12 w-9/12">
      <img src={Logo} alt="logo-raky" />
      <h1>Join Waitlist</h1>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Email" />
    </div>
  );
};

export default FormWaitlist;
