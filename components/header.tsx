import "../styles/header.css";
import Link from "next/link";
import Image from 'next/image';


export default function Header() {
  return (
    <>
      <div className="header-container">
      <Image
            src="/Images/logo.svg"
            alt="Pic2"
            width={300}
            height={300}
            className="logo-image"
          />
        <div className="sub-container">
        <div className="home">
          <Link href="/">Home</Link>
        </div>
        <div className="about-container">
          <div className="about">
            <Link href="/about">About</Link>
          </div>
        </div>
        <a href="#services-a">
          <div className="services">Services</div>
        </a>
        <div className="portfolio">
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="prices">
          <Link href="/prices">Prices</Link>
        </div>
        <a href="#contact-a">
          <div className="contact">Contact</div>
        </a>
        </div>
      </div>
    </>
  );
}
