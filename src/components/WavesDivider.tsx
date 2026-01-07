import wavesSvg from "@/assets/waves.svg";

const WavesDivider = () => {
  return (
    <div 
      className="w-full relative z-20 -mt-[40px] sm:-mt-[60px] md:-mt-[80px] lg:-mt-[100px]"
    >
      <img
        src={wavesSvg}
        alt=""
        className="w-full h-[60px] sm:h-[80px] md:h-[120px] lg:h-[160px] object-cover object-top"
        style={{ objectPosition: "center top" }}
        aria-hidden="true"
      />
    </div>
  );
};

export default WavesDivider;
