import NavMenu from "../components/navmenu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import Welcome from "../components/welcome";
import QandAnswers from "../components/qanda";


import "@/app/globals.css";

export default function Home() {
  return (
    <>
      <NavMenu />
      
      <Welcome />
      <QandAnswers />
    </>
  );
}
