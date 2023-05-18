import './promo.css';
import promoImg from './../../img/images/header-img.jpg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <h1 className="promo__text-title">
              <span className="promo__text-bgwhite">LET’S</span>
              EXPLORE
              <span className="promo__text-bgyellow">UNIQUE</span>
              CLOTHES.
            </h1>
            <h3 className="promo__text-subtitle">
              Live for Influential and Innovative fashion!
            </h3>
            <div className="promo__text-btn_wrapper">
              <a href='#!' className="promo__text-btn btn">Shop Now</a>
            </div>
          </div>
          <div className="promo__img">
            <img src={ promoImg } alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;