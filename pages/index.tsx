import NavMenu from "../components/navmenu";
import Welcome from "../components/welcome";
import QandAnswers from "../components/qandanswers";


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
