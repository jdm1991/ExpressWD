import "../styles/welcome.css";
import "../styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

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
          Let's create <br></br> something great <br></br> together
        </h1>
        <p className="p-welcome">
          Choose our new modern web design company for cutting-edge designs that
          prioritize user experience.<br></br> With a focus on customization,
          performance, and ongoing support, we ensure your website stands out,
          engages visitors, and drives success in today's competitive digital
          world.
        </p>
        <button className="welcome-button">Let's talk</button>
      </div>
      <div className="twelve">
        <h2 className="h2-welcome">
          Need a website?
          <div className="h2-sub">We design and develop</div>
        </h2>
        <hr className="hr-welcome"></hr>
        <p className="what-we-do">
          With 3 years of expertise, Express Web Designs wont let you down. We
          pride ourselves on creating high-quality, cost-effective websites,
          having collaborated with many satisfied clients.<br></br> We have
          designed websites for a huge range of clients from small local
          businesses, to blue chip companies, e-commerce websites and charity
          organisations.
        </p>
        <div className="arrow">
        <FaArrowDown />
        </div>
      </div>
      <div
        className={`working-with-us ${isVisible ? "animate-slide-up" : ""}`}
        ref={sectionRef}
      >
        <div className="working-with-us">
          <div className="h2-container">
            <h2 className="h2-working">
              Working with <p className="working-2">EWD</p>
            </h2>
          </div>

          <div className="p-working-container">
            <p className="p-working1">
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
              keep your website up to date.{" "}
            </p>
            <p className="p-working4">
              Ready to get started or want to know more? Give us a call on
              *********** or send us an email to begin your journey with Express
              Web Design.
            </p>
          </div>
          <button className="quote">GET YOUR FREE QUOTE</button>
        </div>
      </div>
      <div className="thirteen">
        <h3 className="clients">What our clients say about us!</h3>
        <div className="carousel-container">
          <Carousel autoPlay interval={4000} infiniteLoop>
            <div>
              <Image
                src="/Images/web1.jpg"
                alt="Pic2"
                width={200}
                height={200}
                className="carousel"
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <Image
                src="/Images/web1.jpg"
                alt="Pic2"
                width={200}
                height={200}
                className="carousel"
              />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <Image
                src="/Images/web1.jpg"
                alt="Pic2"
                width={200}
                height={200}
                className="carousel"
              />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
