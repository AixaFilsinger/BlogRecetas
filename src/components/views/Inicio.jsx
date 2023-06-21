import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CardReceta from "./recetas/CardReceta";
import { obtenerRecetas } from "../helpers/queries";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import banner2 from "../../assets/banner2.png"
import banner1 from "../../assets/banner1.png"

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas().then((respuesta) => {
      if (respuesta) {
        setRecetas(respuesta);
      } else {
        Swal.fire(
          "Se produjo un error al intentar cargar los datos",
          `Intente realizar esta operacion mas tarde`,
          "error"
        );
      }
    });
  }, []);

  return (
    <section className="mainSection">
        <img src={banner2} alt="banner recetas" className="banner img-fluid" />
        <article className="p-5">
             <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 500: 3 }}>
        <Masonry>
          {recetas.map((receta) => (
            <CardReceta key={receta.id} receta={receta}></CardReceta>
          ))}
        </Masonry>
      </ResponsiveMasonry>
        </article>
        
     
    </section>
  );
};

export default Inicio;
