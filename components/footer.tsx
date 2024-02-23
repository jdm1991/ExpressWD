import "../styles/footer.css";
import "../styles/footermedia.css";
import Link from "next/link";
import Image from 'next/image';


export default function Footer() {
  return (
    <>
      <footer>
        <div className="f-item-con">
          <div className="useful-links">
            <div className="footer-title">Menu</div>
            <ul>
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Services</Link>
              </li>
              <li>
                <Link href="">Portfolio</Link>
              </li>
              <li>
                <Link href="">Prices</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
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
          <div className="socials">
            <div className="socials-titles">Socials</div>
            <ul>
              <li>
                <Image
                  src="/Images/facebook.svg"
                  alt="Facebook"
                  width={50}
                  height={50}
                />
              </li>
              <li>
              <Image
                  src="/Images/twitter.svg"
                  alt="Facebook"
                  width={50}
                  height={50}
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png"
                  alt="Instagram"
                  width={50}
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/1024px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png"
                  alt="Youtube"
                  width={50}
                />
              </li>
            </ul>
          </div>
        </div>
        <h4 className="disclaimer-notice">Disclaimer Notice:</h4>
        <p className="disclaimer">
          The information provided by [Your Company Name] ('we,''us,' or 'our')
          on [Your Website URL] (the 'Site') is for general informational
          purposes only. All information on the Site is provided in good faith,
          however, we make no representation or warranty of any kind, express or
          implied, regarding the accuracy, adequacy, validity, reliability,
          availability, or completeness of any information on the Site. Under no
          circumstance shall we have any liability to you for any loss or damage
          of any kind incurred as a result of the use of the site or reliance on
          any information provided on the site. Your use of the site and your
          reliance on any information on the site is solely at your own risk.
          The Site may contain (or you may be sent through the Site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features in banners or other
          advertising. Such external links are not investigated, monitored, or
          checked for accuracy, adequacy, validity, reliability, availability,
          or completeness by us.
        </p>
        <div className="cr-con">
          Copyright &copy; 2022 | Made by Express Web Designs
        </div>
      </footer>
    </>
  );
}
