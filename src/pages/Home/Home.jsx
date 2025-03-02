import Header from "../../components/Header/Header";
import Cardpizza from "../Cards/Cardpizza";

const Home = () => {
  return (
    <>
      <Header />

      <main className="Cards d-flex p-5">
        <Cardpizza 
          className="card" 
          style={{ width: "14rem" }}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          title="Pizza Napolitana"
          text="Ingredientes: 🍕 mozzarella, tomates, jamón, óregano"
          price="Precio: $5.950"
          button= "Ver más"
          button2="Añadir 🛒"
        />

        <Cardpizza 
          className="card" 
          style={{ width: "14rem" }}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          title="Pizza Española"
          text="Ingredientes: 🍕 mozzarella, gorgonzola, parmesano, provolone"
          price="Precio: $6.950"
          button= "Ver más"
          button2="Añadir 🛒"
        />

        <Cardpizza 
          className="card" 
          style={{ width: "14rem" }}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          title="Pizza Pepperoni"
          text="Ingredientes: 🍕 mozzarella, peperonni, óregano"
          price="Precio: $6.950"
          button= "Ver más"
          button2="Añadir 🛒"
        />
      </main>
    </>
  )
}

export default Home;
