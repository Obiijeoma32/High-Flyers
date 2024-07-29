import { Link } from "react-router-dom";
import logo2 from "./Images/Hf-Full.svg";

function Footer() {
  return (
    <>
      <div className=" h-fit w-full py-[64px] flex bg-neutral-100 justify-center  items-center">
        <div className=" flex flex-col justify-center 100:w-[90%] xl:w-[85%] gap-[64px] 100:items-start xl:items-center">
          <div className="flex 100:flex-wrap xl:flex-nowrap  xl:flex-row pl-[52px] 100:gap-[32px] justify-start w-full items-start">
            <section className=" 100:w-[220px] lg:w-full  flex-col gap-[16px] flex  items-start">
              <h3 className="self-stretch text-zinc-500 text-sm font-semibold  leading-tight">Company</h3>
              <div className=" w-full flex-col gap-[12px] flex  items-start">
                <Link onClick={() => window.scrollTo(0, 0)} to="/about">
                  <h4 className=" hover:text-purple-700 hover:underline text-neutral-500 text-base font-medium  leading-normal">About us</h4>
                </Link>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="                
"
                >
                  <h4 className=" hover:text-purple-700 hover:underline text-neutral-500 text-base font-medium  leading-normal">Services</h4>
                </Link>
                <h4 className="text-neutral-500 text-base font-medium  leading-normal">Contact</h4>
              </div>
            </section>
            <section className=" 100:w-[220px] lg:w-full  flex-col gap-[16px] flex  items-start">
              <h3 className="self-stretch text-zinc-500 text-sm font-semibold  leading-tight">Social</h3>
              <div className=" w-full flex-col gap-[12px] flex  items-start">
                <h4 className="text-neutral-500 text-base font-medium  leading-normal">Twitter</h4>
                <h4 className="text-neutral-500 text-base font-medium  leading-normal">LinkedIn</h4>
                <h4 className="text-neutral-500 text-base font-medium  leading-normal">Facebook</h4>
                <h4 className="text-neutral-500 text-base font-medium  leading-normal">Instagram</h4>
              </div>
            </section>{" "}
            <section className=" 100:w-[220px] lg:w-full  flex-col gap-[16px] flex  items-start">
              <h3 className="self-stretch text-zinc-500 text-sm font-semibold  leading-tight">Legal</h3>
              <div className=" w-full flex-col gap-[12px] flex  items-start">
                <h4 className="text-neutral-500 text-base font-medium  leading-normal">Terms</h4>
                <h4 className="text-neutral-500 text-base font-medium  leading-normal">Privacy</h4>
                <h4 className="text-neutral-500 text-base font-medium  leading-normal">Cookies</h4>
              </div>
            </section>{" "}
          </div>
          <div className="w-full h-fit p-8 bg-purple-100 rounded-2xl  justify-center items-center flex">
            <section className=" flex-col justify-center items-center gap-2 flex">
              <h4 className="text-center text-zinc-700 text-lg font-medium leading-7">Office Address</h4>
              <p className="md:w-[400px] 100:w-full text-center text-neutral-500 text-base font-normal leading-normal">No. 7 Abimbola Ayorinde Street, Opposite NISER, Off UI-Ojo Road, Orogun, Ibadan, Oyo State, Nigeria.</p>
            </section>
          </div>
          <div className="w-full h-fit pb-[40px]   flex-col justify-start items-start  inline-flex">
            <section className="100:gap-[16px] border-t-[1px] px-[32px] pt-8 border-t-gray-200 border-solid 100:flex-col lg:flex-row flex 100:justify-center xl:justify-between w-full items-center">
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                <img src={logo2} alt="High Flyers" />
              </Link>
              <p className=" text-zinc-500 text-center text-base font-normal leading-normal">© 2024 HighFlyers. All rights reserved.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
