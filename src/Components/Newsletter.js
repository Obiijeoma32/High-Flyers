import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function Newsletter() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });
  const [save, setSave] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      setLoading(true);
      const formData = {
        email: values.email,
      };

      // console.log(formData);
      try {
        await fetch("https://simple-mailer-bmcd.onrender.com/v1/subscribe", {
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
      <div className="w-full h-fit py-24 bg-purple-800  justify-center items-center  flex">
        <section className=" 100:w-[90%] md:w-[85%] 100:flex-col 100:gap-[20px] xl:flex-row flex justify-between items-start">
          <div className=" w-full flex flex-col gap-[20px] items-start">
            <h3 className=" text-white text-4xl font-semibold leading-10">Sign up for our newsletter</h3>
            <p className=" text-purple-200 text-xl font-normal ">Be the first to know about releases and industry news and insights.</p>
          </div>
          <form onSubmit={formik.handleSubmit} className="flex 100:w-full 1xl:w-[494px] 100:flex-col lg:flex-row gap-[16px] items-start">
            <section className=" w-full gap-[8px] flex items-start flex-col">
              <input
                className=" outline-purple-700 100:w-full phone:w-96 h-12 text-gray-500 text-base font-normal pl-4 pr-3.5 py-3 bg-white rounded-lg shadow border border-gray-300   "
                type="email"
                placeholder="Enter your email"
                id="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? <div className=" text-[#B7192C]">{formik.errors.email}</div> : null}
            </section>
            <button type="submit" className="text-white text-base font-medium leading-normal 100:w-full phone:w-28 h-12 px-5 py-3 bg-purple-700 rounded-lg shadow border border-purple-700 justify-center items-center inline-flex">
              {" "}
              {isLoading ? "LOADING..." : "Subscribe"}
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Newsletter;
