import { Link } from "react-router-dom";
import hall from "./Images/hall1.jpeg";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
// import axios from "axios";
const services = [
  { value: "Academic Services", label: "Academic Services" },
  { value: "Event Facilities", label: "Event Facilities" },
];
const contactType = [
  { value: "Email", label: "Email" },
  { value: "Phone Number", label: "Phone Number" },
];
function Quote() {
  // Validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    companyName: Yup.string(),
    services: Yup.object().required("Service is required"),
    additionalComments: Yup.string(),
    preferredContactMethod: Yup.object().required("Preferred contact method is required"),
  });
  const [save, setSave] = useState(true);

  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      services: null,
      additionalComments: "",
      preferredContactMethod: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      setLoading(true);
      const formData = {
        email: values.email,

        firstName: values.firstName,
        lastName: values.lastName,
        companyName: values.companyName,
        phoneNumber: values.phoneNumber,
        services: values.services.label,
        additionalComments: values.additionalComments,
        preferredContactMethod: values.preferredContactMethod.label,
      };

      // console.log(formData);
      try {
        await fetch("https://simple-mailer-bmcd.onrender.com/v1/recieve-quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setSave(true);
            console.log("success");
          } else {
            console.log("error");
          }
        });
      } catch (error) {
        console.log("An Error Occurred: ", error);
      }
    },
  });

  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center">
        <section className=" h-[80px] bg-white bg-opacity-40 fixed top-0 flex items-center justify-between w-full border-solid border-b-[1px] border-b-[#F2F4F7] ">
          <div className=" 100:px-[24px] md:px-[62px] flex items-center justify-between w-full">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <div className=" flex gap-[8px] text-purple-700 text-[16px] font-medium justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 4.99991C12.5 4.99991 7.50001 8.68235 7.5 9.99995C7.49999 11.3175 12.5 14.9999 12.5 14.9999" stroke="#870AE6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Back
              </div>
            </Link>
            <nav className=" p-2   text-[16px] hover:underline hover:text-[#870AE6]   font-medium">
              <a href="mailto:https://highflyers2024.consulting@gmail.com"> highflyers2024.consulting@gmail.com</a>
            </nav>
          </div>
        </section>
        <div className=" pt-[64px] 100:w-[90%] pb-[96px] lg:w-full flex items-center justify-center">
          <div className=" flex justify-between gap-[64px] items-center 100: w-[85%] xl:w-[1200px]">
            <div className=" flex-col gap-[48px] mt-[64px] lg:pr-[650px] justify-center items-center flex w-full">
              <div className="w-full flex flex-col items-start gap-[12px]">
                <h2 className="text-neutral-700 text-[36px] font-semibold leading-[45px]">Your Success Starts Now </h2>
                <p className="  text-neutral-500 text-[20px] font-normal  leading-[30px">Find tailored solutions at unbeatable rates to kickstart your journey to success. </p>
              </div>
              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-[24px] w-full">
                <div className="w-full 100:flex-col md:flex-row flex justify-center items-center gap-[32px]">
                  <section className="gap-[6px] flex flex-col w-full">
                    <label className="text-neutral-600 text-sm font-medium leading-tight" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] h-12 placeholder:text-neutral-500 text-base font-normal leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400"
                      placeholder="First name"
                      type="text"
                      id="firstName"
                      {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                  </section>
                  <section className="gap-[6px] flex flex-col w-full">
                    <label className="text-neutral-600 text-sm font-medium leading-tight" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] h-12 placeholder:text-neutral-500 text-base font-normal leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400"
                      placeholder="Last name"
                      type="text"
                      id="lastName"
                      {...formik.getFieldProps("lastName")}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                  </section>
                </div>
                <section className="gap-[6px] flex flex-col w-full">
                  <label className="text-neutral-600 text-sm font-medium leading-tight" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] h-12 placeholder:text-neutral-500 text-base font-normal leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400"
                    placeholder="you@company.com"
                    type="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? <div className=" text-[#B7192C]">{formik.errors.email}</div> : null}
                </section>
                <section className="gap-[6px] flex flex-col w-full">
                  <label className="text-neutral-600 text-sm font-medium leading-tight" htmlFor="phoneNumber">
                    Phone number
                  </label>
                  <input
                    className="focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] h-12 placeholder:text-neutral-500 text-base font-normal leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400"
                    placeholder="+234 (555) 000-0000"
                    type="tel"
                    id="phoneNumber"
                    {...formik.getFieldProps("phoneNumber")}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
                </section>
                <section className="gap-[6px] flex flex-col w-full">
                  <label className="text-neutral-600 text-sm font-medium leading-tight" htmlFor="companyName">
                    Company name (if applicable)
                  </label>
                  <input
                    type="text"
                    className="focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] h-12 placeholder:text-neutral-500 text-base font-normal leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400"
                    placeholder="Company name"
                    id="companyName"
                    {...formik.getFieldProps("companyName")}
                  />
                </section>
                <section className="gap-[6px] flex flex-col w-full">
                  <label className="text-neutral-600 text-sm font-medium leading-tight" htmlFor="services">
                    Services
                  </label>
                  <Select
                    placeholder="Select services"
                    className=" text-base font-normal leading-normal w-full "
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary50: "#F4E5FF2",
                        primary25: "#B0B0B0",
                        placeholder: "#3d3d3d",
                        primary: "#F4E5FF2",
                      },
                    })}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? "#F4E5FF2" : "#B0B0B0",
                        height: "48px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        borderRadius: "8px",
                        background: "#fff",
                        boxShadow: "0px 1px 3px 0px rgb(0,0, 0, 0.2)",
                        placeholder: "#9E9E9E",
                        outline: "#870AE6",
                        fontWeight: "normal",
                      }),
                    }}
                    options={services}
                    value={formik.values.services}
                    onChange={(option) => formik.setFieldValue("services", option)}
                  />
                  {formik.touched.services && formik.errors.services ? <div>{formik.errors.services.label}</div> : null}
                </section>
                <section className="gap-[6px] flex flex-col w-full">
                  <label className="text-neutral-600 text-sm font-medium leading-tight" htmlFor="additionalComments">
                    Additional comments
                  </label>
                  <textarea
                    className="active:bg-[#F4E5FF] focus:bg-[#F4E5FF] outline-[#870AE6] h-[128px] placeholder:text-neutral-500 text-base font-normal leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400"
                    id="additionalComments"
                    {...formik.getFieldProps("additionalComments")}
                  />
                </section>
                <section className="gap-[6px] flex flex-col w-full">
                  <label className="text-neutral-600 text-sm font-medium leading-tight" htmlFor="preferredContactMethod">
                    Preferred contact method
                  </label>
                  <Select
                    placeholder="Select contact method"
                    className=" text-base font-normal leading-normal w-full "
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary50: "#F4E5FF2",
                        primary25: "#B0B0B0",
                        placeholder: "#3d3d3d",
                        primary: "#F4E5FF2",
                      },
                    })}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? "#F4E5FF2" : "#B0B0B0",
                        height: "48px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        borderRadius: "8px",
                        background: "#fff",
                        boxShadow: "0px 1px 3px 0px rgb(0,0, 0, 0.2)",
                        placeholder: "#9E9E9E",
                        outline: "#870AE6",
                        fontWeight: "normal",
                      }),
                    }}
                    options={contactType}
                    value={formik.values.preferredContactMethod}
                    onChange={(option) => formik.setFieldValue("preferredContactMethod", option)}
                  />
                  {formik.touched.preferredContactMethod && formik.errors.preferredContactMethod ? <div>{formik.errors.preferredContactMethod.label}</div> : null}
                </section>
                <section className="mt-[38px] items-center justify-between gap-[16px] flex w-full">
                  <Link className="w-full" to="/">
                    <div className="px-7 w-full text-base font-medium border-solid border-[1px] border-purple-700 text-center justify-center flex items-center h-[48px] text-gray-900 rounded-[8px]">Cancel</div>
                  </Link>
                  <button type="submit" className="px-7 w-full text-base font-medium text-center justify-center flex items-center h-[48px] bg-[#870AE6] text-[#fff] rounded-[8px]">
                    {isLoading ? "LOADING..." : "Submit"}
                  </button>
                </section>
              </form>
            </div>
            <div className=" 100:hidden lg:block fixed top-[124px] left-[750px]  w-full h-full">
              <img alt="High-Flyers" className="w-[650px] h-[680px] " src={hall} />
            </div>
          </div>
        </div>
      </div>
      {save && (
        <>
          <div className={` flex-col justify-start py-[36px] items-center gap-[58px] flex  fixed left-0 top-0 z-50 bg-[#000]/30 backdrop-blur-lg w-full h-full`}>
            <div className="  w-[90%] flex justify-end items-end">
              <div onClick={() => setSave(false)} className="w-12 h-12 cursor-pointer  justify-center flex  items-center   bg-purple-100 rounded-3xl border-8 border-purple-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0005 5L5.00045 19M5.00045 5L19.0005 19" stroke="#9C19FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <section className=" 100:w-[80%] h-full phone:w-[400px] flex justify-center  items-center">
              <div className=" 100:w-full iphone:w-96 100:h-fit iphone:h-64 p-[24px] bg-white rounded-xl shadow flex-col justify-start items-center flex">
                <div className="w-full flex-col justify-start items-center gap-[32px] flex">
                  <div className="w-full flex-col justify-start items-center gap-5 flex">
                    <div className="w-12 h-12   justify-center flex  items-center  bg-emerald-100 rounded-3xl border-8 border-emerald-50  ">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22 11.5799V12.4999C21.9988 14.6563 21.3005 16.7545 20.0093 18.4817C18.7182 20.2088 16.9033 21.4723 14.8354 22.0838C12.7674 22.6952 10.5573 22.6218 8.53447 21.8744C6.51168 21.1271 4.78465 19.746 3.61096 17.9369C2.43727 16.1279 1.87979 13.9879 2.02168 11.8362C2.16356 9.68443 2.99721 7.63619 4.39828 5.99694C5.79935 4.35768 7.69279 3.21525 9.79619 2.74001C11.8996 2.26477 14.1003 2.4822 16.07 3.35986M22 4.49986L12 14.5099L9.00001 11.5099"
                          stroke="#039855"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-full flex-col justify-start text-center items-center gap-[16px] flex">
                      <h2 className="text-neutral-700 text-[24px] font-medium leading-[25px]">Submitted Successfully</h2>
                      <p className="  text-neutral-500 text-[16px] font-normal  leading-[23px]">Thank you for your quote request. We'll get back to you soon. Please check your email for our response. We appreciate your interest in Highflyers! </p>
                    </div>
                  </div>
                  <Link className=" w-full" onClick={() => window.scrollTo(0, 0)} to="/">
                    <div className="leading-[20px] border-purple-700 border-solid border-[1px] rounded-[8px]  bg-purple-700 text-lg text-[#fff] flex justify-center font-medium h-fit px-[20px] py-[12px] w-full ">Return to Home</div>
                  </Link>
                </div>
              </div>
            </section>{" "}
          </div>
        </>
      )}
    </>
  );
}

export default Quote;
