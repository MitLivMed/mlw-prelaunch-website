import wavesImage from "@/assets/waves-trans.png";

const WavesDivider = () => {
  return (
    <div className="w-full overflow-hidden relative -mt-12 md:-mt-16 z-10">
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
