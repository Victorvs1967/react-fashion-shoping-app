import styles from './Card.module.css';

const Card = ({ title, img }) => {

  const { card, card__image, card__footer, card__title, card__action } = styles;

  return (
    <a href='#!' className={ card }>
      <img src={ img } alt="category" className={ card__image } />
      <div className={ card__footer }>
        <span className={ card__title }>{ title }</span>
        <span className={ card__action }>Explore Now!</span>
      </div>
    </a>
  );
}

export default Card;
