import { Link } from "react-router-dom";
import hall from "./Images/hall1.jpeg";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
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
      console.log(values);

      const formData = {
        ...values,
      };
      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          console.log("success");
        } else {
          console.log("error");
        }
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
            <Link to="/">
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
                    Submit
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
      {/* <form action="https://formsubmit.co/obiijeoma32@gmail.com" method="POST" className=" flex flex-col gap-[24px] w-full ">
        <div className=" w-full 100:flex-col md:flex-row flex justify-center items-center gap-[32px]">
          <section className="gap-[6px] flex flex-col w-full">
            <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor="first name">
              First Name
            </label>
            <input
              className=" focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] h-12 placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 "
              placeholder="First name"
              type="text"
            />
          </section>
          <section className="gap-[6px] flex flex-col w-full">
            <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor="last name">
              Last Name
            </label>
            <input
              className=" focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] h-12 placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 "
              placeholder="Last name"
              type="text"
            />
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
          />
        </section>
        <section className="gap-[6px] flex flex-col w-full">
          <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor="number">
            Phone number
          </label>
          <input
            className=" focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6]  h-12 placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 "
            placeholder="+234 (555) 000-0000"
            type="tel"
          />
        </section>
        <section className="gap-[6px] flex flex-col w-full">
          <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor=" Message">
            Company name (if applicable)
          </label>
          <input
            type="text"
            className=" focus:bg-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6]  h-12 placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 "
            placeholder="Company name"
          />
        </section>
        <section className="gap-[6px] flex flex-col w-full">
          <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor=" Message">
            Services
          </label>
          <Select
            placeholder="Select services"
            className="   text-base font-normal  leading-normal w-full   shadow border  "
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "#F4E5FF2" : "#B0B0B0",
                // border: "solid",
                // border: "1px",
                height: "48px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "8px",
                text: "16px",
                background: "#fff",
                placeholder: "#9E9E9E",
                outline: "#870AE6",
                fontWeight: "normal",
              }),
            }}
            options={services}
          />
        </section>
        <section className="gap-[6px] flex flex-col w-full">
          <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor=" Message">
            Additional comments
          </label>
          <textarea className="active:bg-[#F4E5FF] focus:bg-[#F4E5FF] outline-[#870AE6] h-[128px] placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 " />
        </section>
        <section className="gap-[6px] flex flex-col w-full">
          <label className="text-neutral-600  text-sm font-medium  leading-tight" htmlFor=" Message">
            Preferred contact method
          </label>
          <Select
            placeholder="Select contact method"
            className="  placeholder:text-neutral-500  text-base font-normal  leading-normal w-full   shadow border  "
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "#F4E5FF2" : "#B0B0B0",
                // border: "solid",
                // border: "1px",
                height: "48px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "8px",
                text: "16px",
                background: "#fff",
                placeholder: "#9E9E9E",
                outline: "#870AE6",
                fontWeight: "normal",
              }),
            }}
            options={contactType}
          />
        </section>
        <section className=" mt-[38px] items-center justify-between gap-[16px] flex  w-full">
          <Link className="w-full" to="/">
            <div className="px-7 w-full text-base font-medium border-solid border-[1px] border-purple-700 text-center justify-center flex items-center  h-[48px] text-gray-900 rounded-[8px]">Cancel</div>
          </Link>
          <button type="Submit" className="px-7 w-full text-base font-medium text-center justify-center flex items-center  h-[48px] bg-[#870AE6] text-[#fff] rounded-[8px]">
            Submit
          </button>
        </section>
      </form> */}
    </>
  );
}

export default Quote;
