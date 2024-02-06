import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div>Home</div>
        <div className="about-container">
          <a href="#about-a">
            <div>About</div>
          </a>
        </div>
        <a href="#services-a">
          <div>Services</div>
        </a>
        <div>Portfolio</div>
        <div>Prices</div>
        <a href="#contact-a">
          <div>Contact</div>
        </a>
      </div>
    </>
  );
}
