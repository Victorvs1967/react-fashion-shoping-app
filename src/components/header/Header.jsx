import logo from '../../img/icons/logo.svg'
import './header.css';

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={ logo } alt="logo" />
            <span>Fasion</span>
          </div>
          <nav className="header__nav">
            <ul className='header__menu'>
              <li className='header__menu-item'><a href="#!">CATALOGUE</a></li>
              <li className='header__menu-item'><a href="#!">FASHION</a></li>
              <li className='header__menu-item'><a href="#!">FAVOURITE</a></li>
              <li className='header__menu-item'><a href="#!">LIFESTYLE</a></li>
              <li className='header__menu-item'><a href="#!" className='header__nav-btn'>SIGN UP</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;