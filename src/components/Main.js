import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-start relative gap-[149px] max-w-full mq1325:gap-[74px] mq450:gap-[19px] mq900:gap-[37px] mq1725:flex-wrap mq1725:justify-center ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/alvaropalacios8uzhruduvsmunsplash-3@2x.png"
      />
      <img
        className="self-stretch w-[498px] relative max-h-full object-cover min-h-[1080px] max-w-full z-[1] mq1725:flex-1"
        loading="lazy"
        alt=""
        src="/139462santiagobernabeuwallpaper-1@2x.png"
      />
      <div className="h-[1080px] w-[1174px] flex flex-col items-start justify-start pt-[71px] px-0 pb-0 box-border min-w-[1174px] max-w-full mq1325:pt-[46px] mq1325:box-border mq1325:min-w-full mq900:pt-[30px] mq900:box-border mq1725:flex-1">
        <div className="self-stretch h-[1080px] relative">
          <div className="absolute top-[344px] left-[217px] [filter:blur(360px)] rounded-[50%] bg-skyblue w-[736px] h-[736px] z-[1]" />
          <img
            className="absolute top-[0px] left-[534px] rounded-381xl w-[640px] h-[685px] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/argentina-10-switzerland-aet--di-maria-nets-dramatic-late-winner-2@2x.png"
          />
          <img
            className="absolute top-[482px] left-[0px] w-[762px] h-[429px] object-cover z-[3]"
            alt=""
            src="/ezgif-8@2x.png"
          />
        </div>
      </div>
      <div className="h-[1000px] w-[1842px] relative bg-gainsboro-400 box-border hidden max-w-full z-[3] border-[2px] border-solid border-whitesmoke" />
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
