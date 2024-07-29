import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import hall from "./Images/hall1.jpeg";
import hall2 from "./Images/hall.jpeg";
import hall3 from "./Images/IMG_6394.jpeg";
import hall4 from "./Images/IMG_6457.jpeg";
import hall5 from "./Images/IMG_6346.jpeg";
import hall6 from "./Images/IMG_6382.jpeg";
import hall7 from "./Images/IMG_6386.jpeg";
import hall8 from "./Images/IMG_6387.jpeg";
import hall9 from "./Images/IMG_6400.jpeg";
import hall10 from "./Images/IMG_6416.jpeg";
import hall11 from "./Images/IMG_6460.jpeg";
import hall12 from "./Images/group1.jpeg";
import hall13 from "./Images/group2.jpeg";
import Features from "./Features";
import WhyChooseUs from "./WhyChooseUs";
import OurVision from "./OurVision";
import CoreValues from "./CoreValues";
import OurMission from "./OurMission";
import FAQs from "./FAQs";
import GetInTouch from "./GetInTouch";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
// import AboutUs from "./AboutUs";

function HomePage() {
  // const aboutUs = useRef(null);
  // const services = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [
    {
      id: 1,
      name: hall,
    },
    {
      id: 2,
      name: hall2,
    },
    {
      id: 3,
      name: hall3,
    },
    {
      id: 4,
      name: hall4,
    },
    {
      id: 5,
      name: hall5,
    },
    {
      id: 6,
      name: hall6,
    },
    {
      id: 7,
      name: hall7,
    },
    {
      id: 8,
      name: hall8,
    },
    {
      id: 9,
      name: hall9,
    },
    {
      id: 10,
      name: hall10,
    },
    {
      id: 11,
      name: hall11,
    },
    {
      id: 12,
      name: hall12,
    },
    {
      id: 13,
      name: hall13,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 1000); // Duration for the dissolve effect
    }, 5000); // Duration for how long each image is shown

    return () => clearInterval(interval);
  }, [images.length]);
  console.log(fade);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} home={home} contact={contact} />
      <section ref={home}>
        <section className=" flex 100:pt-[100px] lg:pt-[180px] flex-col items-center py-[96px] gap-[64px] h-fit w-full justify-center">
          <div className=" flex flex-col justify-center items-center 100:w-[90%] lg:w-[80%] gap-[48px]">
            <div className="flex flex-col justify-center items-center w-full gap-[24px]">
              <h4 className=" h-7  px-2.5 py-1 mix-blend-multiply bg-purple-50 rounded-2xl text-center text-purple-400 text-sm font-medium  leading-tigh flex"> Empowering Your Business Growth</h4>
              <h1 className="lg:w-[70%] 100:w-full text-center text-neutral-700 100:text-[48px] 100:leading-[60px] md:text-6xl font-medium md:leading-[72px]">
                Unlock Your <span className="text-purple-700 text-6xl font-medium ">Potential</span> with High-Flyers Consulting
              </h1>
              <p className="md:w-[600px] text-center text-neutral-500 100:text-[18px] 100:leading-[30px] md:text-xl font-normal md:leading-loose">
                Classy facilities for corporate events, conferences, seminars, training programs, board/strategic meetings, product launch, interview, and socio academic gatherings.
              </p>
            </div>
            <section className=" gap-[12px] 100:flex-col phone:flex-row h-fit w-fit flex items-center">
              <nav className="w-44 h-14 rounded-lg  px-7 py-4 bg-white  shadow border border-zinc-400 justify-center items-center gap-3 flex text-neutral-500 text-lg font-mediumleading-7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 8L16 12L10 16V8Z" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Showreel
              </nav>
              <a href="https://wa.me/07071859574" target="_blank">
                <div className="px-7 100:w-full md:w-40 text-[16px] justify-center font-medium text-center flex items-center  h-14 bg-[#870AE6] text-[#fff] rounded-[8px]">Chat with us</div>
              </a>
            </section>
          </div>
          <div className=" w-[85%] 100:h-[300px] relative flex  items-center md:h-[733px] 2xl:h-[933px] p-[50px] bg-purple-700">
            {images.map((image, index) => (
              <img
                // style={{ padding: "50px", boxSizing: "border-box" }}
                key={image.id}
                src={image.name}
                alt={`Slide ${index}`}
                className={`w-full 100:p-[20px] md:p-[50px] box-border h-full absolute inset-0  object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </section>
      </section>
      <section className=" w-full h-fit py-[100px] px-[10px] flex justify-center items-center bg-[#FAF4FF]">
        <div className=" flex flex-col gap-[32px] w-full px-[32px] justify-center items-center">
          <section className="justify-center items-center 100:w-[95%] md:w-[80%] lg:w-[1008px] flex flex-col gap-[20px] ">
            <div className=" justify-center items-center 100:w-[100%] md:w-[80%] flex flex-col gap-[12px] ">
              <h4 className=" text-center text-purple-900 text-base font-semibold  leading-normal">About Us</h4>
              <h2 className=" text-center text-neutral-700 100:text-3xl md:text-4xl font-semibold  leading-10">Empowering Education and Events: Unlocking Opportunities, Building Communities</h2>
            </div>
            <p className=" 100:w-[100%] md:w-[75%] text-center text-neutral-500 100:text-lg md:text-xl font-normal font-['Inter'] leading-loose">
              High-Flyers Consulting Nigeria Limited is a educational and social sciences service provider incorporated in 2011. Our team comprises professionals in education and social services. We offer excellent facilities for various events and
              gatherings.
            </p>
          </section>
          <section className=" gap-[12px] h-fit w-fit 100:flex-col md:flex-row flex items-center">
            <Link onClick={() => window.scrollTo(0, 0)} className="w-full" to="/about">
              {" "}
              <nav className="100:w-full md:w-fit  justify-center h-[48px] rounded-lg  px-7 py-4 bg-white text-center flex items-center shadow border border-zinc-400  text-neutral-500 text-base font-medium leading-7">Learn more</nav>
            </Link>{" "}
            <Link onClick={() => window.scrollTo(0, 0)} className="w-full" to="/quote">
              <div className="px-7 w-full text-base whitespace-nowrap font-medium text-center flex items-center  h-[48px] bg-[#870AE6] text-[#fff] rounded-[8px]">Request a Quote</div>
            </Link>
          </section>
        </div>
      </section>
      <Features />
      <WhyChooseUs />
      <OurVision />
      <CoreValues />
      <OurMission />
      <FAQs />
      <section ref={contact}>
        <GetInTouch />
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default HomePage;
