import Navbar from "./Components/Navbar";
import Inicio from "./Components/Inicio";
import NuestrasAlanzas from "./Components/NuestrasAlianzas";
import MisProyectos from "./Components/MisProyectos";
import Galeria from "./Components/Galeria";
import Nosotros from "./Components/Nosotros";
import Detalles from "./Components/Detalles";
import VisionMision from "./Components/VisionMision";
import Reseñas from "./Components/Reseñas";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";

import { galeriaMonarcaResidencial } from "./index";
import { galeriaCoralinaResidencial } from "./index";

const App = () => {
  const styles = {
    marginSection: "mb-28",
  };

  return (
    <div>
      <div>
        <Navbar />
        <Inicio />
      </div>
      <NuestrasAlanzas marginBottom={styles.marginSection} />
      <MisProyectos marginBottom={styles.marginSection} />
      <Galeria
        marginBottom={styles.marginSection}
        title={galeriaMonarcaResidencial.title}
        gallery={galeriaMonarcaResidencial.gallery}
        imgLink={galeriaMonarcaResidencial.link}
      />
      <Nosotros marginBottom={styles.marginSection} />
      <Galeria
        marginBottom={styles.marginSection}
        title={galeriaCoralinaResidencial.title}
        gallery={galeriaCoralinaResidencial.gallery}
      />
      <VisionMision marginBottom={styles.marginSection} />
    </div>
  );
};

export default App;
