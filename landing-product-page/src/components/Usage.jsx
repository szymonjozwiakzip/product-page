import '../styles/usage.css';
import UsageIcons from './UsageIcons';

export default function Usage() {
  return (
    <section id="usage" className="usage-section">
      <div className="usage-top" data-aos="fade-left" data-aos-delay="400">
        <div className="usage-image-box">
          <img src="/images/usageproduct@2x.png" alt="Sposób użycia" className="usage-image" />
          <div className="usage-overlay-icon">
  <div className="overlay-icon-inner">
    <img src="/images/Path65.svg" alt="outline" className="icon-layer layer1" />
    <img src="/images/Path66.svg" alt="inner" className="icon-layer layer2" />
    <img src="/images/Path67.svg" alt="drop" className="icon-layer layer3" />
  </div>
</div>

        </div>
        <div className="usage-text-content" data-aos="fade-right" data-aos-delay="400">
          <h2 className="usage-title">Sposób użycia</h2>
          <p className="usage-desc">
            Rozpylić z odległości około 10 cm i wmasować produkt w skórę 30 minut przed ekspozycją na słońce.
            Stosuj ponownie tak często i w takich ilościach, jak to potrzebne, w szczególności w przypadku
            długotrwałego przebywania na słońcu, intensywnego pocenia się, po zmoczeniu skóry lub wysuszeniu jej.
            Filtry przeciwsłoneczne mogą poplamić ubranie.
          </p>
        </div>
      </div>

      <UsageIcons data-aos="fade-up" data-aos-delay="600" />
    </section>
  );
}
