import wavesImage from "@/assets/waves-trans.png";

const WavesDivider = () => {
  return (
    <div className="w-full overflow-hidden relative -mt-44 md:-mt-56 z-20">
      <img
        src={wavesImage}
        alt=""
        className="w-full h-auto object-cover"
        aria-hidden="true"
      />
    </div>
  );
};

export default WavesDivider;
