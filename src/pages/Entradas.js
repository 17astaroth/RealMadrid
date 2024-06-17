import FrameComponent1 from "../components/FrameComponent1";
import Body from "../components/Body";
import FrameComponent from "../components/FrameComponent";
import Countdown from "../components/Countdown";
import Footer2 from "../components/Footer2";

const Entradas = () => {
  return (
    <div className="w-full relative bg-gainsboro-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[768px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <FrameComponent1 />
      <Body />
      <section className="w-[1920px] !m-[0] absolute top-[1958px] left-[0px] flex flex-row items-start justify-start max-w-full">
        <div className="h-full w-[1904px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-gray-200 z-[1]" />
        <img
          className="h-[657px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/rectangle-9@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-29xl text-default-white font-roboto">
        <div className="h-full w-[1904px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-gray-200" />
        <img
          className="h-[213px] flex-1 relative max-w-full overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/mask-group-1.svg"
        />
        <div className="absolute !m-[0] top-[51px] left-[481px] font-light z-[2] mq450:text-10xl mq800:text-19xl">
          ¡Puedes ganar entradas!
        </div>
      </section>
      <FrameComponent />
      <Countdown />
      <Footer2 />
    </div>
  );
};

export default Entradas;
