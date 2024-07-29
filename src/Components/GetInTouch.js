import contact from "./Images/getInTouch.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

function GetInTouch() {
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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      additionalComments: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Here you can handle form submission (e.g., send the data to an API)
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
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
              </section>
              <section className="gap-[6px] flex flex-col w-full">
                <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor=" Message">
                  Message
                </label>
                <textarea className="active:bg-[#F4E5FF] focus:bg-[#F4E5FF] outline-[#870AE6] h-[128px] placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 " />
              </section>
              <section className="gap-3 items-center flex  w-full">
                <input className="  appearance-none checked:bg-[#870AE6]  w-5 h-5 bg-white rounded-[6px] border border-zinc-400" type="checkbox" />
                <label className="text-neutral-500 text-base font-normal leading-normal">
                  You agree to our friendly <span className=" underline ">privacy policy</span>.
                </label>
              </section>
              <button type="submit" className="px-7 w-full text-base font-medium text-center justify-center flex items-center  h-[48px] bg-[#870AE6] text-[#fff] rounded-[8px]">
                Send message
              </button>
            </form>
          </div>
          <img className=" 100:hidden xl:block w-[576px] h-full" src={contact} alt="Get In Touch" />
        </section>
      </div>
    </>
  );
}

export default GetInTouch;
