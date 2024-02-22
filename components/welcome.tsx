import "../styles/welcome.css";
import Image from "next/image";

export default function Welcome() {
  return (
    <>
    <div className="bg-[url('/img/hero-pattern.svg')]"></div>
    <div>Welcome!</div>
    <Image
            src="/Images/design.jpg"
            alt="Pic2"
            width={0}
            height={0}
            className="design-image"
          />
    </>
  )
   
}
