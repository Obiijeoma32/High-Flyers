import { Link } from "react-router-dom";
import hall from "./Images/hall1.jpeg";
import hall2 from "./Images/hall.jpeg";
import hall3 from "./Images/IMG_6394.jpeg";
import hall4 from "./Images/group1.jpeg";
import hall5 from "./Images/group2.jpeg";

function WhyChooseUs() {
  return (
    <>
      <div className=" w-full h-fit bg-[#FAF4FF] items-center flex justify-center py-[96px]">
        <section className=" flex 100:flex-col xl:flex-row gap-[64px]  px-[32px]  100:w-[90%] md:w-[90%] 2xl:w-[1280px] justify-center  items-center">
          <div className=" 100:justify-center 100:items-center 100:text-center xl:justify-start xl:items-start xl:text-left 100:w-[100%] md:w-[80%] flex flex-col gap-[40px] ">
            <section className=" w-full flex gap-[16px]  100:items-center xl:items-start flex-col ">
              <h4 className=" w-full flex gap-[10px] 100:flex-col md:flex-row 100:justify-center xl:justify-start items-center  text-neutral-700 text-4xl font-semibold  leading-10">
                Why Choose <span className="w-56 h-14 p-2.5 bg-yellow-200 rounded-lg justify-center text-purple-700 flex">High-Flyers</span>
              </h4>
              <p className=" 100:w-full md:w-[78%] lg:w-[552px]  text-neutral-400 text-xl font-normal  leading-loose">
                Experience Excellence in Academic Services & Event Management with High-Flyers Consulting. Our seasoned team and top-notch facilities ensure unmatched results for your educational and corporate endeavors.{" "}
              </p>
            </section>
            <section className=" gap-[12px] h-fit w-fit 100:flex-col-reverse md:flex-row flex items-center">
              <Link onClick={() => window.scrollTo(0, 0)} className="w-full" to="/about">
                {" "}
                <nav className="lg:w-fit h-[48px] 100:w-full rounded-lg  px-7 py-4 bg-white text-center justify-center flex items-center shadow border border-zinc-400  text-neutral-500 text-base font-medium leading-7">Learn more</nav>
              </Link>{" "}
              <Link onClick={() => window.scrollTo(0, 0)} className="w-full" to="/quote">
                <div className="px-7 w-full whitespace-nowrap text-base font-medium text-center flex items-center  h-[48px] bg-[#870AE6] text-[#fff] rounded-[8px]">Request a Quote</div>
              </Link>
            </section>
          </div>
          <div className=" 100:hidden sm:flex w-fit  flex-col gap-[16px]  items-center justify-center ">
            <section className=" w-fit items-end flex gap-[16px]">
              <img src={hall} alt="High-Flyers" className="100:w-[120px] 100:h-[120px] md:w-[160px] md:h-[160px]" />
              <img src={hall2} alt="High-Flyers" className="100:w-[120px] 100:h-[200px] md:w-[160px] md:h-[240px]" />
            </section>
            <section className=" 100:w-full md:w-[578px] items-start flex gap-[16px]">
              <img src={hall3} alt="High-Flyers" className=" 100:w-[102px] 100:h-[120px] md:w-[192px] md:h-[128px]" />
              <img src={hall4} alt="High-Flyers" className="100:w-[120px] 100:h-[200px] md:w-[160px] md:h-[240px]" />
              <img src={hall5} alt="High-Flyers" className="100:w-[102px] 100:h-[120px] md:w-[192px] md:h-[128px]" />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default WhyChooseUs;
