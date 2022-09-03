
import './Body.css'
import Item from '../Item/Item';

function Body() {


  return (
    <section className = "cuerpo">
      <h3 className="nos"> Disfruta de nuestra pizzas </h3>
      <div className= "titulo-productos">
       <h3>Te Mostramos</h3>
        
      </div>
      <div>
        <Item/>
      
      </div>
      <div className = "medios-de-pago">
        <h4>Medios de pago</h4>
        <li>Mercado Pago</li>
        <li>Tarjetas</li>
      </div>
    </section>
  );
}
export default Body;