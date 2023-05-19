import './voucher.css';
import apple from './../../img/icons/app-store.png';
import google from './../../img/icons/google-play.png';
import voucher from './../../img/images/vouchers-img.png'

const Voucher = () => {
  return (
    <section className="voucher container">
      <div className="voucher__content">
        <h2 className="voucher__title">DOWNLOAD APP & GET THE VOUCHER!</h2>
        <p className="voucher__text">Get 30% off for first transaction using Rondovision mobile app for now.</p>
        <div className="voucher__wrapper">
          <a href="#!" className="voucher__link">
            <img src={ apple } alt="app store" className="link__img" />
          </a>
          <a href="#!" className="voucher__link">
            <img src={ google } alt="google play" className="link__img" />
          </a>
        </div>
      </div>
      <img src={ voucher } alt="voucher" className="voucher__img" />
    </section>
  );
}

export default Voucher;