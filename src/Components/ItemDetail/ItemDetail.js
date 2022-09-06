import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Contador from '../ItemCount/ItemCount';

function ItemDetail({ producto }) {
  const { addToCart } = useContext(CartContext);
  const [cant, setCant] = useState(0);

  const onAdd = (quantity) => {
    setCant(quantity);
    addToCart(producto, quantity);
  };

  return (
    <div className="Card">
      <h4>{producto.nombre}</h4>
      <p>{producto.detalle}</p>
      <img src={`../${producto.img}`} alt={producto.nombre} width="400px" />
      <p>$ {producto.precio}</p>

      {cant === 0 ? (
        <Contador stock={producto.stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart">Ir al Carrito</Link>
      )}
    </div>
  );
}

export default ItemDetail;
