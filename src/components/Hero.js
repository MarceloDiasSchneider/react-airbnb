import hero from "../img/hero.png";

function Section() {
  return (
    <section className="hero">
      <img src={hero} alt="Main" className="hero-image" />
      <h1 className="hero-title">Online Expiriences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Section;
