import PropTypes from "prop-types";

const Body = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-56 pr-[29px] pl-5 box-border max-w-full text-left text-77xl text-default-white font-roboto mq800:pb-[146px] mq800:box-border ${className}`}
    >
      <div className="w-[1209px] flex flex-col items-start justify-start gap-[58px] max-w-full mq800:gap-[29px]">
        <div className="flex flex-col items-start justify-start gap-[43px] max-w-full mq800:gap-[21px]">
          <div className="w-[1179px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-10xl mq800:text-29xl">
              ENTRADAS
            </h1>
          </div>
          <h3 className="m-0 relative text-53xl font-light font-inherit z-[1] mq450:text-24xl mq800:text-39xl">
            La mejor manera de comprar entradas
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[27px] pl-5">
          <button className="cursor-pointer py-3.5 px-[58px] bg-gray-200 w-60 rounded-41xl box-border flex flex-row items-start justify-end z-[1] border-[1px] border-solid border-gray-200 hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-300">
            <div className="h-[60px] w-60 relative rounded-41xl bg-gray-200 box-border hidden border-[1px] border-solid border-gray-200" />
            <div className="relative text-5xl font-medium font-roboto text-black text-left inline-block min-w-[115px] z-[1] mq450:text-lgi">
              COMPRAR
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

Body.propTypes = {
  className: PropTypes.string,
};

export default Body;
