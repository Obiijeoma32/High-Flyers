import lead from "./Images/Unsplash.png";

function OurMission() {
  return (
    <>
      <div className=" w-full h-fit bg-white items-center flex justify-center py-[96px]">
        <section className=" 100:w-[80%] xl:w-[90%] 1xl:w-[1280px] flex flex-col justify-center gap-[32px] items-center">
          <h4 className=" text-purple-900 text-base font-semibold leading-normal">Our Mission</h4>
          <h3 className="w-full text-center text-neutral-700 100:text-[30px] 100:leading-[40px] md:text-[48px] md:leading-[60px] font-medium ">
            To be among the topmost providers of socio educational services, leveraging on technology, making academic consulting and advocacy available to its clients and promoting a culture of excellence
          </h3>
          {/* <section className=" flex flex-col gap-[16px] justify-center items-center">
            <img className=" w-[64px] rounded-full " src={lead} alt="Lead Consultant" />
            <div className=" flex-col justify-start items-start gap-1 inline-flex">
              <h4 className="self-stretch text-center text-gray-900 text-lg font-medium  leading-7">Femi Oke</h4>
              <p className="self-stretch text-center text-gray-500 text-base font-normal  leading-normal">Lead Consultant</p>
            </div>
          </section> */}
        </section>
      </div>
    </>
  );
}

export default OurMission;
