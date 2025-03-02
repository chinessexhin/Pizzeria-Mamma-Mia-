const Card = ({ img, title, text, button, price, button2 }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">{price}</p>
        <p className="card-text">
        <div className="button-container">
          <button type="button" className="btn btn-dark">{button}</button>
          <button type="button" className="btn btn-dark">{button2}</button>
        </div>
        </p>
      </div>
    </div>
  )
}

export default Card