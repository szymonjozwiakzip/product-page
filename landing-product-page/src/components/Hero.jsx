import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <img
          src="/images/hero1@2x.png"
          alt="Kobieta na plaży"
          className="hero-bg slide-in-right delay-200"
        />

        <div className="hero-text slide-in-right delay-400">
          <h1 className="hero-title">
            Naturalna<br />Zasada<br />Piękna
          </h1>
          <p className="hero-desc">
            Skuteczna ochrona skóry<br />
            przed promieniami <span>UVA i UVB</span>
          </p>
        </div>

        <img
          src="/images/8000137014514-Aloesowy-Krem-Przeciwsłoneczny-SPF-50@2x.png"
          alt="Produkt SPF z aloesem"
          className="hero-product slide-in-left delay-400"
        />

        <img
          src="/images/aloes.png"
          alt="Plasterki aloesu"
          className="hero-aloe slide-in-left delay-600"
        />
      </div>
    </section>
  );
}
