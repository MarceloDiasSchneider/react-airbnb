import Hero from "./Hero";
import Card from "./Card";
import data from "../data";

function Main() {
  const cards = data.map(({ id, coverImg, stats, country, title, price, openSpots, location }) => (
    <Card
      key={id}
      img={coverImg}
      rating={stats.rating}
      reviewCount={6}
      country={country}
      title={title}
      price={price}
      openSpots={openSpots}
      location={location}
    />
  ));
  return (
    <main>
      <Hero />
      <section className="cards-list">{cards}</section>
    </main>
  );
}

export default Main;
