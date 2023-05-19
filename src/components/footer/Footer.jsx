import './footer.css';
import fb from './../../img/socials/fb.svg';
import inst from './../../img/socials/inst.svg';
import tw from './../../img/socials/tw.svg';
import lin from './../../img/socials/in.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__content">
          <h2 className="footer__logo">FASHION</h2>
          <p className="footer__text">Complete your style with awesome clothes from us.</p>
          <div className='footer__social'>
            <a href="#!" className="social__lin">
              <img src={ fb } alt="" className="social_icon" />
            </a>
            <a href="#!" className="social__lin">
              <img src={ inst } alt="" className="social_icon" />
            </a>
            <a href="#!" className="social__lin">
              <img src={ tw } alt="" className="social_icon" />
            </a>
            <a href="#!" className="social__lin">
              <img src={ lin } alt="" className="social_icon" />
            </a>
          </div>
        </div>
        <nav className="footer__nav">
          <ul className="footer__menu">
            <li><span className="footer__menu-link">Company</span></li>
            <li><a href="#!" className="footer__menu-link">Quick Link</a></li>
            <li><a href="#!" className="footer__menu-link">Legal</a></li>
            <li><a href="#!" className="footer__menu-link">About</a></li>
            <li><a href="#!" className="footer__menu-link">Share Location</a></li>
          </ul>
          <ul className="footer__menu">
            <li><span className="footer__menu-link">Terms & conditions</span></li>
            <li><a href="#!" className="footer__menu-link">Contact us</a></li>
            <li><a href="#!" className="footer__menu-link">Orders Tracking</a></li>
            <li><a href="#!" className="footer__menu-link">Privacy Policy</a></li>
            <li><a href="#!" className="footer__menu-link">Support</a></li>
          </ul>
          <ul className="footer__menu">
            <li><span className="footer__menu-link">Size Guide</span></li>
            <li><a href="#!" className="footer__menu-link">Careers</a></li>
            <li><a href="#!" className="footer__menu-link">FAQs</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;