import { Link } from "react-router-dom";
import logo from "./Images/HF.svg";
import logo2 from "./Images/Hf-Full.svg";
import { useEffect, useState } from "react";

function Header({ scrollToSection, contact, home }) {
  const [activeNav, setActiveNav] = useState("home");
  const [hamburger, setHamburger] = useState(false);
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    function handleScrollBackground() {
      if (window.scrollY >= 20) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    }
    window.addEventListener("scroll", handleScrollBackground);

    return () => {
      window.removeEventListener("scroll", handleScrollBackground);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [
      { id: "home", ref: home },
      { id: "contact", ref: contact },
    ];

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [contact]);

  // const handleNavClick = (section, sectionRef) => {
  //   setActiveNav(section);
  //   scrollToSection(sectionRef);
  // };

  function handleScrollBackground() {
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }
  window.addEventListener("scroll", handleScrollBackground);

  const handleNavClick = (section, sectionRef) => {
    setActiveNav(section);
    scrollToSection(sectionRef);
  };

  return (
    <>
      <header className={` z-40  ${navBar ? "bg-white text-[#667085] bg-opacity-60" : "text-[#667085] bg-transparent"} h-[80px] flex-col 100:px-[50px] xl:px-[132px] fixed w-full z-20  flex justify-center`} scrollToSection={scrollToSection}>
        <div className=" 100:hidden xl:flex w-full justify-between items-center ">
          <div className=" flex gap-[40px] items-center ">
            <Link
              onClick={() => {
                handleNavClick("home", home);
                window.scrollTo(0, 0);
              }}
              to="/"
            >
              <img src={logo} alt="High Flyers" />
            </Link>
            <section className=" text-[16px]  font-medium flex gap-[32px] items-center">
              {" "}
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                <nav className={` ${activeNav === "home" ? " bg-[#FFFD86]  w-fit px-[8px] p-[4px] rounded-[8px] text-[#870AE6]" : ""} `}>Home</nav>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/about">
                <nav className={` ${activeNav === "aboutUs" ? " bg-[#FFFD86]  w-fit px-[8px] p-[4px] rounded-[8px] text-[#870AE6]" : ""} `}>About Us</nav>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/services">
                <nav className={` ${activeNav === "services" ? " bg-[#FFFD86]  w-fit px-[8px] p-[4px] rounded-[8px] text-[#870AE6]" : ""} flex items-center gap-[8px] `}>
                  Services{" "}
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.59143 7.5L10.5914 12.5L15.5914 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </nav>
              </Link>
              {/* <Link to="/quote"> */}
              <nav onClick={() => handleNavClick("contact", contact)} className={` ${activeNav === "contact" ? " bg-[#FFFD86]  w-fit px-[8px] p-[4px] rounded-[8px] text-[#870AE6]" : ""} flex items-center gap-[8px] cursor-pointer `}>
                Contact
              </nav>
              {/* </Link> */}
            </section>
          </div>
          <section className="flex gap-[8px] items-center">
            {" "}
            <nav className="text-[16px] hover:underline hover:text-[#870AE6] px-[10px]  font-medium">
              <a href="mailto:https://highflyers@gmail.com">Highflyers@gmail.com</a>
            </nav>
            <Link onClick={() => window.scrollTo(0, 0)} to="/quote">
              <div className="px-[18px] py-[10px] text-[16px] font-medium text-center w-fit h-fit bg-[#870AE6] text-[#fff] rounded-[8px]">Request a Quote</div>
            </Link>
          </section>
        </div>
        <div className=" xl:hidden 100:flex w-full justify-between items-center ">
          <Link onClick={() => window.scrollTo(0, 0)} to="/">
            <img src={logo} alt="High Flyers" />
          </Link>
          <svg onClick={() => setHamburger(!hamburger)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12L10 12" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 5L4 5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 19L4 19" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </header>
      {hamburger && (
        <>
          <div className={` transition-opacity   flex justify-between fixed left-0 top-0 z-50 bg-[#000] bg-opacity-20 backdrop-blur-lg w-full h-full`}>
            <section className={` ${hamburger ? "translate-x-0" : "-translate-x-full"} transition-transform transform  shadow-lg w-[250px] bg-[#fff] gap-[32px] px-[20px] flex flex-col items-start  py-[25px] text-[16px]   font-medium `}>
              {" "}
              <Link
                className="w-full"
                onClick={() => {
                  // handleNavClick("home", home);
                  setHamburger(false);
                  window.scrollTo(0, 0);
                }}
                to="/"
              >
                <img className="w-[70%]" src={logo2} alt="High Flyers" />
              </Link>
              <div className="flex px-[20px]  flex-col gap-[24px] items-start w-full ">
                <nav
                  className={`border-b border-b-gray-200 p-2  w-full ${activeNav === "home" ? " bg-[#FFFD86]  w-fit px-[8px] p-[4px] rounded-[8px] text-[#870AE6]" : ""} `}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    // handleNavClick("home", home);
                    setHamburger(false);
                  }}
                >
                  Home
                </nav>
                <nav
                  className={`border-b border-b-gray-200 p-2  w-full ${activeNav === "aboutUs" ? " bg-[#FFFD86]  w-fit px-[8px] p-[4px] rounded-[8px] text-[#870AE6]" : ""} `}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    // handleNavClick("aboutUs", aboutUs);
                    setHamburger(false);
                  }}
                >
                  About Us
                </nav>
                <nav
                  className={`border-b border-b-gray-200 p-2 flex justify-start gap-[8px] items-center w-full ${activeNav === "services" ? " bg-[#FFFD86]  w-fit px-[8px] p-[4px] rounded-[8px] text-[#870AE6]" : ""} `}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    // handleNavClick("services", services);
                    setHamburger(false);
                  }}
                >
                  Services{" "}
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.59143 7.5L10.5914 12.5L15.5914 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </nav>
                <nav
                  className={`border-b border-b-gray-200 p-2  w-full ${activeNav === "contact" ? " bg-[#FFFD86]  w-fit px-[8px] p-[4px] rounded-[8px] text-[#870AE6]" : ""} `}
                  onClick={() => {
                    handleNavClick("contact", contact);
                    window.scrollTo(0, 0);
                    setHamburger(false);
                  }}
                >
                  Contact
                </nav>
                <nav className="border-b border-b-gray-200 p-2  w-full text-[16px] hover:underline hover:text-[#870AE6]   font-medium">
                  <a href="mailto:https://highflyers@gmail.com">Highflyers@gmail.com</a>
                </nav>
                <Link to="/quote">
                  <div className="px-[18px] py-[10px] text-[16px] font-medium text-center w-fit h-fit bg-[#870AE6] text-[#fff] rounded-[8px]">Request a Quote</div>
                </Link>
              </div>
            </section>{" "}
            <div onClick={() => setHamburger(false)} className="w-12 h-12 top-[25px] justify-center flex  items-center right-[40px] relative bg-purple-100 rounded-3xl border-8 border-purple-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0005 5L5.00045 19M5.00045 5L19.0005 19" stroke="#9C19FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
