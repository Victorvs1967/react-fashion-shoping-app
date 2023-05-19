import './favorite.css';
import Card from './../card/Card';
import promo01 from './../../img/images/promo-01.jpg';
import promo02 from './../../img/images/promo-02.jpg';

const Favorite = () => {
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__title section__title">Young’s Favourite</div>
        <div className="favorite__cards">
          <Card title='Trending on instagram' img={ promo01 } />
          <Card title='All Under $40' img={ promo02 } />
        </div>
      </div>
    </section>
  );
}

export default Favorite;