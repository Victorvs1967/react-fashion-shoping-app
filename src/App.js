import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Banner from './components/banner/Banner';
import Favorite from './components/favorite/Favorite';

const App = () => (
  <div className="App">
    <Header />
    <Promo />
    <Brands />
    <Arrivals />
    <Banner />
    <Favorite />
  </div>
);

export default App;
