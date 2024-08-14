import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useRef } from "react";
import Newsletter from "./Newsletter";

function Terms() {
  const contact = useNavigate("/");
  const home = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header scrollToSection={scrollToSection} home={home} contact={contact} />

      <div className="flex justify-center flex-col pt-[106px] h-fit  items-center  w-full">
        <section className="w-full bg-purple-700  py-[96px] h-fit flex justify-center items-center ">
          <div className=" flex flex-col justify-center items-center gap-[24px] 100:w-[90%] md:w-[650px] lg:w-[850px]">
            <h2 className=" text-center text-white text-5xl font-semibold leading-10">Terms of Use</h2>
            <p className=" text-center text-slate-200 sm:text-xl 100:text-[18px] 100:leading-[25px] font-normal  sm:leading-loose">
              Welcome to High-Flyers Consulting Nigeria. By accessing and using our platform, you agree to comply with these Terms of Use. We offer facilities for conferences, seminars, and training, and we also provide planning services. Please
              review these terms carefully. If you have any questions, contact us at{" "}
              <a className=" hover:underline" href="mailto:highflyers2024.consulting@gmail.com">
                highflyers2024.consulting@gmail.com
              </a>
            </p>
          </div>
        </section>
        <section className="py-[96px] 100:w-[80%] flex-col 100:pl-[24px]  md:w-[720px] h-fit flex 100:justify-center 100:items-center">
          <ol className="w-full list-decimal flex-col justify-start items-start gap-[48px] inline-flex">
            <li className="self-stretch text-zinc-700 text-3xl font-semibold ">
              Acceptance of Terms
              <p className="self-stretch text-neutral-500 text-lg font-normal  mt-[24px]">
                By accessing and using High-Flyers Consulting Nigeria ("platform") you agree to be bound by these Terms of Use and all application laws and regulations. If you do not agree with any part of these terms, please do not use the platform.{" "}
              </p>
            </li>

            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              Description of Service
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                High-Flyers Consulting Nig. Ltd. provides facilities for conferences, seminars, events, board meetings and training sessions. It also plans and facilitates conferences and training programmes.{" "}
              </p>
            </li>
            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              Eligibility
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                To use our platform, you must be at least 18 years old and legally capable of entering into binding contracts. By using the platform, you represent and warrant that you meet these requirements.{" "}
              </p>
            </li>
            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              User Conduct
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                You agree not to:
                <br />
                Use the platform for any unlawful purpose. Misrepresent your identity or affiliation with any person or entity. Interfere with or disrupt the platform or servers or networks connected to the platform.{" "}
              </p>
            </li>
            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              Intellectual Property
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                All content, features and functionality on the platform, including text, graphics, logos and software, are the property of High-Flyers Consulting Nig. Ltd. and are protected by copyright, trademark and other intellectual property
                laws.{" "}
              </p>
            </li>
            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              Disclaimer of Warranties
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                The platform is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to implied warranties of merchantability and fitness for a particular purpose.{" "}
              </p>
            </li>
            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              Intellectual Property
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                All content, features, and functionality on the Platform, including text, graphics, logos, and software, are the property of Greenquarters Ltd. or its licensors and are protected by copyright, trademark, and other intellectual
                property laws.{" "}
              </p>
            </li>
            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              Indemnification
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                You agree to indemnify and hold harmless High-Flyers Consulting Nig. Ltd. officers, directors, employees and agents from and against any claims, liabilities, damages, losses and expenses arising out of or in any way connected with
                your use of the platform.{" "}
              </p>
            </li>
            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              Governing law
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                These Terms of Use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria without regard to its conflict of law principles.{" "}
              </p>
            </li>

            <li className="self-stretch text-neutral-700 text-3xl font-semibold  ">
              Changes to Terms
              <p className="self-stretch text-gray-500 text-lg font-normal mt-[24px] ">
                High-Flyers Consulting Nig. Ltd. reserves the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on the platform. Your continued use of the platform after the posting of changes
                constitutes your acceptance of such changes.
              </p>
            </li>
          </ol>
        </section>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Terms;
