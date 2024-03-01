import "../app/globals.css";

export default function About() {
  return (
    <>
      <section className="bg-white mb-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="fadeIn text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj mt-10">
              ABOUT
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-[#255036] py-10 fadeIn transition-opacity duration-700 ease-in opacity-0 hover:opacity-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="fadeIn text-3xl font-extralight leading-tight text-[#ffcf40] sm:text-4xl xl:text-5xl font-pj mt-10 transition delay-150 duration-700 ease-in opacity-0 hover:opacity-100">
              "Setting the Standard for Professional Web Design"
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-white font-extralight">
          <p>
            Founded by a trio of passionate full-stack developers, our journey
            began with a shared vision: to carve our own path in the digital
            landscape. With expertise spanning the full spectrum of web
            development, we established our web design company to transform the
            online presence of businesses and individuals alike. Our mission is
            to craft modern and clean websites that not only meet the current
            standards but set new benchmarks in design, functionality, and user
            experience.
          </p>
          <p>
            At the heart of our approach is a commitment to innovation and
            excellence. We believe that a website is not just a digital address
            but a reflection of a brand's identity and values. That's why we
            work closely with our clients, understanding their vision and
            translating it into digital realities that speak volumes. Our
            creations are more than just websites; they are digital masterpieces
            designed to captivate, engage, and convert. Join us on this exciting
            journey, and let's build something extraordinary together.
          </p>
        </div>
      </section>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Make every step user-centric
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
              Lorem ipsum dolor sit amet, consectetur adipis elit
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Support
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 27H19V45H27V27Z"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 37H1V45H9V37Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45 17H37V45H45V17Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 17L15 7L23 15L37 1"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 1H37V10"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Sales
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <svg
                className="mx-auto"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41 1H1V41H41V1Z"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 7H7V20H18V7Z"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 26H7V35H18V26Z"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 7H24V35H35V7Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Onboarding
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
              <svg
                className="mx-auto"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                  fill="#D4D4D8"
                />
                <path
                  d="M9 9H33"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H33"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 25H13V31H29V25H41"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Product
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <svg
                className="mx-auto"
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Quality
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <svg
                className="mx-auto"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Result
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="animate-fadeIn  text-center bg-[#255036] text-[#ffcf40]">
        <div className="grid grid-cols-3 gap-4 sm:text-4xl xl:text-4xl">
          <div className="animate-slideInLeft">
            <h2 className="my-10 animate-bounce">Technology</h2>
            <p className="xl:text-xl xl:p-10 lg:text-lg lg:p-8 md:text-base md:p-6 sm:text-sm sm:p-4 text-white p-5 font-extralight">
              In my web design career, the adoption of a diverse and powerful
              stack of technologies has been pivotal in creating solid, dynamic,
              and visually appealing websites. HTML, CSS, and JavaScript form
              the foundational trinity of my work, enabling the creation of
              structured, stylish, and interactive web experiences. React, a
              powerful JavaScript library, has revolutionized the way I build
              user interfaces, offering a seamless and efficient way to develop
              single-page applications with dynamic, responsive designs. Prisma
              has streamlined my workflow with databases, acting as an ORM that
              simplifies database management, allowing me to seamlessly
              integrate complex functionalities with ease.<br></br>
              <br></br> Tailwind CSS, a utility-first CSS framework, has
              empowered me to rapidly style websites without leaving the HTML,
              ensuring a faster design process and a more consistent UI.
              Express, coupled with Node.js, forms the backbone of my
              server-side development, enabling the creation of robust and
              scalable web applications that can handle complex backend logic
              effortlessly. MongoDB and PostgreSQL offer me the flexibility of
              choosing between a NoSQL or SQL database depending on the project
              requirements, ensuring optimal data storage and retrieval
              functionalities.<br></br>
              <br></br> Lastly, SASS has been a game-changer in writing more
              maintainable, modular CSS code, with its powerful features like
              variables, mixins, and nested rules that make styling complex
              applications more streamlined. Together, these technologies have
              not only enhanced my ability to deliver cutting-edge web solutions
              but have also ensured that the websites I develop are secure,
              responsive, and ahead of the curve, meeting the ever-evolving
              demands of the digital age.
            </p>
          </div>
          <div className="animate-slideInUp">
            <h2 className="my-10 animate-bounce">Design & Craft</h2>
            <p className="xl:text-xl xl:p-10 lg:text-lg lg:p-8 md:text-base md:p-6 sm:text-sm sm:p-4 text-white px-5 font-extralight">
              Our commitment to high-quality design and craftsmanship is evident
              in every project we undertake, driven by a meticulous approach
              that seamlessly blends aesthetics with functionality. This
              philosophy ensures that each website we craft not only captivates
              visually but also provides a flawless user experience. Central to
              our design ethos is the strategic selection of cutting-edge
              technologies and frameworks, chosen specifically for their ability
              to elevate the performance, accessibility, and scalability of our
              digital solutions. We pride ourselves on an unwavering attention
              to detail—every line of code is crafted with precision, and each
              design element is thoughtfully integrated to align with our
              clients' branding and strategic objectives.<br></br>
              <br></br> The foundation of our high-quality output lies in our
              architectural and stylistic choices. Utilizing React, we develop
              dynamic, responsive interfaces that actively engage users, while
              Tailwind CSS enables us to implement modular designs that ensure
              visual consistency across all devices. Our proficiency in SASS
              facilitates the creation of complex, elegant styles efficiently,
              making every page a testament to visual excellence. Beyond
              aesthetics, our adoption of Express and Node.js for backend
              development guarantees robust and reliable systems. Integrating
              Prisma with MongoDB or PostgreSQL, we devise database solutions
              that are not only effective but optimized for peak performance and
              security. This comprehensive strategy underlines our ability to
              deliver not just websites, but scalable digital ecosystems
              designed to evolve with our clients’ expanding needs, embodying
              our dedication to setting new standards in web design and
              development.
            </p>
          </div>
          <div className="animate-slideInRight">
            <h2 className="my-10 animate-bounce">On going support</h2>
            <p className="xl:text-xl xl:p-10 lg:text-lg lg:p-8 md:text-base md:p-6 sm:text-sm sm:p-4 text-white px-5 font-extralight">
              Our dedication to our clients extends far beyond the launch of
              their website. We understand that in the fast-paced digital world,
              ongoing support and maintenance are crucial to ensuring that a
              website continues to perform at its best. Therefore, we offer
              comprehensive support packages tailored to meet the unique needs
              of each client. Whether it's implementing new features, updating
              content, or ensuring that your site remains compatible with the
              latest web standards and technologies, our team is committed to
              providing the assistance you need. We believe in building
              long-term relationships with our clients, acting not just as
              service providers, but as trusted digital partners who are
              invested in your success.<br></br>
              <br></br> To this end, our support system is designed to be as
              responsive and efficient as possible. From minor tweaks and
              adjustments to major updates and overhauls, we are always just a
              call or an email away. Our proactive approach means we regularly
              monitor your site for any issues that may arise, ensuring that
              your digital presence is always secure, up-to-date, and optimized
              for search engines. Additionally, we offer training and resources
              to empower you and your team to manage your site's content
              confidently, providing you with the tools and knowledge to keep
              your site dynamic and engaging. With our ongoing support, you can
              rest assured that your website will continue to grow and adapt,
              driving your business forward in the ever-evolving digital
              landscape.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
