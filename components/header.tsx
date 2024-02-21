import "../styles/header.css";
import "../styles/media.css";
import Link from "next/link";
import Image from 'next/image';


export default function Header() {
  return (
    <>
      <div className="header-container">
      <Image
            src="/Images/logo.svg"
            alt="Pic2"
            width={0}
            height={0}
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
      <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="logo">
            <Image
            src="/Images/logo.svg"
            alt="Pic2"
            width={0}
            height={0}
            className="logo-image"
            />
          </div>
          <div className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Prices</a></li>
            <li><a href="#">Contact</a></li>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
