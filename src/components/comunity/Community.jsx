import './community.css';

const Community = () => {
  return (
    <section className="community">
      <h2 className="community__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
      <h3 className="community__subtitle">Type your email down below and be young wild generation</h3>
      <form className="community__form">
        <input type="email" placeholder='Add your email here' className="community__input" />
        <a href="#!" className="community__btn">SEND</a>
      </form>
    </section>
  );
}

export default Community;