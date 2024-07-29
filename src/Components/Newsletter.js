function Newsletter() {
  return (
    <>
      <div className="w-full h-fit py-24 bg-purple-800  justify-center items-center  flex">
        <section className=" 100:w-[90%] md:w-[85%] 100:flex-col 100:gap-[20px] xl:flex-row flex justify-between items-start">
          <div className=" w-full flex flex-col gap-[20px] items-start">
            <h3 className=" text-white text-4xl font-semibold leading-10">Sign up for our newsletter</h3>
            <p className=" text-purple-200 text-xl font-normal ">Be the first to know about releases and industry news and insights.</p>
          </div>
          <div className="flex 100:w-full 1xl:w-[494px] 100:flex-col lg:flex-row gap-[16px] items-start">
            <section className=" w-full gap-[8px] flex items-start flex-col">
              <input className=" outline-purple-700 100:w-full phone:w-96 h-12 text-gray-500 text-base font-normal pl-4 pr-3.5 py-3 bg-white rounded-lg shadow border border-gray-300   " type="email" placeholder="Enter your email" />
            </section>
            <button className="text-white text-base font-medium leading-normal w-28 h-12 px-5 py-3 bg-purple-700 rounded-lg shadow border border-purple-700 justify-center items-center inline-flex">Subscribe</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Newsletter;
