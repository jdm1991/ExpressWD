import NavMenu from "../components/navmenu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import Welcome from "../components/welcome";
import Header from "../components/header";
import About from "../components/about";
import Services from "../components/services";
import QandAnswers from "../components/qandanswers";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Pricing from "../components/pricing";
import Head from "next/head";
import Hero from "../components/contact";

import "@/app/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>ExpressWD</title>
      </Head>
      <Header />
      <Welcome />
      <Testimonials />
      <Pricing />
      <NavMenu />
      <QandAnswers />
      <Hero />
      <Footer />
    </>
  );
}
