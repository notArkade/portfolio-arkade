import Marquee from "../components/MarqueeEffect/Marquee";

const OpenToWork = () => {
  return (
    <>
      <div className="border-t-2 border-b-2 border-[#7CFFB2] select-none opacity-70">
        <Marquee>
          <div className="flex items-center justify-center text-[#7CFFB2] font-bold space-mono">
            <p className="lg:text-4xl md:text-2xl text-xl px-10">&#9679;</p>
            <p className="lg:text-6xl md:text-5xl text-2xl">Open to work</p>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default OpenToWork;
