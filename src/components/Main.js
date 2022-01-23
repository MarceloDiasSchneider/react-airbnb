import Hero from "./Hero";
import Card from "./Card";
import data from "../data";

function Main() {
  const cards = data.map((data, key) => (
    <Card
      key={key}
      data={data}
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
