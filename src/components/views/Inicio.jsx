import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import CardReceta from "./recetas/CardReceta";

const Inicio = () => {
    return (
        <section className="mainSection p-3">
              <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
        <Masonry>
            <CardReceta></CardReceta>
        </Masonry>
        
    </ResponsiveMasonry>
        </section>
      
    );
};

export default Inicio;