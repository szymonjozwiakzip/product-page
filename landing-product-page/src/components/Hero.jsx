export default function Hero() {
  return (
    <section className="relative w-full bg-white flex justify-center items-center py-16 px-4">
      <div className="relative w-[1350px] h-[678px] rounded-xl overflow-visible">
        <img
          src="/images/hero1@2x.png"
          alt="Kobieta na plaży"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 slide-in-right delay-200"
        />

        <div className="absolute top-[70px] left-[70px] z-10 text-left max-w-[400px] slide-in-right delay-400">
          <h1 className="text-[72px] leading-tight text-[#0F7F25] font-light uppercase mb-4 font-['Roboto']">
            Naturalna<br />Zasada<br />Piękna
          </h1>
          <p className="text-[24px] text-black font-['Roboto']">
            Skuteczna ochrona skóry<br />
            przed promieniami <span className="text-[#0F7F25] font-bold">UVA i UVB</span>
          </p>
        </div>

        <img
          src="/images/8000137014514-Aloesowy-Krem-Przeciwsłoneczny-SPF-50@2x.png"
          alt="Produkt SPF z aloesem"
          className="absolute bottom-[-150px] left-[138px] w-[745px] z-20 slide-in-left delay-400"
        />

        <img
          src="/images/aloes.png"
          alt="Plasterki aloesu"
          className="absolute bottom-[-80px] left-[123px] w-[575px] z-10 slide-in-left delay-600"
        />
      </div>
    </section>
  );
}
