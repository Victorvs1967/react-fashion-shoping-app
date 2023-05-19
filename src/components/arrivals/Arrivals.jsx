import Card from '../card/Card';
import './arrivals.css';
import category01 from './../../img/categories/cat-01.jpg';
import category02 from './../../img/categories/cat-02.jpg';
import category03 from './../../img/categories/cat-03.jpg';

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <span className="section__title">new arrivals</span>
          </div>
        <div className="arrivals__cards">
          <Card title='Hoodies & Sweetshirt' img={ category01 } />
          <Card title='Coats & Parkas' img={ category02 } />
          <Card title='Tees & T-Shirt' img={ category03 } />
        </div>
      </div>
    </section>
  );
}

export default Arrivals;