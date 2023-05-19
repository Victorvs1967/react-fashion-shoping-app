import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Banner from './components/banner/Banner';
import Favorite from './components/favorite/Favorite';
import Footer from './components/footer/Footer';
import Voucher from './components/voucher/Voucher';
import Community from './components/comunity/Community';

const App = () => (
  <div className="App">
    <Header />
    <Promo />
    <Brands />
    <Arrivals />
    <Banner />
    <Favorite />
    <Voucher />
    <Community />
    <Footer />
  </div>
);

export default App;
