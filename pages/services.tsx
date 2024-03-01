import Head from "next/head";
import About from "@/components/about";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import "@/app/globals.css";

export default function Services() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <>
      <Header />
      <section>
        <section className="bg-white mb-10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h4 className="fadeIn text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj mt-10">
                "Crafting Digital Excellence, One Pixel at a Time.""
              </h4>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center ">
          <section className="text-center">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-[#ffcf40] bg-[#255036] hover:bg-[#255036] focus:ring-4 focus:outline-none focus:ring-[#ffcf40] font-medium rounded-xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-10 mx-auto text-9xl  "
              type="button"
              onClick={toggleDropdown}
            >
              Serives{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${
                isDropdownOpen ? "" : "hidden"
              } bg-[#ffcf40] divide-y divide-gray-100 rounded-lg shadow w-84 dark:bg-gray-700 text-center mx-auto `}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 "
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#255036] dark:hover:bg-gray-600 dark:hover:text-white text-3xl "
                  >
                    Web Site Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#255036] dark:hover:bg-gray-600 dark:hover:text-white text-3xl"
                  >
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#255036] dark:hover:bg-gray-600 dark:hover:text-white text-3xl"
                  >
                    Hosting & Email
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#255036] dark:hover:bg-gray-600 dark:hover:text-white text-3xl"
                  >
                    IT Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#255036] dark:hover:bg-gray-600 dark:hover:text-white text-3xl"
                  >
                    Content Writing
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
