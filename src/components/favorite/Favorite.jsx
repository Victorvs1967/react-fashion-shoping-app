import './favorite.css';
import Card from './../card/Card';

const Favorite = () => {
  return (
    <section className="favorite">
      <div className="container">
        <div className="favorite__title section__title">Young’s Favourite</div>
        <div className="favorite__cards">
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Favorite;