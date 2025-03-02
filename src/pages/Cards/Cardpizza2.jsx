const Cardpizza2 = ( {pizza} ) => {
    const {name, img, price, ingredients, desc} = pizza

    return (
      <div className="card h-100">
        <img 
          src= {img}
          className= "card-img-top"
          alt= {name}
          style={{height: "200px", objectFit: "cover"}}
          />

       <div className="card-body">
          <h5 className="card-title text-capitalize"></h5>

          <h6> Ingredientes</h6>
          <ul>
              {ingredients.map((ingredient, index) => (
               <li key={index}>{ingredient} </li>
               ))}
          </ul>

          <p className="card-text">{desc}</p>
       </div>

       <div className="card-footer d-flex justify-content-between align-items-center">
          <span className="fw-bold">{price}</span>
          <button className="btn btn-primary">Añadir al carro</button>
       </div>
      </div>
    )
  }

export default Cardpizza2;