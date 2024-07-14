import user from "./Images/unsplash.jpg";

function OurVision() {
  return (
    <>
      <div className=" w-full h-fit bg-gray-50 items-center flex justify-center py-[96px]">
        <section className=" flex 100:flex-col xl:flex-row gap-[64px]  px-[32px]  100:w-[90%] md:w-[90%] 2xl:w-[1280px] justify-center  items-center">
          <div className="w-full">
            <img className=" w-full" src={user} alt="user" />
          </div>
          <div className=" w-full flex flex-col items-start justify-start gap-[24px]">
            <h4 className=" text-purple-900 text-base font-semibold leading-normal">Our Vision</h4>
            <p className="md:w-[502px] 2xl:w-[600px] 100:w-full text-neutral-700 text-5xl font-semibold leading-[54px]">To be a key player in the provision of top notch africa services in africa</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurVision;
