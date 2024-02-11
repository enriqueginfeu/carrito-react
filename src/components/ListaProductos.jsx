import PropTypes from 'prop-types'
import { data } from "../data"


export const ListaProductos = ({ productos, setProductos, contadorProductos, setContadorProductos, total, setTotal }) => {

  const agregarProductos = (producto) => {
    
    if(productos.find(item => item.id === producto.id)) {
      const prod = productos.map(item => item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item);

      setTotal(total + producto.precio * producto.cantidad);
      setContadorProductos(contadorProductos + producto.cantidad);
      return setProductos([...prod])
    }

    setTotal(total + producto.precio * producto.cantidad);
    setContadorProductos(contadorProductos + producto.cantidad);
    setProductos(prevProductos => [...prevProductos, producto]);
    
  };
    console.log(productos);

  return (
    <div className="container-items">
      {
        data.map(producto => (
          <div className="item" key={producto.id}>
              <figure>
					<img
						src={producto.img}
						alt={producto.nombre}
					/>
				</figure>
				<div className="info-product">
					<h2>{producto.nombre}</h2>
					<p className="price">$ {producto.precio}</p>
					<button className="btn-add-cart" onClick={ () => agregarProductos(producto) }>Añadir al carrito</button>
				</div>
          </div>
        ))
      }
    </div>
  )
}

ListaProductos.propTypes = {
  productos: PropTypes.array.isRequired,
  setProductos: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
  contadorProductos: PropTypes.number.isRequired,
  setContadorProductos: PropTypes.func.isRequired,
};
