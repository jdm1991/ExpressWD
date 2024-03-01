import "../styles/header.css";
import "../styles/media.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Home, HardDrive, List, Folder, DollarSign, Mail } from 'react-feather';

export default function Header() {
 
  return (
    <>
     <Head>
        <title>Next.js Page with Tailwind CSS Navigation Bar</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet" />
      </Head>
        <div className="bg-[#255036] text-right bg-opacity-90 text-white px-8 sticky top-0 left-0 right-0 shadow-lg flex items-center justify-between h-40">
          <div className="text-lg font-bold">
          <Image
              src="/Images/logo.svg"
              alt="Pic2"
              width={0}
              height={0}
              className="logo-image"
            />
          </div>
          <nav className="flex items-center  h-full">
            <ul className="flex">
              <li className="group">
                <Link
                  href="/"
                  className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                >
                  <Home/>
                  <span>Home</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/about"
                  className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                >
                  <HardDrive/>
                  <span>About</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/services"
                  className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                >
                  <List/>
                  <span>Services</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/projects"
                  className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                >
                  <Folder/>
                  <span>Projects</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/prices"
                  className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                >
                  <DollarSign />
                  <span>Prices</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/contact"
                  className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                >
                  <Mail/>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Main content of your page here */}
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <Image
              src="/Images/logo.svg"
              alt="Pic2"
              width={0}
              height={0}
              className="logo-image"
            />
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
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Prices</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
