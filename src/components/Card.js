// import star from "";

function Card({img, rating, reviewCount, country, title, price}) {
  return (
    <div className="card">
      <img className="card-image" src={`../img/${img}`} alt="img" />
      <div className="stars">
        <img className="star" src="../img/star.svg" alt="star" />
        <p>
          {rating} <span className="span-mute">({reviewCount}) {country}</span>{" "}
        </p>
      </div>
      <p className="card-title">{title}</p>
      <p><span className="span-bold">From ${price}</span> / person</p>
    </div>
  );
}

export default Card;
