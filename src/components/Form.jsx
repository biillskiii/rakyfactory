import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!form.current.from_name.value.trim()) {
      errors.from_name = "Nama wajib diisi";
    }
    const whatsappRegex = /^\+62\d{9,}$/;
    if (
      !form.current.no_wa.value.trim() ||
      !whatsappRegex.test(form.current.no_wa.value.trim())
    ) {
      errors.no_wa = "No hp wajib diisi dengan format +62";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !form.current.from_email.value.trim() ||
      !emailRegex.test(form.current.from_email.value.trim())
    ) {
      errors.from_email = "Email wajib diisi dengan format email";
    }
    if (!form.current.referal.value.trim()) {
      errors.referal = "Kode Referal wajib diisi";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // If the form is valid, proceed with sending the email
        const result = await emailjs.sendForm(
          import.meta.env.VITE_YOUR_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_YOUR_PUBLIC_KEY
        );
        form.current.reset();
        setValidationErrors({});
        console.log(result.text);
        // Show toast notification on success
        toast.success("Berhasil mengirim email!", {
          position: "top-center",
          autoClose: 3000, // Close the notification after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.error(error.text);
        // Show toast notification on error
        toast.error("Gagal mengirim email. Silakan coba lagi nanti.", {
          position: "top-center",
          autoClose: 3000, // Close the notification after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <>
      <div>
        <h2 className="w-[705px] mx-auto font-bold text-3xl text-center ">
          Kembangkan konten Anda dengan{" "}
          <span className="text-P2">Rakyfactory Swiftcut</span> sekarang!
        </h2>
        <p className="w-[565px] mt-5 mb-6 font-semibold text-sm mx-auto text-center">
          Daftar sekarang untuk penawaran eksklusif! Dapatkan{" "}
          <span className="text-P2">diskon 10% selamanya</span> dengan
          menggunakan kode referral Anda.
        </p>
      </div>
      <div className="flex flex-col mx-auto my-14 max-w-md">
        <form ref={form} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Nama</label>
            <input
              type="text"
              name="from_name"
              className={`border p-2 rounded-md focus:outline-none focus:border-blue-500 ${
                validationErrors.from_name ? "border-red-500" : ""
              }`}
            />
            {validationErrors.from_name && (
              <p className="text-red-500 text-sm">
                {validationErrors.from_name}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">No Whatsapp</label>
            <input
              type="text"
              name="no_wa"
              className={`border p-2 rounded-md focus:outline-none focus:border-blue-500 ${
                validationErrors.no_wa ? "border-red-500" : ""
              }`}
            />
            {validationErrors.no_wa && (
              <p className="text-red-500 text-sm">{validationErrors.no_wa}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Email</label>
            <input
              type="text"
              name="from_email"
              className={`border p-2 rounded-md focus:outline-none focus:border-blue-500 ${
                validationErrors.from_email ? "border-red-500" : ""
              }`}
            />
            {validationErrors.from_email && (
              <p className="text-red-500 text-sm">
                {validationErrors.from_email}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Kode Referal</label>
            <input
              type="text"
              name="referal"
              className={`border p-2 rounded-md focus:outline-none focus:border-blue-500 ${
                validationErrors.referal ? "border-red-500" : ""
              }`}
            />
            {validationErrors.referal && (
              <p className="text-red-500 text-sm">{validationErrors.referal}</p>
            )}
          </div>
        </form>
        <button
          onClick={sendEmail}
          className="bg-P2 w-[214px] mx-auto mt-10  rounded-md py-2 text-white"
        >
          Daftar sekarang!
        </button>
        <p className="font-medium text-base my-3 text-center mx-auto">
          Tim Sales kami akan segera menghubungi Anda.
        </p>
      </div>
      <ToastContainer />
    </>
  );
};

export default Form;
