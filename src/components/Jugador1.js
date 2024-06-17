import PropTypes from "prop-types";

const Jugador1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-default-white overflow-hidden flex flex-col items-start justify-start pt-[106px] px-[89px] pb-[180px] box-border relative gap-[104px] max-w-full text-left text-31xl text-goldenrod font-body-body-2 mq825:gap-[26px] mq825:pt-[45px] mq825:px-[22px] mq825:pb-[76px] mq825:box-border mq1275:gap-[52px] mq1275:pt-[69px] mq1275:px-11 mq1275:pb-[117px] mq1275:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/eg-argentina-futbol-image-92-1@2x.png"
      />
      <div className="flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
        <h1 className="m-0 relative text-inherit tracking-[-0.03em] font-bold font-inherit [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000] z-[1] mq825:text-21xl mq450:text-11xl">
          JUGADORES DESTACADOS
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[86px] max-w-full text-21xl text-whitesmoke mq825:gap-[43px] mq450:gap-[21px] mq1575:flex-wrap">
        <div className="h-[834px] w-[578px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[578px] max-w-full mq825:min-w-full mq1575:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq1575:self-stretch mq1575:w-auto"
            loading="lazy"
            alt=""
            src="/eg-argentina-futbol-image-06-1@2x.png"
          />
        </div>
        <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.03em] font-normal font-inherit inline-block min-w-[701px] max-w-full z-[1] mq825:text-13xl mq1275:min-w-full mq450:text-5xl">
          Vinicius Jr., cuyo nombre completo es Vinícius José Paixão de Oliveira
          Júnior, es un futbolista profesional brasileño que juega como extremo
          en el Real Madrid y en la selección nacional de Brasil. Nacido el 12
          de julio de 2000 en São Gonçalo, se destacó desde joven por su
          velocidad y habilidades técnicas, iniciando su carrera en Flamengo
          antes de unirse al Real Madrid en 2018. Con su estilo de juego
          electrizante y creativo, Vinicius ha evolucionado constantemente,
          convirtiéndose en una pieza clave del ataque madridista y un referente
          emergente en el fútbol mundial. Su capacidad para desbordar defensas y
          su mejora en la definición han sido cruciales tanto para su club como
          para su selección, consolidándose como uno de los talentos más
          prometedores de su generación.
        </h1>
      </div>
    </section>
  );
};

Jugador1.propTypes = {
  className: PropTypes.string,
};

export default Jugador1;
