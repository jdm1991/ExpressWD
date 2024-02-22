import "../styles/welcome.css";
import "../styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function Welcome() {
  return (
    <>
      <div className="bg-[url('/img/hero-pattern.svg')]"></div>
      <Image
        src="/Images/web1.jpg"
        alt="Pic2"
        width={1500}
        height={1500}
        className="design-image"
      />
      <div className="twelve">
        <h2 className="h2-welcome">Need a website? We design and develop</h2>
        <hr className="hr-welcome"></hr>
        <p className="what-we-do">
          With 3 years of expertise, Express Web Designs wont let you down. We
          pride ourselves on creating high-quality, cost-effective websites,
          having collaborated with many satisfied clients.<br></br> We have
          designed websites for a huge range of clients from small local
          businesses, to blue chip companies, e-commerce websites and charity
          organisations.
        </p>
      </div>
      <div className="thirteen">
        <h3 className="clients">What our clients say about us!</h3>
        <div className="carousel-container">
        <Carousel >
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
