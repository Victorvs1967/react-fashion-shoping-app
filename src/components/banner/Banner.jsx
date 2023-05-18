import './banner.css';
import bannerImg from './../../img/images/promo-img.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <div className="banner__img">
          <img src={ bannerImg } alt="banner" />
        </div>
        <div className="banner__text">
          <div className="banner__title">
            <span className='banner__hightlite'>PAYDAY</span>
            <span>SALE NOW</span>
          </div>
          <div className="banner__subtitle">
            <span>Spend minimal $100 get 30% off</span>
            <span>voucher code for your next purchase</span>
            <span className='banner__bold'>1 June - 10 June 2021</span>
            <span>*Terms & Conditions apply</span>
          </div>
          <a href='#!' className="banner__btn btn">SHOP NOW</a>
        </div>
      </div>
    </section>
  );
}

export default Banner;