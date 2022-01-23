// import star from "";

function Card({ img, rating, reviewCount, country, title, price, openSpots, location }) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-image" src={`../img/${img}`} alt="img" />
      <div className="stars">
        <img className="star" src="../img/star.svg" alt="star" />
        <p>
          {rating}{" "}
          <span className="span-mute">
            ({reviewCount}) {country}
          </span>{" "}
        </p>
      </div>
      <p className="card-title">{title}</p>
      <p>
        <span className="span-bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
