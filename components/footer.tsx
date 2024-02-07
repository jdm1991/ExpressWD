import "../styles/footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
       <footer>
      <div className="f-item-con">
        <div className="app-info">
          <span className="app-name">
            <span className="app-initial">E</span>xpress Web Designs
          </span>
          <p>
            We provide you with <strong>Well organised</strong> and{" "}
            <strong>SEO friendly</strong> Website Designs.
          </p>
        </div>
        <div className="useful-links">
          <div className="footer-title">Useful Links</div>
          <ul>
            <li><Link href="">Home</Link></li>
            <li><Link href="">About</Link></li>
            <li><Link href="">Services</Link></li>
            <li><Link href="">Portfolio</Link></li>
            <li><Link href="">Prices</Link></li>
            <li><Link href="">Contact</Link></li>
          </ul>
        </div>
        <div className="help-sec">
          <div className="footer-title">Help</div>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Report a Issue / Bug</li>
          </ul>
        </div>
        <div className="g-i-t">
          <div className="footer-title">Get in Touch</div>
          <form action="/" method="post" className="space-y-2">
            <input
              type="text"
              name="g-name"
              className="g-inp"
              id="g-name"
              placeholder="Name"
            />
            <input
              type="email"
              name="g-email"
              className="g-inp"
              id="g-email"
              placeholder="Email"
            />
            <textarea
              name="g-msg"
              className="g-inp h-40 resize-none"
              id="g-msg"
              placeholder="Message..."
            ></textarea>
            <button type="submit" className="f-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="cr-con">Copyright &copy; 2022 | Made by Express Web Designs</div>
    </footer>
    </>
  );
}
