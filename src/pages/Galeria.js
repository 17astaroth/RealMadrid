import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";
import Section from "../components/Section";
const Galeria = () => {
  const navigate = useNavigate();

  const onLabelTextClick = useCallback(() => {
    navigate("/entradas");
  }, [navigate]);

  return (
    <div className="w-full relative bg-default-white overflow-hidden flex flex-col items-start justify-start gap-[1216px] leading-[normal] tracking-[normal] mq750:gap-[304px] mq1050:gap-[608px]">
      <Header1 bGMarginLeft="-7px" onLabelTextClick={onLabelTextClick} />
      <Section />  
      <Footer1 propMarginLeft="unset" />
    </div>    
  );
};

export default Galeria;
