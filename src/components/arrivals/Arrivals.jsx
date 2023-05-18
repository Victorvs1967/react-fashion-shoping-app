import Card from '../card/Card';
import './arrivals.css';

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <span className="section__title">new arrivals</span>
          </div>
        <div className="arrivals__cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Arrivals;