import React from "react";
import { useState, useEffect } from "react";
import "./NavBar.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import carrito from "../Carrito/carritoimg.png"
import Dark from "./Dark";
import { logOut, traerUsuarios } from "../../redux/actions";

function NavBar() {
  const [clicked, setClicked] = useState(false); //false

  const [cartQuantity, setcartQuantity] = useState(0);

  const numberCart = useSelector((state) => state.numberCart);


  useEffect(() => {
    dispatch(traerUsuarios())
    calculateCartQuantity();
  }, [numberCart]);

  
  const cart = useSelector((state) => state.cart);
  const LS = localStorage.getItem('login');
  const modo = localStorage.getItem('modo');
  const logged = JSON.parse(LS)
  const rango = logged?.rango
  
  console.log(logged)
  console.log(rango)
  
  const history = useHistory()
  const dispatch = useDispatch()

  // console.log(logged)

////carrito
const calculateCartQuantity = () => {
  let counter = 0;
  cart.forEach((item) => {
    counter += item.quantity;
  });
  setcartQuantity(counter);
};




///

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  const handleLogOut = () => {
;     dispatch(logOut());
  };

  return (
    <nav className={`headerNavBar ${modo}`}>
        <h2 className={`titleNavBar ${modo}`}>Find me a HOME</h2>
      <ul className="navega">
        <li>
          <a className={`title_textNavBar ${modo}`} onClick={handleClick} href="/">
            Inicio
          </a>
        </li>
        <li>
          <a
            className={`title_textNavBar ${modo}`}
            onClick={handleClick}
            href="/QuienesSomos?"
          >
            Quienes somos
          </a>
        </li>
        <li>
          <a
            className={`title_textNavBar ${modo}`}
            onClick={handleClick}
            href="/productos"
          >
            Productos
          </a>
        </li>
        <li>
          <a
            className={`title_textNavBar ${modo}`}
            onClick={handleClick}
            href="/mascotas"
          >
            Adopta!
          </a>
        </li>
        <li>
          <a
            className={`title_textNavBar ${modo}`}
            onClick={handleClick}
            href="/requisitos"
          >
            Requisitos adopción
          </a>
        </li>
       
          { logged?

            <li >
            <Link to="/">

            <button onClick={handleLogOut} >Cerrar Sesion</button>
            
            </Link>
            
            </li> 
           

             :

            <li >

            <Link to="/iniciarSesion">
         
             <button >Iniciar Sesion</button>
             
             </Link>
             </li>
          
          }
           
          {

             logged?.rango==="admin"?
            
            <Link to="/dashboard">
            
            <button>
              dashboard
            </button>

            </Link>
            
             :
             <r></r>


         }




         <li >
          <Link to="/carrito" >
        <img src={carrito} alt="carrito" width="25px" /> {cartQuantity}
        </Link>
        </li>

        <li>
          <Dark/>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
