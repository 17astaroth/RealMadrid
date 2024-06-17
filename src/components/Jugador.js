import PropTypes from "prop-types";

const Jugador = ({
  className = "",
  eGArgentinaFutbolImage921,
  eGArgentinaFutbolImage061,
  judeBellinghamEsUnDestaca,
}) => {
  return (
    <section
      className={`self-stretch bg-default-white overflow-hidden flex flex-row items-start justify-start pt-[121px] pb-[125px] pr-[86px] pl-[92px] box-border relative gap-[86px] max-w-full text-left text-21xl text-whitesmoke font-body-body-2 mq825:gap-[21px] mq825:pt-[51px] mq825:pb-[53px] mq825:pr-[21px] mq825:pl-[23px] mq825:box-border mq1275:gap-[43px] mq1275:pt-[79px] mq1275:pb-[81px] mq1275:pr-[43px] mq1275:pl-[46px] mq1275:box-border mq1575:flex-wrap ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={eGArgentinaFutbolImage921}
      />
      <div className="h-[834px] w-[578px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[578px] max-w-full mq825:min-w-full mq1575:flex-1">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq1575:self-stretch mq1575:w-auto"
          loading="lazy"
          alt=""
          src={eGArgentinaFutbolImage061}
        />
      </div>
      <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.03em] font-normal font-inherit inline-block min-w-[701px] max-w-full z-[1] mq825:text-13xl mq1275:min-w-full mq450:text-5xl">
        {judeBellinghamEsUnDestaca}
      </h1>
    </section>
  );
};

Jugador.propTypes = {
  className: PropTypes.string,
  eGArgentinaFutbolImage921: PropTypes.string,
  eGArgentinaFutbolImage061: PropTypes.string,
  judeBellinghamEsUnDestaca: PropTypes.string,
};

export default Jugador;
