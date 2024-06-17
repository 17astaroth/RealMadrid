import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Jugadores from "./pages/Jugadores";
import Galeria from "./pages/Galeria";
import Entradas from "./pages/Entradas";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/jugadores":
        title = "";
        metaDescription = "";
        break;
      case "/galeria":
        title = "";
        metaDescription = "";
        break;
      case "/entradas":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/jugadores" element={<Jugadores />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/entradas" element={<Entradas />} />
    </Routes>
  );
}
export default App;
