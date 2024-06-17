import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import Main from "../components/Main";
import Footer1 from "../components/Footer1";

const Inicio = () => {
  const navigate = useNavigate();

  const onMenuItemDefaultClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <div className="w-full relative bg-default-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header1 onMenuItemDefaultClick1={onMenuItemDefaultClick} />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/cristianoronaldorealmadridbarcelonalaliga-1uuwlcqsq0hfi1vro9tq3pc5ty-1@2x.png"
      />
      <section className="self-stretch h-[1080px] relative bg-whitesmoke overflow-hidden shrink-0 text-center text-31xl text-whitesmoke font-body-body-2">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[-27px] max-h-full w-[1999px] object-cover"
          loading="lazy"
          alt=""
          src="/abigailkeenan8s5quubtymunsplash-1@2x.png"
        />
        <h1 className="m-0 absolute top-[289px] left-[137px] text-inherit tracking-[-0.03em] font-normal font-inherit inline-block w-[1640px] h-[300px] z-[1] mq450:text-11xl mq900:text-21xl">
          El hogar del Real Madrid es más que un estadio; es un símbolo de
          grandeza y tradición. Cada entrenamiento en su césped es una
          oportunidad para prepararse y alcanzar nuevas alturas, impulsados por
          la pasión y el apoyo inquebrantable de los aficionados. Aquí, la
          excelencia no es solo un objetivo, sino una expectativa diaria. ¡Hala
          Madrid!
        </h1>
      </section>
      <Main />
      <Footer1 />
    </div>
  );
};

export default Inicio;
