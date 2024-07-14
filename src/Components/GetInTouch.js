import contact from "./Images/getInTouch.jpg";

function GetInTouch() {
  return (
    <>
      <div className="w-full h-fit pt-16 pb-24 bg-white flex-col justify-center items-center gap-16 inline-flex">
        <section className="md:w-[80%] 100:w-[95%] h-fit px-8 justify-center items-center gap-16 flex">
          <div className=" 100:full md:w-[600px] px-[32px] flex gap-[40px] flex-col items-center justify-center">
            <section className="w-full flex-col 100:justify-center 100:items-center 100:text-center xl:text-left xl:justify-start xl:items-start gap-5 flex">
              <h3 className=" text-neutral-700 text-4xl font-semibold  leading-10">Get in touch</h3>
              <p className=" md:whitespace-nowrap text-neutral-500 text-xl font-normal  leading-loose">Our friendly team would love to hear from you.</p>
            </section>
            <form className=" flex flex-col gap-[24px] w-full ">
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
                  Message
                </label>
                <textarea className="active:bg-[#F4E5FF] focus:bg-[#F4E5FF] outline-[#870AE6] h-[128px] placeholder:text-neutral-500 text-base font-normal  leading-normal w-full px-4 py-3 bg-white rounded-lg shadow border border-zinc-400 " />
              </section>
              <section className="gap-3 items-center flex  w-full">
                <input className=" focus:bg-[#F4E5FF] fill-[#F4E5FF] active:bg-[#F4E5FF] outline-[#870AE6] w-5 h-5 bg-white rounded-[6px] border border-zinc-400" type="checkbox" />
                <label className="text-neutral-500 text-base font-normal leading-normal">
                  You agree to our friendly <span className=" underline ">privacy policy</span>.
                </label>
              </section>
              <button className="px-7 w-full text-base font-medium text-center justify-center flex items-center  h-[48px] bg-[#870AE6] text-[#fff] rounded-[8px]">Send message</button>
            </form>
          </div>
          <img className=" 100:hidden xl:block w-[576px] h-full" src={contact} alt="Get In Touch" />
        </section>
      </div>
    </>
  );
}

export default GetInTouch;
