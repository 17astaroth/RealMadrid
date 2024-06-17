import PropTypes from "prop-types";

const Footer2 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-default-white flex flex-col items-center justify-start py-6 px-5 box-border gap-[41px] max-w-full z-[3] text-left text-base text-default-black font-body-body-2 mq800:gap-[20px] ${className}`}
    >
      <div className="w-[1590px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <div className="w-[563px] flex flex-col items-start justify-start gap-[31px] max-w-full mq800:gap-[15px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="w-[105px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[3px] pr-4 pl-[17px] box-border">
              <div className="h-[54px] flex-1 relative">
                <img
                  className="absolute w-[calc(100%_-_22px)] top-[4px] right-[11px] left-[11px] max-w-full overflow-hidden h-[50px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/r-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[24px] mq800:flex-wrap">
            <div className="relative leading-[26px] inline-block min-w-[70px]">
              Nosotros
            </div>
            <div className="relative leading-[26px] inline-block min-w-[77px]">
              Funciones
            </div>
            <div className="relative leading-[26px] inline-block min-w-[56px]">
              Precios
            </div>
            <div className="relative leading-[26px] inline-block min-w-[26px]">
              VIP
            </div>
            <div className="relative leading-[26px] inline-block min-w-[48px]">
              Ayuda
            </div>
            <div className="relative leading-[26px]">
              Politica de privacidad
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1590px] flex flex-col items-start justify-start gap-[24px] max-w-full text-sm text-gray-300">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq1325:pl-[27px] mq1325:pr-[27px] mq1325:box-border">
          <img
            className="flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/divider.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[24px]">
              © 2024 Real Madrid All rights reserved
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/social-icons.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/social-icons-1.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/social-icons-2.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/social-icons-3.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
