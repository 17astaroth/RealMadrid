import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[86px] box-border max-w-full text-left text-29xl text-default-white font-roboto mq1125:pb-14 mq1125:box-border mq800:pb-9 mq800:box-border ${className}`}
    >
      <div className="flex-1 bg-gray-100 flex flex-col items-start justify-start pt-[75px] px-[367px] pb-[132px] box-border gap-[109px] max-w-full mq1125:gap-[54px] mq1125:pt-[49px] mq1125:px-[183px] mq1125:pb-[86px] mq1125:box-border mq800:gap-[27px] mq800:pt-8 mq800:px-[91px] mq800:pb-14 mq800:box-border">
        <div className="w-[1920px] h-[977px] relative bg-gray-100 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[15px]">
          <div className="relative font-medium z-[1] mq450:text-10xl mq800:text-19xl">
            Entradas a prueba de bots
          </div>
        </div>
        <div className="w-[1170px] flex flex-col items-start justify-start gap-[50.4px] max-w-full text-lg mq800:gap-[25px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[46px] max-w-full mq1325:flex-wrap mq800:gap-[23px]">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[379px] max-w-full mq1325:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="w-5 h-5 relative box-border z-[1] border-[1px] border-solid border-gray-200">
                    <div className="absolute top-[0px] left-[0px] box-border w-full h-full hidden border-[1px] border-solid border-gray-200" />
                    <div className="absolute top-[5px] left-[5px] bg-gray-200 w-2.5 h-2.5 z-[1]" />
                  </div>
                </div>
                <div className="flex-1 relative leading-[28px] inline-block min-w-[356px] max-w-full z-[1] mq1325:min-w-full">
                  Puja y gana entradas por una fracción de lo que cuestan en los
                  sitios de reventa
                </div>
              </div>
              <div className="w-[543px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full mt-[-1px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full mq800:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="w-5 h-5 relative box-border z-[1] border-[1px] border-solid border-gray-200">
                      <div className="absolute top-[0px] left-[0px] box-border w-full h-full hidden z-[1] border-[1px] border-solid border-gray-200" />
                      <div className="absolute top-[5px] left-[5px] bg-gray-200 w-2.5 h-2.5 z-[2]" />
                    </div>
                  </div>
                  <div className="flex-1 relative leading-[28px] inline-block min-w-[328px] max-w-full z-[2]">
                    La mecánica detrás de este sitio hace que sea casi imposible
                    ser engañado
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[541px] flex flex-row items-start justify-start gap-[16px] min-w-[541px] max-w-full mq1325:flex-1 mq1325:min-w-full mq800:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[42px]">
                  <div className="w-5 h-5 relative box-border z-[1] border-[1px] border-solid border-gray-200">
                    <div className="absolute top-[0px] left-[0px] box-border w-full h-full hidden z-[1] border-[1px] border-solid border-gray-200" />
                    <div className="absolute top-[5px] left-[5px] bg-gray-200 w-2.5 h-2.5 z-[2]" />
                  </div>
                  <div className="w-5 h-5 relative box-border z-[1] border-[1px] border-solid border-gray-200">
                    <div className="absolute top-[0px] left-[0px] box-border w-full h-full hidden z-[1] border-[1px] border-solid border-gray-200" />
                    <div className="absolute top-[5px] left-[5px] bg-gray-200 w-2.5 h-2.5 z-[2]" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[328px] max-w-full">
                <div className="w-[340px] relative leading-[28px] inline-block max-w-full z-[1]">
                  Las entradas nunca se venden por encima de su valor nominal
                </div>
                <div className="self-stretch relative leading-[28px] z-[1]">
                  Canjea todos los bokens (pujas) no utilizados por boletos, lo
                  que hace que sea imposible perderlos
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-4 box-border gap-[8.2px] max-w-full">
            <div className="h-[309.2px] w-80 flex flex-col items-start justify-start gap-[5.7px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/aewallout1-1@2x.png"
              />
              <img
                className="self-stretch h-[146px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/1204-1@2x.png"
              />
            </div>
            <img
              className="h-[309.2px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[339px] min-h-[309px] z-[1] mq1125:min-w-full"
              loading="lazy"
              alt=""
              src="/aewallout4-1@2x.png"
            />
            <img
              className="h-[309.2px] w-[311.9px] relative object-cover min-h-[309px] z-[1]"
              loading="lazy"
              alt=""
              src="/aewalloutbicketsshowcase-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="flex flex-row items-start justify-center gap-[30px] max-w-full mq800:flex-wrap">
              <button className="cursor-pointer py-3.5 pr-11 pl-[46px] bg-gray-200 rounded-41xl flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-gray-200 hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-300">
                <div className="h-[60px] w-[200px] relative rounded-41xl bg-gray-200 box-border hidden border-[1px] border-solid border-gray-200" />
                <div className="relative text-5xl font-medium font-roboto text-black text-left inline-block min-w-[110px] z-[1] mq450:text-lgi">
                  Registrate
                </div>
              </button>
              <button className="cursor-pointer py-3.5 pr-6 pl-9 bg-gray-200 rounded-41xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-gray-200 hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-300">
                <div className="h-[60px] w-64 relative rounded-41xl bg-gray-200 box-border hidden border-[1px] border-solid border-gray-200" />
                <div className="relative text-5xl font-medium font-roboto text-black text-left z-[1]">
                  Soy nuevo en esto
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
