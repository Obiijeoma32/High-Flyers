import Header from "./Header";
import { useRef } from "react";
import hall from "./Images/hall1.jpeg";
import hall2 from "./Images/hall.jpeg";
import hall3 from "./Images/group2.jpeg";
import CounterPage from "./CounterPage";
import OurStory from "./OurStory";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  // const aboutUs = useRef(null);
  // const services = useRef(null);
  const contact = useNavigate("/");
  const home = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const countersData = [
    { target: 400, suffix: "+", label: "Projects completed" },
    { target: 600, suffix: "%", label: "Return on investment" },
    { target: 10, suffix: "K", label: "Client" },
  ];
  return (
    <>
      <Header scrollToSection={scrollToSection} home={home} contact={contact} />
      <div className=" w-full flex justify-center 100:pt-[100px] lg:pt-[180px] items-center">
        <section className=" 100:gap-[62px] 1xl:gap-[90px] 100:w-[85%] xl:w-[90%] 1xl:w-[1250px] 100:flex-col xl:flex-row flex justify-between items-center">
          <div className=" gap-[48px] flex flex-col items-start  w-full">
            <div className=" flex flex-col items-start gap-[12px]">
              <h5 className=" text-purple-600 text-base font-semibold  leading-normal">About us</h5>
              <h2 className="text-neutral-700 100:text-[36px] 100:leading-[45px] md:text-5xl font-semibold md:leading-[60px]">
                About<span className="text-purple-700 "> High-Flyers</span> Consulting Nigeria Limited.
              </h2>
            </div>
            <p className=" 100:hidden 1xl:flex w-full text-neutral-500 text-xl font-normal  leading-loose">
              High-Flyers Consulting Nigeria Limited, established in 2011, is a leading socio-educational service provider. Our team comprises seasoned professionals in education and social services. We have diversified our services to include
              exceptional facilities for various events such as conferences, seminars, training sessions, interviews, board meetings, corporate gatherings, and exhibitions.
              <br />
              Situated in a prime location very close to renowned institutions like the University of Ibadan, NISER, Ibadan Polytechnic, and Federal College of Statistics, our facility is not only easily accessible but also purpose-built to cater for
              diverse needs
            </p>
          </div>
          <div className=" xl:w-[600px]  100:w-full flex flex-col justify-center  items-center">
            <div className=" w-full mb-[-65px] flex justify-end items-end">
              <div className="  w-24 h-24 bg-yellow-400" />
            </div>
            <div className=" z-20 w-[90%] h-fit flex flex-col justify-center gap-[10px] items-center">
              <div className=" flex justify-center  items-center w-full gap-[10px]">
                <div className=" 100:w-[50%] 100:h-[20vh] xl:w-[256px] xl:h-[176px] " style={{ backgroundImage: `url(${hall})`, backgroundSize: "cover" }} />
                <div className=" 100:w-[50%] 100:h-[20vh] xl:w-[256px] xl:h-[176px] " style={{ backgroundImage: `url(${hall2})`, backgroundSize: "cover" }} />
              </div>
              <div style={{ backgroundImage: `url(${hall3})`, backgroundSize: "cover" }} className=" 100:w-full 100:h-[25vh] xl:w-full xl:h-[263px] " />
            </div>
            <div className=" w-full mt-[-65px] flex justify-start items-start">
              <div className="  w-24 h-24 bg-yellow-400" />
            </div>{" "}
          </div>
          <p className=" 100:flex 1xl:hidden w-full text-neutral-500 text-xl font-normal  leading-loose">
            High-Flyers Consulting Nigeria Limited, established in 2012, is a leading socio-educational service provider. Our team comprises seasoned professionals in education and social services. We have diversified our services to include
            exceptional facilities for various events such as conferences, seminars, training sessions, interviews, board meetings, corporate gatherings, and exhibitions.
            <br />
            Situated in a prime location very close to renowned institutions like the University of Ibadan, NISER, Ibadan Polytechnic, and Federal College of Statistics, our facility is not only easily accessible but also purpose-built to cater for
            diverse needs
          </p>
        </section>
      </div>
      <CounterPage countersData={countersData} speed={10} />
      <OurStory />
      <Newsletter />

      <Footer />
    </>
  );
}

export default AboutUs;
