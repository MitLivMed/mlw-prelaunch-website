import wavesSvg from "@/assets/waves.svg";

const WavesDivider = () => {
  return (
    <div 
      className="w-full relative z-20 -mt-[80px] sm:-mt-[100px] md:-mt-[140px] lg:-mt-[180px]"
    >
      <img
        src={wavesSvg}
        alt=""
        className="w-full h-[160px] sm:h-[200px] md:h-[280px] lg:h-[360px] object-cover"
        style={{ objectPosition: "center 65%" }}
        aria-hidden="true"
      />
    </div>
  );
};

export default WavesDivider;
