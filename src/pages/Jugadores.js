import Header from "../components/Header";
import Jugador1 from "../components/Jugador1";
import Jugador from "../components/Jugador";
import Footer from "../components/Footer";

const Jugadores = () => {
  return (
    <div className="w-full relative bg-default-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header />
      <Jugador1 />
      <Jugador
        eGArgentinaFutbolImage921="/eg-argentina-futbol-image-92-1-1@2x.png"
        eGArgentinaFutbolImage061="/eg-argentina-futbol-image-06-1-1@2x.png"
        judeBellinghamEsUnDestaca="Jude Bellingham es un destacado futbolista inglés que actúa como centrocampista en el Real Madrid y en la selección nacional de Inglaterra. Nacido el 29 de junio de 2003 en Stourbridge, comenzó su carrera en el Birmingham City antes de trasladarse al Borussia Dortmund en 2020, donde se hizo notar por su excepcional talento y madurez en el campo a una edad temprana. En 2023, Bellingham se unió al Real Madrid, convirtiéndose rápidamente en una figura clave en el mediocampo del club. Conocido por su visión, dinamismo y habilidades técnicas, es considerado uno de los jugadores jóvenes más prometedores del fútbol mundial, y se espera que tenga un papel crucial en el futuro del equipo nacional inglés."
      />
      <Jugador
        eGArgentinaFutbolImage921="/eg-argentina-futbol-image-92-1-2@2x.png"
        eGArgentinaFutbolImage061="/eg-argentina-futbol-image-06-1-2@2x.png"
        judeBellinghamEsUnDestaca="Luka Modrić es un futbolista croata que juega como centrocampista en el Real Madrid y en la selección nacional de Croacia. Nacido el 9 de septiembre de 1985 en Zadar, se formó en el Dinamo Zagreb antes de pasar al Tottenham Hotspur, y en 2012 se unió al Real Madrid, donde ha sido fundamental en la conquista de numerosos títulos, incluyendo varias Ligas de Campeones de la UEFA. Conocido por su visión de juego, precisión en los pases y capacidad para controlar el ritmo del partido, Modrić ha sido galardonado con varios premios individuales, destacando el Balón de Oro en 2018, cuando llevó a Croacia a la final de la Copa del Mundo. Su liderazgo y consistencia en el campo lo han consolidado como uno de los mejores centrocampistas de su generación."
      />
      <Footer />
    </div>
  );
};

export default Jugadores;
