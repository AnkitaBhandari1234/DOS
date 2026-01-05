'use client'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormPage = () => {
  return (
   <div className="w-full max-w-xl bg-[#1D1A34] border border-white/10 rounded-2xl p-8">

  <h2 className="text-2xl font-semibold text-center mb-2 text-white">
    Send Us a Message
  </h2>
  <p className="text-center text-[#C8C6E3] mb-6">
    Tell us about your goals — we’ll get back to you soon.
  </p>

  <Formik
    initialValues={{
      name: "",
      email: "",
      phone: "",
      message: "",
    }}
    validationSchema={Yup.object({
      name: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid phone number")
        .nullable()
        .notRequired(),
      message: Yup.string().required("Message is required"),
    })}
    onSubmit={(values, { resetForm }) => {
      console.log(values);
      resetForm();
    }}
  >
    {() => (
      <Form className="flex flex-col gap-5">

        {/* Full Name */}
        <div>
          <label className="block text-sm mb-1 text-[#C8C6E3]">
            Full Name
          </label>
          <Field
            name="name"
            placeholder="Enter your full name"
            className="w-full bg-[#121028] border border-white/10 rounded-lg px-4 py-3
                       focus:outline-none focus:border-[#524DD3] text-white"
          />
          <ErrorMessage
            name="name"
            component="p"
            className="text-red-400 text-sm mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-[#C8C6E3]">
            Email Address
          </label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#121028] border border-white/10 rounded-lg px-4 py-3
                       focus:outline-none focus:border-[#524DD3] text-white"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-400 text-sm mt-1"
          />
        </div>

        {/* Phone (Optional) */}
        <div>
          <label className="block text-sm mb-1 text-[#C8C6E3]">
            Phone Number <span className="text-xs">(optional)</span>
          </label>
          <Field
            name="phone"
            placeholder="Enter your phone number"
            className="w-full bg-[#121028] border border-white/10 rounded-lg px-4 py-3
                       focus:outline-none focus:border-[#524DD3] text-white"
          />
          <ErrorMessage
            name="phone"
            component="p"
            className="text-red-400 text-sm mt-1"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-1 text-[#C8C6E3]">
            Your Message
          </label>
          <Field
            as="textarea"
            name="message"
            rows="4"
            placeholder="Tell us how we can help you"
            className="w-full bg-[#121028] border border-white/10 rounded-lg px-4 py-3
                       focus:outline-none focus:border-[#524DD3] text-white"
          />
          <ErrorMessage
            name="message"
            component="p"
            className="text-red-400 text-sm mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#524DD3] py-3 rounded-lg font-medium text-white
                     hover:bg-[#6A66FF] transition"
        >
          Send Message
        </button>

      </Form>
    )}
  </Formik>
</div>

  );
};

export default FormPage;
