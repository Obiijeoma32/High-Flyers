import { useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";

function Services() {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8C2 9.34178 10.1062 13 12 13C13.8938 13 22 9.34178 22 8C22 6.65822 13.8938 3 12 3C10.1062 3 2 6.65822 2 8Z" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M6 11L6.24545 16.6299C6.25036 16.7426 6.26256 16.8555 6.29528 16.9635C6.39639 17.2973 6.58275 17.6006 6.86707 17.8044C9.09162 19.3985 14.9084 19.3985 17.1329 17.8044C17.4173 17.6006 17.6036 17.2973 17.7047 16.9635C17.7374 16.8555 17.7496 16.7426 17.7546 16.6299L18 11"
            stroke="#9C19FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.25 9.5C21.25 9.08579 20.9142 8.75 20.5 8.75C20.0858 8.75 19.75 9.08579 19.75 9.5H21.25ZM19.0714 19.7634L19.8011 19.9368L19.0714 19.7634ZM21.9286 19.7634L22.6583 19.5901L21.9286 19.7634ZM19.75 9.5V16.5072H21.25V9.5H19.75ZM19.8011 19.9368C19.946 19.327 20.1952 18.7697 20.4619 18.2478C20.7062 17.7696 21.0263 17.2164 21.1976 16.7827L19.8024 16.2317C19.6655 16.5784 19.4364 16.9581 19.1261 17.5653C18.8382 18.1288 18.5272 18.8095 18.3417 19.5901L19.8011 19.9368ZM22.6583 19.5901C22.4728 18.8095 22.1618 18.1288 21.8739 17.5653C21.5636 16.9581 21.3345 16.5784 21.1976 16.2317L19.8024 16.7827C19.9737 17.2164 20.2938 17.7696 20.5381 18.2478C20.8048 18.7697 21.054 19.327 21.1989 19.9368L22.6583 19.5901ZM20.8154 20.25H20.1846V21.75H20.8154V20.25ZM18.3417 19.5901C18.2184 20.1094 18.1443 20.7964 18.6335 21.287C18.8626 21.5168 19.1451 21.6247 19.3939 21.6799C19.6419 21.7349 19.914 21.75 20.1846 21.75V20.25C19.9563 20.25 19.8101 20.2358 19.7186 20.2155C19.628 20.1954 19.6499 20.1821 19.6957 20.228C19.7534 20.2858 19.7542 20.3398 19.7514 20.3095C19.747 20.2626 19.7504 20.1504 19.8011 19.9368L18.3417 19.5901ZM21.1989 19.9368C21.2496 20.1504 21.253 20.2626 21.2486 20.3095C21.2458 20.3398 21.2466 20.2858 21.3043 20.228C21.3501 20.1821 21.372 20.1954 21.2814 20.2155C21.1899 20.2358 21.0437 20.25 20.8154 20.25V21.75C21.086 21.75 21.3581 21.7349 21.6061 21.6799C21.8549 21.6247 22.1374 21.5168 22.3665 21.287C22.8557 20.7964 22.7816 20.1094 22.6583 19.5901L21.1989 19.9368Z"
            fill="#9C19FF"
          />
        </svg>
      ),
      title: "Educational Consulting",
      description: "Expert guidance and support for students navigating academic challenges, from subject selection to career planning.",
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2V4M6 2V4" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M21.4997 11.5C21.4957 7.63364 21.4267 5.62803 20.2479 4.35364C18.9958 3 16.9805 3 12.95 3H11.05C7.01949 3 5.00424 3 3.75212 4.35364C2.5 5.70728 2.5 7.88594 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C4.95133 21.9428 6.80467 21.9976 10.5 21.9999"
            stroke="#9C19FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M3 8H21" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M17.5 20.7143V22M17.5 20.7143C16.3432 20.7143 15.3241 20.1461 14.7263 19.2833M17.5 20.7143C18.6568 20.7143 19.6759 20.1461 20.2737 19.2833M17.5 14.2857C18.6569 14.2857 19.6761 14.854 20.2738 15.7169M17.5 14.2857C16.3431 14.2857 15.3239 14.854 14.7262 15.7169M17.5 14.2857V13M21.5 14.9286L20.2738 15.7169M13.5004 20.0714L14.7263 19.2833M13.5 14.9286L14.7262 15.7169M21.4996 20.0714L20.2737 19.2833M20.2738 15.7169C20.6273 16.2271 20.8333 16.8403 20.8333 17.5C20.8333 18.1597 20.6272 18.773 20.2737 19.2833M14.7262 15.7169C14.3727 16.2271 14.1667 16.8403 14.1667 17.5C14.1667 18.1597 14.3728 18.773 14.7263 19.2833"
            stroke="#9C19FF"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
      title: "Event Management",
      description: "Comprehensive event planning and execution services for conferences, seminars, workshops, and corporate gatherings.",
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.0195 8C9.32545 7.06743 8.14285 5.76203 8.60385 4.47631C8.91057 3.62086 11.0067 2 12 2C12.9933 2 15.0894 3.62086 15.3962 4.47631C15.8572 5.76203 14.6745 7.06743 13.9805 8"
            stroke="#9C19FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M8 8L16 8" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 13L16 13" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M7.5 18L16.5 18" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M9.5 8L7 22M14.5 8L17 22" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M5 22L19 22" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19 7.5L21 7M19 10.5L21 11" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M5 7.5L3 7M5 10.5L3 11" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      ),
      title: "Facility Rental",
      description: "Access to state-of-the-art facilities for hosting a wide range of events, including meetings, interviews, and exhibitions.",
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <circle cx="12" cy="3.5" r="1.5" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <circle cx="12" cy="20.5" r="1.5" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <circle cx="3.5" cy="7.5" r="1.5" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <circle cx="20.5" cy="7.5" r="1.5" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <circle cx="20.5" cy="16.5" r="1.5" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <circle cx="3.5" cy="16.5" r="1.5" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z" stroke="#9C19FF" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
      ),
      title: "Training Program",
      description: "Tailored training sessions and workshops designed to enhance professional skills and personal development and capacity building.",
    },
    {
      id: 5,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z"
            stroke="#9C19FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="#9C19FF" stroke-width="1.5" />
          <path d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      ),
      title: "Socio-Educational Initiatives",
      description: "Engaging programs and initiatives aimed at promoting social awareness and educational empowerment in the community.",
    },
    {
      id: 6,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="#9C19FF" stroke-width="1.5" stroke-linecap="round" />
          <path
            d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z"
            stroke="#9C19FF"
            stroke-width="1.5"
          />
          <path
            d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19"
            stroke="#9C19FF"
            stroke-width="1.5"
          />
          <path
            d="M12.5521 6.5L11.0305 8.19458C10.8214 8.42743 10.9486 8.79939 11.2566 8.85537L12.7453 9.12605C13.0732 9.18567 13.1886 9.59658 12.9398 9.81826L11.0521 11.5"
            stroke="#9C19FF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Consultation Services",
      description: "Personalized consultations with our team of experts to address specific educational or organizational needs.",
    },
  ];
  const contact = useRef(null);
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
      <div className=" flex 100:pt-[100px] lg:pt-[180px] flex-col items-center py-[96px] gap-[64px] h-fit w-full justify-center">
        <section className="justify-center items-center 100:w-[95%] md:w-[80%] lg:w-[1008px] flex flex-col gap-[20px] ">
          <div className=" justify-center items-center 100:w-[100%] md:w-[80%] flex flex-col gap-[12px] ">
            <h4 className=" text-center text-purple-600 text-base font-semibold  leading-normal">Our Services</h4>
            <h2 className=" text-center tracking-[-2px] space-y-[48px] text-neutral-700 100:text-3xl md:text-5xl font-semibold  leading-[60px]">Empowering Excellence: Our Comprehensive Services</h2>
          </div>
          <p className=" 100:w-[100%] md:w-[75%] text-center text-neutral-500 100:text-lg md:text-xl font-normal leading-loose">Elevate your endeavors with our diverse array of expert solutions tailored to your needs and aspirations.</p>
        </section>
        <div className=" flex justify-center items-center 100:w-[95%] md:w-[80%] lg:w-full">
          <section className=" px-[32px] w-full  flex flex-col  justify-center items-center ">
            <div className=" 100:w-full 1xl:w-[1280px] flex gap-[32px] justify-center items-center flex-wrap">
              {features.map((item, id) => (
                <div key={id} className=" mt-[64px]  flex flex-col justify-center items-center gap-[20px]">
                  <div className=" border-solid border-[8px] flex justify-center items-center w-[48px] h-[48px] rounded-full bg-[#F4E5FF] border-[#FAF4FF] ">{item.icon}</div>
                  <div className=" flex flex-col justify-center items-center gap-[8px]">
                    <h3 className="text-center text-neutral-900 text-xl font-normal  leading-loose">{item.title}</h3>
                    <p className="text-center 100:w-full phone:w-[384px] text-neutral-400 text-[16px] font-normal  leading-loose">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Newsletter />
      <section ref={contact}>
        <Footer />
      </section>
    </>
  );
}

export default Services;
