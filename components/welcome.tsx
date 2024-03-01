import "../styles/welcome.css";
import "../styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaLongArrowAltDown } from "react-icons/fa";
import testimonials from "../components/testimonials";
import Testimonials from "../components/testimonials";

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <>
      <div className="bg-[url('/img/hero-pattern.svg')]"></div>
      <div className="welcome-top-section">
        <Image
          src="/Images/web1.jpg"
          alt="Pic2"
          width={1500}
          height={1500}
          className="design-image"
        />
        <h1 className="h1-welcome">
          We Create <br /> Websites That <br /> Perform <br /> and Impress.
        </h1>
        <p className="p-welcome">
          Revolutionize your online presence with our modern web design
          services, where cutting-edge aesthetics meet unparalleled user
          experience. Our commitment to customization and performance ensures
          your website stands out, perfectly tailored to your unique vision and
          goals.
        </p>
        <button className="welcome-button">Let's talk</button>
        <div className="icons absolute top-[55%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z--1 flex flex-col items-start gap-20 text-4xl">
          <div className="icon-group flex items-center gap-4 relative group">
            <div className="icon-arrow flex flex-col items-center">
              <FaPenFancy className="text-4xl text-current" />
              <div className="small-arrow absolute top-16">
                <FaLongArrowAltDown className="text-5xl text-yellow-400"/>
              </div>
            </div>
            <p className="text-xl text-white">Sign Up</p>
          </div>

          <div className="icon-group flex items-center gap-4 relative group">
            <div className="icon-arrow flex flex-col items-center">
              <FaSearch className="text-4xl text-current" />
              <div className="small-arrow absolute top-16">
                <FaLongArrowAltDown className="text-5xl text-yellow-400"/>
              </div>
            </div>
            <p className="text-xl text-white">Research</p>
          </div>

          <div className="icon-group flex items-center gap-4 relative group">
            <div className="icon-arrow flex flex-col items-center">
              <IoCreateOutline className="text-4xl text-current" />
              <div className="small-arrow absolute top-16">
                <FaLongArrowAltDown className="text-5xl text-yellow-400"/>
              </div>
            </div>
            <p className="text-xl text-white">Design</p>
          </div>

          <div className="icon-group flex items-center gap-4 relative group">
            <div className="icon-arrow flex flex-col items-center">
              <IoBuildOutline className="text-4xl text-current" />
              <div className="small-arrow absolute top-16">
                <FaLongArrowAltDown className="text-5xl text-yellow-400"/>
              </div>
            </div>
            <p className="text-xl text-white">Build</p>
          </div>

          <div className="icon-group flex items-center gap-4 relative group">
            <div className="icon-arrow flex flex-col items-center">
              <MdOutlineRocketLaunch className="text-4xl text-current" />
              <div className="small-arrow absolute top-16">
                <FaLongArrowAltDown className="text-5xl text-yellow-400"/>
              </div>
            </div>
            <p className="text-xl text-white">Launch</p>
          </div>

          <div className="icon-group flex items-center gap-4 relative group">
            <div className="icon-arrow flex flex-col items-center">
              <BiSupport className="text-4xl text-current" />
            </div>
            <p className="text-xl text-white">Support</p>
          </div>
        </div>
      </div>
      <section className="text-center flex justify-center items-center">
        <div className="relative bg-[#255036] text-[#ffcf40] h-[50vh] mb-8 w-full flex flex-col justify-center items-center">
          <h2 className="py-4 text-5xl font-semibold text-white">
            Need a website?
            <span className="text-[#ffcf40] pl-4">We design and develop</span>
          </h2>
          <hr className="w-1/3 border-t border-white" />
          <p className="w-3/5 px-4 py-4 mx-auto my-8 text-center text-2xl font-light border border-white rounded-lg text-black bg-white shadow-lg">
            With 3 years of expertise, Express Web Designs won't let you down.
            We pride ourselves on creating high-quality, cost-effective
            websites, having collaborated with many satisfied clients.<br></br>
            We have designed websites for a huge range of clients from small
            local businesses, to blue chip companies, e-commerce websites and
            charity organisations.
          </p>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-[#ffcf40] text-6xl">
            <FaArrowDown />
          </div>
        </div>
      </section>

      <div
        className={`working-with-us ${isVisible ? "animate-slide-up" : ""}`}
        ref={sectionRef}
      >
        <div className="working-with-us h-[70vh]">
          <div className="h2-container grid justify-center">
            <h2 className="h2-working inline-block justify-center py-0 px-0 mb-8 text-5xl font-semibold text-[#255036]">
              Working with{" "}
              <p className="working-2 inline-block text-[#ffcf40]">EWD</p>
            </h2>
          </div>
          <div className="p-working-container grid grid-cols-[2fr_1fr] grid-rows-[2fr_1fr] w-3/5 mx-auto justify-center gap-4 font-light text-lg h-[41vh]">
            <p className="p-working1 w-3/5">
              Whether you’re starting a new business, thinking about a redesign
              or just need some help fixing your existing website, our team have
              the knowledge, expertise and experience to deliver a creative,
              engaging and cost-effective online solution that works.
            </p>
            <p className="p-working2">
              We care about the performance of your business and will give
              honest advice on how best to spend your money. We know which
              websites work well and which don’t, and we will plan a strategy to
              help you achieve your goals as soon as possible.
            </p>
            <p className="p-working3">
              Once your website is live, our support team are on-hand to ensure
              your website continues to perform. We offer monthly maintenance
              and support packages and are always at the end of the phone to
              keep your website up to date.
            </p>
            <p className="p-working4">
              Ready to get started or want to know more? Give us a call on
              *********** or send us an email to begin your journey with Express
              Web Design.
            </p>
          </div>
          <button className="quote grid bg-[#255036] rounded-full text-[#ffcf40] font-semibold py-3 text-xl justify-center mx-auto mt-12">
            GET YOUR FREE QUOTE
          </button>
        </div>
      </div>
    </>
  );
}
