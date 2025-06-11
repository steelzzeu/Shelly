export default function Landing() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center gap-10 pt-14 pb-24 bg-gradient-to-br from-ssrp-navy via-background to-black">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-extrabold text-4xl md:text-5xl text-white drop-shadow-lg tracking-tight">
          Sunshine State RP
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 font-medium">
          Florida’s Premier vMenu FiveM Roleplay Server.<br />
          Professional. Immersive. Unmatched Authority.
        </p>
        <a
          href="fivem://connect/fivem.ssrp.us"
          className="inline-block mt-8 px-8 py-3 bg-accent text-black font-bold rounded shadow-lg text-lg uppercase tracking-wide hover:bg-orange-500 transition"
        >
          Join Server
        </a>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder stat cards */}
          <div className="ssrp-card flex flex-col items-center p-6">
            <span className="text-2xl font-black text-accent">42</span>
            <span className="uppercase text-xs text-gray-400 mt-1">Players Online</span>
          </div>
          <div className="ssrp-card flex flex-col items-center p-6">
            <span className="text-2xl font-black text-accent">Los Santos</span>
            <span className="uppercase text-xs text-gray-400 mt-1">AOP</span>
          </div>
          <div className="ssrp-card flex flex-col items-center p-6">
            <span className="text-2xl font-black text-accent">Online</span>
            <span className="uppercase text-xs text-gray-400 mt-1">Server Status</span>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm italic mt-8">
        <span>SSRP is a serious roleplay environment. Florida-founded. Media-friendly. 24/7 Staff. <br />Scroll for more.</span>
      </div>
      {/* Placeholders for Department Carousel, Feature Grid, Discord Banner, etc. */}
    </section>
  );
}