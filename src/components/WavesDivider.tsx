import wavesImage from "@/assets/waves-trans.png";

const WavesDivider = () => {
  return (
    <div className="w-full overflow-hidden py-4 md:py-8">
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
