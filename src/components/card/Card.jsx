import styles from './Card.module.css';
import category from './../../img/categories/cat-01.jpg';

const Card = () => {

  const { card, card__image, card__footer, card__title, card__action } = styles;

  return (
    <a href='#!' className={ card }>
      <img src={ category } alt="category" className={ card__image } />
      <div className={ card__footer }>
        <span className={ card__title }>Hoodies & Sweetshirt</span>
        <span className={ card__action }>Explore Now!</span>
      </div>
    </a>
  );
}

export default Card;
