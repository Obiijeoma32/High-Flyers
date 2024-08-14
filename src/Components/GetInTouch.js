import contact from "./Images/getInTouch.jpg";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function GetInTouch() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });
  const [save, setSave] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      setLoading(true);
      const formData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        message: values.message,
      };

      // console.log(formData);
      try {
        await fetch("https://simple-mailer-bmcd.onrender.com/v1/contact-us", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          setLoading(false);
          if (res.status === 200) {
            console.log("success");
            setSave(true);
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
      <div className="w-full h-fit pt-16 pb-24 bg-white flex-col justify-center items-center gap-16 inline-flex">
        <section className="md:w-[80%] 100:w-[95%] h-fit px-8 justify-center items-center gap-16 flex">
          <div className=" 100:full md:w-[600px] md:px-[32px] flex gap-[40px] flex-col items-center justify-center">
            <section className="w-full flex-col 100:justify-center 100:items-center 100:text-center xl:text-left xl:justify-start xl:items-start gap-5 flex">
              <h3 className=" text-neutral-700 text-4xl font-semibold  leading-10">Get in touch</h3>
              <p className=" md:whitespace-nowrap text-neutral-500 text-xl font-normal  leading-loose">Our friendly team would love to hear from you.</p>
            </section>
            <form onSubmit={formik.handleSubmit} className=" flex flex-col gap-[24px] w-full ">
              <div className="w-full 100:flex-col md:flex-row flex justify-start items-start gap-[32px]">
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
                  {formik.touched.firstName && formik.errors.firstName ? <div className=" text-red-400 text-base">{formik.errors.firstName}</div> : null}
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
                  {formik.touched.lastName && formik.errors.lastName ? <div className=" text-red-400 text-base">{formik.errors.lastName}</div> : null}
                </section>
              </div>
              <section className="gap-[6px] flex flex-col w-full">
                <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor="email">
                  Email
                </label>
                <input
                  className=" focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] h-12 placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 "
                  placeholder="you@company.com"
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? <div className=" text-[#B7192C]">{formik.errors.email}</div> : null}
              </section>
              <section className="gap-[6px] flex flex-col w-full">
                <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor="number">
                  Phone number
                </label>
                <input
                  className=" focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6]  h-12 placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 "
                  placeholder="+234 (555) 000-0000"
                  type="tel"
                  id="phoneNumber"
                  {...formik.getFieldProps("phoneNumber")}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className=" text-red-400 text-base">{formik.errors.phoneNumber}</div> : null}
              </section>
              <section className="gap-[6px] flex flex-col w-full">
                <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor=" Message">
                  Message
                </label>
                <textarea
                  {...formik.getFieldProps("message")}
                  className="active:bg-[#F4E5FF] focus:bg-[#F4E5FF] outline-[#870AE6] h-[128px] placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 "
                />
                {formik.touched.message && formik.errors.message ? <div className=" text-red-400 text-base">{formik.errors.message}</div> : null}
              </section>
              <section className="gap-3 items-center flex  w-full">
                <input className="  appearance-none checked:bg-[#870AE6]  w-5 h-5 bg-white rounded-[6px] border border-zinc-400" type="checkbox" />
                <label className="text-neutral-500 text-base font-normal leading-normal">
                  You agree to our friendly{" "}
                  <Link onClick={() => window.scrollTo(0, 0)} to="/terms">
                    <span className=" underline ">privacy policy</span>.
                  </Link>
                </label>
              </section>
              <button type="submit" className="px-7 w-full text-base font-medium text-center justify-center flex items-center  h-[48px] bg-[#870AE6] text-[#fff] rounded-[8px]">
                {isLoading ? "LOADING..." : " Send message"}
              </button>
            </form>
          </div>
          <img className=" 100:hidden xl:block w-[576px] h-full" src={contact} alt="Get In Touch" />
        </section>
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
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-full flex-col justify-start text-center items-center gap-[16px] flex">
                      <h2 className="text-neutral-700 text-[24px] font-medium leading-[25px]">Submitted Successfully</h2>
                      <p className="  text-neutral-500 text-[16px] font-normal  leading-[23px]">Thank you for your message. We'll get back to you soon. Please check your email for our response. We appreciate your interest in Highflyers! </p>
                    </div>
                  </div>
                  <Link
                    className=" w-full"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setSave(false);
                    }}
                    to="/"
                  >
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

export default GetInTouch;
