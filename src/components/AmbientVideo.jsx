import windows from "../assets/window.gif";

const AmbientVideo = () => {
  return (
    <img
      src={windows}
      alt="CRT ambient"
      className={`
        absolute inset-0
        w-full h-full
        object-cover
        pointer-events-none
        z-0
        opacity-5
      `}
    />
  );
};

export default AmbientVideo;
