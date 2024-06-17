import PropTypes from "prop-types";

const Countdown = ({ className = "" }) => {
  return (
    <section
      className={`w-[1866px] flex flex-row items-start justify-center pt-0 px-5 pb-[205px] box-border max-w-full text-left text-29xl text-black font-roboto mq800:pb-[133px] mq800:box-border ${className}`}
    >
      <div className="w-[994px] flex flex-col items-end justify-start gap-[104px] max-w-full mq1125:gap-[52px] mq800:gap-[26px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[38px] mq800:gap-[19px]">
          <div className="relative z-[3] mq450:text-10xl mq800:text-19xl">
            ¡Reciba una notificación de la fecha del sorteo!
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[103px] text-5xl mq450:pl-5 mq450:box-border mq800:pl-[51px] mq800:box-border">
            <div className="relative whitespace-nowrap z-[3] mq450:text-lgi">
              Empieza el 25/06/2024 a horas 09:00 PM
            </div>
          </div>
        </div>
        <div className="w-[956px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center">
          <div className="w-[662px] flex flex-row flex-wrap items-start justify-center gap-[34px] max-w-full mq800:gap-[17px]">
            <div className="rounded-md bg-gray-200 flex flex-col items-start justify-start py-[29px] px-[42px] z-[3]">
              <div className="w-[140px] h-[140px] relative rounded-md bg-gray-200 hidden" />
              <b className="relative inline-block min-w-[56px] z-[5] mq450:text-10xl mq800:text-19xl">
                20
              </b>
              <div className="flex flex-row items-start justify-start py-0 px-1 text-3xl">
                <div className="relative inline-block min-w-[48px] z-[4] mq450:text-lg">
                  Days
                </div>
              </div>
            </div>
            <div className="rounded-md bg-black flex flex-col items-start justify-start py-[29px] px-10 z-[3] text-default-white">
              <div className="w-[140px] h-[140px] relative rounded-md bg-black hidden" />
              <div className="flex flex-row items-start justify-start py-0 px-0.5">
                <b className="relative inline-block min-w-[56px] z-[5] mq450:text-10xl mq800:text-19xl">
                  22
                </b>
              </div>
              <div className="relative text-3xl inline-block min-w-[60px] z-[4] mq450:text-lg">
                Hours
              </div>
            </div>
            <div className="flex-1 rounded-md bg-default-white flex flex-col items-start justify-start py-[29px] px-[30px] box-border min-w-[91px] z-[3]">
              <div className="w-[140px] h-[140px] relative rounded-md bg-default-white hidden" />
              <div className="flex flex-row items-start justify-start py-0 px-[26px]">
                <b className="relative inline-block min-w-[28px] z-[5] mq450:text-10xl mq800:text-19xl">
                  5
                </b>
              </div>
              <div className="self-stretch relative text-3xl inline-block min-w-[80px] z-[4] mq450:text-lg">
                Minutes
              </div>
            </div>
            <div className="rounded-md bg-gray-100 flex flex-col items-start justify-start py-[27px] pr-[26px] pl-[27px] z-[3] text-default-white border-[1px] border-solid border-black">
              <div className="w-[140px] h-[140px] relative rounded-md bg-gray-100 box-border hidden border-[1px] border-solid border-black" />
              <div className="w-[85px] flex flex-row items-start justify-start py-0 pr-[15px] pl-3.5 box-border">
                <b className="flex-1 relative z-[5] mq450:text-10xl mq800:text-19xl">
                  10
                </b>
              </div>
              <div className="relative text-3xl inline-block min-w-[85px] z-[4] mq450:text-lg">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Countdown.propTypes = {
  className: PropTypes.string,
};

export default Countdown;
