import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header1 = ({
  className = "",
  bGMarginLeft,
  onLabelTextClick,
  onMenuItemDefaultClick1,
}) => {
  const headerStyle = useMemo(() => {
    return {
      marginLeft: bGMarginLeft,
    };
  }, [bGMarginLeft]);

  const navigate = useNavigate();

  const onMenuItemDefaultClick = useCallback(() => {
    navigate("/jugadores");
  }, [navigate]);

  const onMenuItemDefaultClick2 = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center py-[9px] px-5 box-border sticky gap-[332px] top-[0] z-[99] max-w-full text-left text-xl text-black font-body-body-2 mq1325:gap-[166px] mq450:gap-[41px] mq900:gap-[83px] ${className}`}
      style={headerStyle}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1px_0px_#e5e9f2] bg-default-white" />
      <div className="h-7 w-[105px] relative overflow-hidden shrink-0 hidden z-[1]" />
      <nav className="m-0 w-[248px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border mq450:w-0 mq900:hidden">
        <nav className="m-0 self-stretch overflow-hidden flex flex-row items-start justify-between gap-[20px] z-[1] text-left text-sm text-text-gray-900 font-body-body-2 mq450:hidden">
          <div className="flex flex-row items-start justify-start">
            <a
              className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[62px]"
              onClick={onLabelTextClick}
            >
              Entradas
            </a>
          </div>
          <div
            className="flex flex-row items-start justify-start cursor-pointer"
            onClick={onMenuItemDefaultClick}
          >
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[72px]">
              Jugadores
            </a>
          </div>
          <div
            className="flex flex-row items-start justify-start cursor-pointer"
            onClick={onMenuItemDefaultClick1}
          >
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[50px]">
              Galeria
            </a>
          </div>
        </nav>
      </nav>
      <div className="flex flex-row items-start justify-start py-0 pr-[273px] pl-0 box-border gap-[16px] max-w-full mq900:pr-[136px] mq900:box-border">
        <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
          <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] whitespace-nowrap z-[1]">
            REAL MADRID
          </a>
        </div>
        <div className="h-[54px] w-[72px] relative z-[2]">
          <img
            className="absolute h-[calc(100%_-_4px)] top-[2px] bottom-[2px] left-[2px] max-h-full w-[50px] object-cover"
            loading="lazy"
            alt=""
            src="/r-1@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[14px] z-[1]">
          <button className="cursor-pointer py-2 px-[19px] bg-text-gray-100 w-[77px] rounded-md box-border flex flex-row items-start justify-start border-[1px] border-solid border-black hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
            <a className="[text-decoration:none] relative text-sm leading-[20px] font-medium font-body-body-2 text-default-black text-center inline-block min-w-[37px]">
              Login
            </a>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-5 bg-default-black rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-100">
            <a className="[text-decoration:none] relative text-sm leading-[20px] font-medium font-body-body-2 text-default-white text-center inline-block min-w-[51px]">
              Sign up
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  bGMarginLeft: PropTypes.any,

  /** Action props */
  onLabelTextClick: PropTypes.func,
  onMenuItemDefaultClick1: PropTypes.func,
};

export default Header1;
