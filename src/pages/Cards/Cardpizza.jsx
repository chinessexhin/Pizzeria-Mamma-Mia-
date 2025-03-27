import React from "react";

const Cardpizza = ({ img, title, text, price, button, button2, className, style }) => {
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  }).format(price);

  return (
    <div className={`card ${className}`} style={style}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-price">{formattedPrice}</p>
        <button className="btn btn-primary">{button}</button>
        <button className="btn btn-success ms-2">{button2}</button>
      </div>
    </div>
  );
};

export default Cardpizza;
