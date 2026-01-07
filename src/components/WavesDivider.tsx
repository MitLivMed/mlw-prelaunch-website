import wavesSvg from "@/assets/waves.svg";

const WavesDivider = () => {
  return (
    <div 
      className="w-full relative z-20 -mt-[60px] sm:-mt-[80px] md:-mt-[100px] lg:-mt-[120px]"
    >
      <img
        src={wavesSvg}
        alt=""
        className="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[240px] object-cover"
        style={{ objectPosition: "center 40%" }}
        aria-hidden="true"
      />
    </div>
  );
};

export default WavesDivider;
