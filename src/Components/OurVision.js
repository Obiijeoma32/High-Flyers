import user from "./Images/unsplash.jpg";
import { ReactComponent as Star } from "./Images/star.svg";

function OurVision() {
  return (
    <>
      <div className=" w-full h-fit bg-gray-50 items-center flex justify-center py-[96px]">
        <section className=" flex 100:flex-col xl:flex-row gap-[64px]  px-[32px]  100:w-[90%] md:w-[90%] 2xl:w-[1280px] justify-center  items-center">
          <div
            className="w-full flex justify-end items-end 100:h-[50vh] sm:h-[592px]"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${user})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          >
            <div className="h-fit w-full px-6 pt-6 pb-8 bg-white/30 backdrop-blur-xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white 100:text-[18px] sm:text-2xl font-medium sm:leading-[38px]">“High-Flyers Consulting sets the standard for academic support and event management across the country.”</div>
              <div className="justify-start 100:flex-col sm:flex-row w-full items-start gap-4 inline-flex">
                <h4 className="grow shrink basis-0 100:text-[24px] text-white sm:text-[32px] font-semibold  leading-[44px]">Kunle Hester</h4>

                <div className=" flex w-fit justify-end items-end gap-[4px]">
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col items-start justify-start gap-[24px]">
            <h4 className=" text-purple-900 text-base font-semibold leading-normal">Our Vision</h4>
            <p className="md:w-[502px] 2xl:w-[600px] 100:w-full text-neutral-700 100:text-[36px] sm:text-5xl font-semibold leading-[54px]">To be a key player in the provision of top notch services in Africa</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurVision;
