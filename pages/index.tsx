import NavMenu from "../components/navmenu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import Welcome from "../components/welcome";
import Header from "../components/header";
import QandAnswers from "../components/qandanswers";
import Footer from "../components/footer";

import "@/app/globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <NavMenu />
      <Welcome />
      <QandAnswers />
      <Footer />
    </>
  );
}
