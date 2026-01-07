import wavesImage from "@/assets/waves-trans.png";

const WavesDivider = () => {
  return (
    <div className="w-full overflow-hidden relative -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-44 z-20 -mb-4 sm:-mb-6 md:-mb-8">
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
