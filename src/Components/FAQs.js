import { Link } from "react-router-dom";

function FAQs() {
  return (
    <>
      <div className=" w-full h-fit bg-[#EEFFFC] items-center flex justify-center py-[96px]">
        <section className=" flex flex-col  gap-[64px] 100:px-[16px]  md:px-[32px]  100:w-[95%]  2xl:w-[1280px] justify-center  items-center">
          <div className=" 1xl:justify-center 1xl:items-center 100:items-start 100:justify-start px-[56px] w-full flex flex-col gap-[12px] ">
            <h4 className=" 100:text-left 1xl:text-center text-purple-900 text-base font-semibold  leading-normal">Support</h4>
            <h2 className=" 100:text-left 1xl:text-center text-neutral-700 text-[48px] font-semibold leading-10">FAQs</h2>
          </div>
          <div className="flex 100:w-full 1xl:w-full flex-col  gap-[64px]  px-[32px]">
            <section className=" w-full 100:flex-col xl:flex-row flex justify-center 100:gap-[64px] xl:gap-[32px] items-center">
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <h3 className="text-neutral-800 text-lg font-medium  leading-7">What services does High-Flyers Consulting provide?</h3>
                <p className="text-zinc-600 text-base font-normal  leading-normal">High-Flyers Consulting offers academic consulting, event management, and facility rental.</p>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <h3 className="text-neutral-800 text-lg font-medium  leading-7">How can I contact High-Flyers Consulting?</h3>
                <p className="text-zinc-600 text-base font-normal  leading-normal">
                  You can easily reach us through various channels, including our website contact form, email, or by giving us a call. We're always available to assist you with any inquiries or requests you may have.
                </p>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <h3 className="text-neutral-800 text-lg font-medium  leading-7">Are your facilities equipped for presentations and meetings?</h3>
                <p className="text-zinc-600 text-base font-normal  leading-normal">
                  Yes, our facilities are equipped for presentations and meetings, featuring modern amenities like projectors, smart technology, and free WiFi for seamless connectivity.
                </p>
              </div>
            </section>
            <section className=" w-full 100:flex-col xl:flex-row flex justify-center 100:gap-[64px] xl:gap-[32px] items-center">
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <h3 className="text-neutral-800 text-lg font-medium  leading-7">What's the process for renting your facilities?</h3>
                <p className="text-zinc-600 text-base font-normal  leading-normal">To rent our facilities, contact us via our website, email, or phone to check availability and pricing. We'll guide you through the booking process once confirmed.</p>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <h3 className="text-neutral-800 text-lg font-medium  leading-7">Do you offer customized solutions for events or programs?</h3>
                <p className="text-zinc-600 text-base font-normal  leading-normal">Certainly! We offer tailored solutions for your events or programmes, ensuring every detail aligns with your needs for a successful outcome. </p>
              </div>
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <h3 className="text-neutral-800 text-lg font-medium  leading-7">What safety measures do you have in place?</h3>
                <p className="text-zinc-600 text-base font-normal  leading-normal">We uphold rigorous cleaning standards and strictly adhere to health and safety guidelines to ensure a secure environment for all. </p>
              </div>
            </section>
            <div className="w-full 100:h-fit lg:h-32 p-8 bg-neutral-100 rounded-2xl justify-center items-center inline-flex">
              <section className="flex 100:flex-col lg:flex-row w-full 100:gap-[20px] justify-between items-center">
                <div className=" flex-col 100:justify-center 100:items-center 100:text-center lg:text-left lg:justify-start lg:items-start gap-2 flex">
                  <h4 className="self-stretch text-neutral-700 text-xl font-medium leading-loose">Still have questions?</h4>
                  <p className=" text-neutral-500 text-lg font-normal leading-7">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>
                <a href="https://wa.me/2347071859574" target="_blank">
                  <div className="px-7 w-fit text-base font-medium text-center flex items-center  h-[48px] bg-[#870AE6] text-[#fff] rounded-[8px]">Get in touch</div>
                </a>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FAQs;
